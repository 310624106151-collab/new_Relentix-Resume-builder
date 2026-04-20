"use client";
import { motion } from "framer-motion";

const frustrations = [
  { icon: "😔", stat: "50+", text: "Applied to 50 jobs.", sub: "Zero replies." },
  { icon: "🤐", stat: "0", text: "No feedback from recruiters.", sub: "Ever." },
  { icon: "🤖", stat: "75%", text: "Filtered by ATS bots.", sub: "Before a human sees you." },
  { icon: "📉", stat: "3sec", text: "Recruiters spend 3 seconds.", sub: "On your resume." },
];

export default function ProblemSection() {
  return (
    <section style={{ padding: "80px 1.5rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div style={{ fontSize: "0.72rem", color: "#ef4444", textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, marginBottom: 14 }}>
            The Harsh Reality
          </div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-1px", color: "var(--text)", lineHeight: 1.1, marginBottom: 16 }}>
            You&apos;re Doing Everything Right.<br />
            <span style={{ color: "#ef4444" }}>And Still Getting Ignored.</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            The job market is brutal. But most rejections aren&apos;t about your skills — they&apos;re about how your resume looks to automated systems.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
          {frustrations.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.15)",
                borderRadius: 18,
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#ef4444", marginBottom: 6, lineHeight: 1 }}>{f.stat}</div>
              <div style={{ fontSize: "0.84rem", fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{f.text}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{f.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Storytelling quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 44,
            padding: "28px 32px",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(239,68,68,0.06), rgba(239,68,68,0.02))",
            border: "1px solid rgba(239,68,68,0.12)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "1.6rem", marginBottom: 12 }}>💬</div>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 600, color: "var(--text)", lineHeight: 1.5, marginBottom: 12, maxWidth: 600, margin: "0 auto 12px" }}>
            &ldquo;I applied to 50+ jobs and heard nothing. Not a single rejection email. Just silence.&rdquo;
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
            — Arjun, Software Engineer, 2 years experience, Bangalore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
