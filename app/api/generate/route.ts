import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { resume, role, exp, jd, plan, txnId } = await req.json();

  if (!resume || resume.trim().length < 20) {
    return NextResponse.json({ error: "Resume text is required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(getFallbackKit(plan, txnId), { status: 200 });
  }

  const prompt = buildGeneratePrompt(resume, role, exp, jd, plan);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 8192,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      return NextResponse.json(getFallbackKit(plan, txnId), { status: 200 });
    }

    const data = await response.json();
    const text: string = data?.content?.[0]?.text ?? "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return NextResponse.json(getFallbackKit(plan, txnId), { status: 200 });

    const parsed = JSON.parse(jsonMatch[0]);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json(getFallbackKit(plan, txnId), { status: 200 });
  }
}

function buildGeneratePrompt(
  resume: string,
  role: string,
  exp: string,
  jd: string,
  plan: string
): string {
  const isPro = plan === "pro";

  return `You are a world-class career coach and resume writer. Generate a complete career kit for this candidate.

Resume:
"""
${resume.slice(0, 3000)}
"""
${role ? `\nTarget Role: ${role}` : ""}
${exp ? `\nExperience Level: ${exp}` : ""}
${jd ? `\nJob Description:\n"""\n${jd.slice(0, 2000)}\n"""` : ""}

Return ONLY valid JSON (no markdown, no explanation) with this structure:
{
  "optimizedResume": "<full ATS-optimized resume with strong action verbs, quantified achievements, and relevant keywords>",
  "coverLetter1": "<professional cover letter tailored to the role>",
  ${isPro ? `"coverLetter2": "<story-driven cover letter showing personality>",
  "coverLetter3": "<concise 3-paragraph cover letter>",
  "linkedinHeadline": "<powerful LinkedIn headline under 220 characters>",
  "linkedinSummary": "<compelling LinkedIn About section 2-3 paragraphs>",
  "coldDMs": [
    "<LinkedIn DM to hiring manager>",
    "<LinkedIn DM to recruiter>",
    "<LinkedIn DM via mutual connection>",
    "<LinkedIn DM after applying>",
    "<LinkedIn DM for referral>"
  ],` : ""}
  "interviewQA": [
    ${isPro ? Array.from({ length: 20 }, (_, i) => `{"q": "<interview question ${i + 1}>", "a": "<detailed personalized answer>"}`) .join(",\n    ") : Array.from({ length: 10 }, (_, i) => `{"q": "<interview question ${i + 1}>", "a": "<detailed personalized answer>"}`) .join(",\n    ")}
  ],
  "keywordsAdded": ["<keyword1>", "<keyword2>", "<keyword3>", "<keyword4>", "<keyword5>"]
}`;
}

function getFallbackKit(plan: string, txnId: string) {
  const isPro = plan === "pro";
  const base = {
    optimizedResume: `[ATS-Optimized Resume]\n\nYour optimized resume will be delivered here.\n\nIf you don't see content, please WhatsApp +91 8778421719 with your transaction ID: ${txnId}`,
    coverLetter1: `[Professional Cover Letter]\n\nYour tailored cover letter will appear here.\n\nFor support, WhatsApp: +91 8778421719 | TXN: ${txnId}`,
    interviewQA: [
      { q: "Tell me about yourself.", a: "A personalized answer will be generated based on your resume." },
      { q: "Why do you want this role?", a: "A tailored answer aligned with your experience will appear here." },
    ],
    keywordsAdded: ["quantified impact", "technical leadership", "cross-functional collaboration", "data-driven", "scalable solutions"],
  };

  if (!isPro) return base;

  return {
    ...base,
    coverLetter2: `[Story-Driven Cover Letter]\n\nYour story-driven cover letter will appear here.\n\nWhatsApp: +91 8778421719 | TXN: ${txnId}`,
    coverLetter3: `[Concise Cover Letter]\n\nYour concise cover letter will appear here.\n\nWhatsApp: +91 8778421719 | TXN: ${txnId}`,
    linkedinHeadline: `Senior ${plan === "pro" ? "Professional" : "Engineer"} | Building at Scale | Open to Opportunities`,
    linkedinSummary: `Your optimized LinkedIn summary will appear here.\n\nContact WhatsApp +91 8778421719 | TXN: ${txnId}`,
    coldDMs: [
      `Hi [Name], I came across your profile and noticed you're at [Company]. I recently applied for the [Role] position and would love to connect. My background in [X] helped [specific achievement]. Would you be open to a quick chat?\n\n— [Your Name]`,
      `Hi [Recruiter], I just applied for the [Role] at [Company] and wanted to reach out directly. I have [X years] of experience in [field] and recently [key achievement]. I'd love to learn more about the team.\n\n— [Your Name]`,
      `Hi [Name], [Mutual Connection] suggested I reach out to you. I'm exploring opportunities in [field] and your work at [Company] really resonates with me. Would you be open to a 15-minute call?\n\n— [Your Name]`,
      `Hi [Name], I applied for [Role] at [Company] yesterday. I've been following your company's work on [specific project/product] and I'm genuinely excited about the direction. Happy to share more context.\n\n— [Your Name]`,
      `Hi [Name], I noticed you work at [Company] — I have a mutual connection, [Name], who speaks highly of the culture there. I'm exploring [role type] opportunities and would appreciate any advice on the best way to apply.\n\n— [Your Name]`,
    ],
    interviewQA: Array.from({ length: 20 }, (_, i) => ({
      q: `Sample interview question ${i + 1}`,
      a: `A personalized answer based on your resume will appear here. WhatsApp +91 8778421719 | TXN: ${txnId}`,
    })),
  };
}
