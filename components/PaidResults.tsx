"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PaidKit, PlanType } from "@/types";

function ResultBlock({ title, content, id }: { title: string; content: string; id: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)", marginBottom: 14 }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.25)" }}>
        <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>{title}</span>
        <button onClick={copy} style={{ background: copied ? "rgba(16,185,129,0.15)" : "rgba(108,99,255,0.1)", border: copied ? "1px solid rgba(16,185,129,0.25)" : "1px solid rgba(108,99,255,0.2)", color: copied ? "#10b981" : "#a78bfa", padding: "4px 12px", borderRadius: 8, fontSize: "0.72rem", cursor: "pointer", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>
      <pre style={{ padding: "16px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.83rem", lineHeight: 1.75, color: "var(--text)", whiteSpace: "pre-wrap", wordBreak: "break-word", maxHeight: 300, overflowY: "auto" }}>
        {content}
      </pre>
    </motion.div>
  );
}

export default function PaidResults({ kit, plan }: { kit: PaidKit; plan: PlanType }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ borderRadius: 16, padding: "20px", background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.04))", border: "1px solid rgba(16,185,129,0.2)", display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <span style={{ fontSize: "2rem" }}>✅</span>
        <div>
          <h4 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#10b981", marginBottom: 4 }}>Your Career Kit is Ready!</h4>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Copy each section below. Tip: paste your resume into Google Docs or Notion for final formatting.</p>
        </div>
      </div>
      {kit.optimizedResume && <ResultBlock title="📄 ATS-Optimized Resume" content={kit.optimizedResume} id="resume" />}
      {kit.coverLetter1 && <ResultBlock title="📝 Cover Letter 1 — Professional" content={kit.coverLetter1} id="cl1" />}
      {kit.coverLetter2 && <ResultBlock title="📝 Cover Letter 2 — Story-Driven" content={kit.coverLetter2} id="cl2" />}
      {kit.coverLetter3 && <ResultBlock title="📝 Cover Letter 3 — Concise" content={kit.coverLetter3} id="cl3" />}
      {kit.linkedinHeadline && <ResultBlock title="💼 LinkedIn Headline" content={kit.linkedinHeadline} id="lh" />}
      {kit.linkedinSummary && <ResultBlock title="💼 LinkedIn About Section" content={kit.linkedinSummary} id="ls" />}
      {kit.coldDMs && kit.coldDMs.length > 0 && (
        <ResultBlock title={`📬 Cold DM Scripts (${kit.coldDMs.length} Ready-to-Send)`} content={kit.coldDMs.map((dm, i) => `DM ${i + 1}:\n${dm}`).join("\n\n---\n\n")} id="dms" />
      )}
      {kit.interviewQA && kit.interviewQA.length > 0 && (
        <ResultBlock title={`🎤 Interview Q&A Kit (${kit.interviewQA.length} Questions)`} content={kit.interviewQA.map((qa, i) => `Q${i + 1}: ${qa.q}\n\nA: ${qa.a}`).join("\n\n---\n\n")} id="qa" />
      )}
      {kit.keywordsAdded && (
        <div style={{ borderRadius: 14, padding: "16px", border: "1px solid var(--border)", marginBottom: 14 }}>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600, marginBottom: 10 }}>Keywords Added to Your Resume</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {kit.keywordsAdded.map((k, i) => (
              <span key={i} style={{ fontSize: "0.75rem", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", color: "#a78bfa", padding: "4px 12px", borderRadius: 20 }}>{k}</span>
            ))}
          </div>
        </div>
      )}
      <div style={{ textAlign: "center", padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: 14, border: "1px solid var(--border)" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Questions? WhatsApp support: <strong style={{ color: "var(--text)" }}>+91 8778421719</strong></p>
      </div>
    </motion.div>
  );
}
