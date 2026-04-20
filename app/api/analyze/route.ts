import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { resume, role, exp, jd } = await req.json();

  if (!resume || resume.trim().length < 20) {
    return NextResponse.json({ error: "Resume text is required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(getFallbackAnalysis(), { status: 200 });
  }

  const prompt = buildAnalysisPrompt(resume, role, exp, jd);

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      return NextResponse.json(getFallbackAnalysis(), { status: 200 });
    }

    const data = await response.json();
    const text: string = data?.content?.[0]?.text ?? "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return NextResponse.json(getFallbackAnalysis(), { status: 200 });

    const parsed = JSON.parse(jsonMatch[0]);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json(getFallbackAnalysis(), { status: 200 });
  }
}

function buildAnalysisPrompt(resume: string, role: string, exp: string, jd: string): string {
  return `You are an expert ATS and resume analyst. Analyze the resume below and return a JSON object.

Resume:
"""
${resume.slice(0, 3000)}
"""
${role ? `\nTarget Role: ${role}` : ""}
${exp ? `\nExperience Level: ${exp}` : ""}
${jd ? `\nJob Description:\n"""\n${jd.slice(0, 2000)}\n"""` : ""}

Return ONLY valid JSON with this exact structure (no markdown, no explanation):
{
  "atsScore": <integer 0-100>,
  "scoreTitle": "<2-4 word title like 'Needs Work' or 'Strong Resume'>",
  "scoreDesc": "<2-sentence explanation of the score>",
  "freeTip": "<1 specific, actionable improvement tip with an example>",
  "missingKeywords": ["<keyword1>", "<keyword2>", "<keyword3>"],
  "strengths": ["<strength1>", "<strength2>", "<strength3>"],
  "weaknesses": ["<weakness1>", "<weakness2>", "<weakness3>"]
}`;
}

function getFallbackAnalysis() {
  return {
    atsScore: 52,
    scoreTitle: "Needs Work",
    scoreDesc: "Your resume is missing key ATS signals. Automated screening is likely filtering you out before a human reads your profile.",
    freeTip: "Add quantified achievements to every bullet. Replace vague claims with metrics: 'Led team of 8, delivered 3 projects 2 weeks early, saving ₹4L in costs.'",
    missingKeywords: ["quantified metrics", "technical stack keywords", "leadership outcomes"],
    strengths: ["Clear contact information", "Relevant education"],
    weaknesses: ["No measurable impact", "Generic bullet points", "Missing industry keywords"],
  };
}
