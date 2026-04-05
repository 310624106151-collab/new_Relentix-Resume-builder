"use client";
import { motion } from "framer-motion";
import { AnalysisResult } from "@/app/page";

export default function ATSScoreCard({ analysis }: { analysis: AnalysisResult }) {
  const score = analysis.atsScore;
  const color = score >= 75 ? "#10b981" : score >= 55 ? "#f59e0b" : "#ef4444";
  const circumference = 2 * Math.PI * 45;
  const dash = ((100 - score) / 100) * circumference;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      style={{
        borderRadius: 16, padding: "24px",
        background: "rgba(17,17,32,0.8)", border: "1px solid var(--border)",
        display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap",
      }}>
      {/* Score ring */}
      <div style={{ flexShrink: 0, position: "relative", width: 100, height: 100 }}>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r="45" fill="none"
            stroke={color} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dash }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.6rem", fontWeight: 800, color, lineHeight: 1 }}>
            {score}
          </motion.span>
          <span style={{ fontSize: "0.6rem", color: "var(--muted)", marginTop: 2 }}>ATS Score</span>
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 200 }}>
        <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: 6, color: "var(--text)" }}>
          {analysis.scoreTitle}
        </h3>
        <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>{analysis.scoreDesc}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {analysis.strengths?.length > 0 && (
            <div>
              <div style={{ fontSize: "0.68rem", color: "#10b981", textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, marginBottom: 6 }}>Strengths</div>
              {analysis.strengths.map((s, i) => (
                <div key={i} style={{ fontSize: "0.78rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ color: "#10b981", fontWeight: 700, fontSize: "0.7rem" }}>✓</span> {s}
                </div>
              ))}
            </div>
          )}
          {analysis.weaknesses?.length > 0 && (
            <div>
              <div style={{ fontSize: "0.68rem", color: "#ef4444", textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, marginBottom: 6 }}>Fix These</div>
              {analysis.weaknesses.map((w, i) => (
                <div key={i} style={{ fontSize: "0.78rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ color: "#ef4444", fontWeight: 700, fontSize: "0.7rem" }}>✗</span> {w}
                </div>
              ))}
            </div>
          )}
        </div>

        {analysis.missingKeywords?.length > 0 && (
          <div style={{ marginTop: 14 }}>
            <div style={{ fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600, marginBottom: 8 }}>Missing Keywords</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {analysis.missingKeywords.map((k, i) => (
                <span key={i} style={{ fontSize: "0.72rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b", padding: "3px 10px", borderRadius: 20 }}>
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
