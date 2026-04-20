"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "📤",
    title: "Upload or Paste Your Resume",
    desc: "Paste your resume text or upload a PDF. Takes 30 seconds.",
    color: "#6c63ff",
  },
  {
    num: "02",
    icon: "🤖",
    title: "AI Reads It Like a Recruiter",
    desc: "We show you exactly what recruiters and ATS bots see — the strengths, the gaps, the red flags.",
    color: "#a78bfa",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Fix Everything Instantly",
    desc: "Get a rewritten resume, tailored cover letters, LinkedIn bio and DM scripts — ready in 60 seconds.",
    color: "#38bdf8",
  },
];

export default function SolutionSection() {
  return (
    <section style={{ padding: "80px 1.5rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{ fontSize: "0.72rem", color: "#10b981", textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, marginBottom: 14 }}>
            The Solution
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-1px", color: "var(--text)", lineHeight: 1.1, marginBottom: 16 }}>
            We Show You Exactly<br />
            <span style={{ background: "linear-gradient(135deg, #10b981, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>What Recruiters See</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            No more guessing. No more silence. Relentix translates your resume into the language that gets you hired.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, position: "relative" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(17,17,32,0.8)",
                border: `1px solid ${s.color}22`,
                borderRadius: 20,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.25s",
              }}
            >
              {/* Background glow */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 120, height: 120, borderRadius: "50%",
                background: `radial-gradient(circle, ${s.color}18 0%, transparent 70%)`,
                transform: "translate(30%, -30%)",
                pointerEvents: "none",
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: `${s.color}18`, border: `1px solid ${s.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem",
                  }}>{s.icon}</div>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: `${s.color}40`, letterSpacing: "-1px" }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                <div style={{ marginTop: 18, width: 28, height: 2, borderRadius: 1, background: s.color }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition arrow / divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 52, marginBottom: 8 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(56,189,248,0.08))",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 40, padding: "10px 22px",
          }}>
            <span style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: 600 }}>⬇ Try it free below — no signup needed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
