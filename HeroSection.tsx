"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "94%", label: "ATS Pass Rate" },
  { num: "3x", label: "More Interview Calls" },
  { num: "2,400+", label: "Resumes Optimized" },
  { num: "₹249", label: "Full Pro Kit" },
];

export default function HeroSection({ onScrollToTool }: { onScrollToTool: () => void }) {
  return (
    <section style={{ padding: "90px 1.5rem 60px", position: "relative", zIndex: 10, textAlign: "center" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
            background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)",
            borderRadius: 30, padding: "6px 16px", fontSize: "0.78rem", color: "#a78bfa", fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulseDot 1.5s infinite" }} />
          AI-Powered · Built for Indian Job Seekers · Free ATS Score
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 24, color: "var(--text)" }}>
          Get <span style={{ background: "linear-gradient(135deg, #6c63ff 0%, #a78bfa 50%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>3x More</span><br />
          Interview Calls
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 500, margin: "0 auto 42px", fontWeight: 400, lineHeight: 1.65 }}>
          Paste your resume. Get an instant ATS score, AI rewrite, cover letters, LinkedIn bio and cold DM scripts — in 60 seconds.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
          <button onClick={onScrollToTool} style={{
            padding: "14px 28px", borderRadius: 12,
            background: "linear-gradient(135deg, #6c63ff, #7c3aed)",
            border: "none", color: "white", cursor: "pointer",
            fontSize: "0.95rem", fontWeight: 700,
            boxShadow: "0 0 30px rgba(108,99,255,0.35), 0 4px 20px rgba(0,0,0,0.3)",
            fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0.3,
          }}>
            ✨ Analyze My Resume — Free
          </button>
          <button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} style={{
            padding: "14px 24px", borderRadius: 12,
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--text)", cursor: "pointer", fontSize: "0.95rem", fontWeight: 500,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            View Pricing →
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{ display: "flex", justifyContent: "center", gap: "clamp(20px, 5vw, 50px)", flexWrap: "wrap" }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
              style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, background: "linear-gradient(135deg, #6c63ff, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.num}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 2, fontWeight: 500, letterSpacing: 0.3 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
