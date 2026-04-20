"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AnimatedCounter({ from, to, duration = 1.8 }: { from: number; to: number; duration?: number }) {
  const [val, setVal] = useState(from);
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration]);
  return <>{val}</>;
}

function InteractiveDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const atsCircum = 2 * Math.PI * 28;
  const atsFromDash = ((100 - 45) / 100) * atsCircum;
  const atsToDash = ((100 - 85) / 100) * atsCircum;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      style={{
        background: "rgba(13,13,24,0.95)",
        border: "1px solid rgba(108,99,255,0.25)",
        borderRadius: 20,
        padding: "20px 22px",
        maxWidth: 460,
        margin: "0 auto",
        boxShadow: "0 0 60px rgba(108,99,255,0.12), 0 30px 60px rgba(0,0,0,0.5)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Fake browser bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
        <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 6, height: 22, display: "flex", alignItems: "center", paddingLeft: 10, marginLeft: 8 }}>
          <span style={{ fontSize: "0.65rem", color: "var(--muted)" }}>relentix.ai/analyze</span>
        </div>
      </div>

      {phase === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "24px 0" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: 10 }}>📄</div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Uploading your resume...</div>
        </motion.div>
      )}

      {phase === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "18px 0" }}>
          <div style={{ width: 36, height: 36, border: "3px solid rgba(108,99,255,0.2)", borderTopColor: "#6c63ff", borderRadius: "50%", animation: "spin 0.7s linear infinite", margin: "0 auto 12px" }} />
          <div style={{ fontSize: "0.78rem", color: "#a78bfa", marginBottom: 4 }}>Analyzing resume with AI...</div>
          <div style={{ fontSize: "0.68rem", color: "var(--muted)" }}>Extracting keywords · Checking ATS signals</div>
        </motion.div>
      )}

      {phase >= 2 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            {/* ATS Score ring */}
            <div style={{ flex: 1, background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.15)", borderRadius: 14, padding: "14px", textAlign: "center" }}>
              <div style={{ fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>ATS Score</div>
              <div style={{ position: "relative", width: 64, height: 64, margin: "0 auto" }}>
                <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
                  <motion.circle
                    cx="32" cy="32" r="28" fill="none"
                    stroke={phase >= 3 ? "#10b981" : "#f59e0b"}
                    strokeWidth="5" strokeLinecap="round"
                    strokeDasharray={atsCircum}
                    initial={{ strokeDashoffset: atsFromDash }}
                    animate={{ strokeDashoffset: phase >= 3 ? atsToDash : atsFromDash }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 5px ${phase >= 3 ? "#10b981" : "#f59e0b"})` }}
                  />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: phase >= 3 ? "#10b981" : "#f59e0b", lineHeight: 1 }}>
                    {phase >= 3 ? <AnimatedCounter from={45} to={85} duration={1.6} /> : "45"}
                  </span>
                </div>
              </div>
              {phase >= 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                  style={{ fontSize: "0.6rem", color: "#10b981", marginTop: 6, fontWeight: 700 }}>↑ +40 pts</motion.div>
              )}
            </div>

            {/* Job match */}
            <div style={{ flex: 1, background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.15)", borderRadius: 14, padding: "14px", textAlign: "center" }}>
              <div style={{ fontSize: "0.6rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Job Match</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.7rem", color: phase >= 3 ? "#38bdf8" : "#f59e0b", marginTop: 12, lineHeight: 1 }}>
                {phase >= 3 ? <><AnimatedCounter from={52} to={89} duration={1.6} />%</> : "52%"}
              </div>
              {phase >= 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
                  style={{ fontSize: "0.6rem", color: "#38bdf8", marginTop: 14, fontWeight: 700 }}>↑ +37%</motion.div>
              )}
            </div>
          </div>

          {/* Keywords */}
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: "0.62rem", color: "var(--muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>
              {phase >= 3 ? "Keywords Added" : "Missing Keywords"}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {(phase >= 3
                ? ["React.js", "TypeScript", "REST APIs", "CI/CD", "Docker"]
                : ["React.js", "TypeScript", "REST APIs"]
              ).map((k, i) => (
                <motion.span key={k}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    fontSize: "0.65rem", padding: "3px 9px", borderRadius: 20,
                    background: phase >= 3 ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.1)",
                    border: `1px solid ${phase >= 3 ? "rgba(16,185,129,0.25)" : "rgba(245,158,11,0.2)"}`,
                    color: phase >= 3 ? "#10b981" : "#f59e0b",
                  }}>
                  {k}
                </motion.span>
              ))}
            </div>
          </div>

          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 10, padding: "9px 12px", fontSize: "0.7rem", color: "#10b981", display: "flex", alignItems: "center", gap: 6 }}>
              <span>✅</span> Resume optimized — ready for shortlist
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

const stats = [
  { num: "94%", label: "ATS Pass Rate" },
  { num: "3x", label: "More Interview Calls" },
  { num: "2,400+", label: "Resumes Optimized" },
  { num: "₹249", label: "Full Pro Kit" },
];

export default function HeroSection({ onScrollToTool }: { onScrollToTool: () => void }) {
  return (
    <section style={{ padding: "90px 1.5rem 60px", position: "relative", zIndex: 10, textAlign: "center" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
            background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)",
            borderRadius: 30, padding: "6px 16px", fontSize: "0.78rem", color: "#a78bfa", fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block", animation: "pulseDot 1.5s infinite" }} />
          AI-Powered · Built for Indian Job Seekers · Free ATS Score
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 6vw, 3.8rem)", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 22, color: "var(--text)" }}>
          You&apos;re Not Getting Rejected.<br />
          <span style={{ background: "linear-gradient(135deg, #6c63ff 0%, #a78bfa 50%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Your Resume Is.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 520, margin: "0 auto 40px", fontWeight: 400, lineHeight: 1.7 }}>
          See exactly why recruiters skip you — and fix it instantly with AI.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
          <button onClick={onScrollToTool}
            style={{
              padding: "14px 28px", borderRadius: 12,
              background: "linear-gradient(135deg, #6c63ff, #7c3aed)",
              border: "none", color: "white", cursor: "pointer",
              fontSize: "0.95rem", fontWeight: 700,
              boxShadow: "0 0 30px rgba(108,99,255,0.35), 0 4px 20px rgba(0,0,0,0.3)",
              fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0.3,
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "scale(1.04)"; b.style.boxShadow = "0 0 40px rgba(108,99,255,0.55), 0 4px 20px rgba(0,0,0,0.3)"; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "scale(1)"; b.style.boxShadow = "0 0 30px rgba(108,99,255,0.35), 0 4px 20px rgba(0,0,0,0.3)"; }}
          >
            Analyze My Resume — Free ✨
          </button>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "14px 24px", borderRadius: 12,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text)", cursor: "pointer", fontSize: "0.95rem", fontWeight: 500,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "background 0.15s",
            }}
          >
            View Pricing →
          </button>
        </motion.div>

        {/* Interactive animated demo */}
        <InteractiveDemo />

        {/* Stats row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ display: "flex", justifyContent: "center", gap: "clamp(20px, 5vw, 50px)", flexWrap: "wrap", marginTop: 48 }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.1 }}
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
