"use client";
import { motion } from "framer-motion";

const features = [
  { icon: "🎯", title: "ATS Score & Analysis", desc: "Instant score with exact reasons you're being filtered out. Detailed breakdown of strengths, weaknesses and missing keywords.", color: "#6c63ff" },
  { icon: "✍️", title: "AI Resume Rewrite", desc: "Every bullet rewritten with strong action verbs, quantified impact, and role-specific keywords that pass automated screening.", color: "#a78bfa" },
  { icon: "📝", title: "3 Cover Letters", desc: "Professional, story-driven, and concise versions — all personalized to your role and company. Never sound like a template.", color: "#38bdf8" },
  { icon: "💼", title: "LinkedIn Optimization", desc: "Headline and full About section that make recruiters message you — not the other way around. SEO-optimized for discovery.", color: "#10b981" },
  { icon: "📬", title: "Cold DM Scripts", desc: "5 proven LinkedIn outreach templates to reach hiring managers directly. Bypass the job board queue entirely.", color: "#f59e0b" },
  { icon: "🎤", title: "Interview Q&A Kit", desc: "20 most-asked questions with personalized answers built from your actual resume. Walk in confident, walk out hired.", color: "#ef4444" },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: "80px 1.5rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 2, fontWeight: 600, marginBottom: 14 }}>Everything in Your Kit</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-1px", color: "var(--text)", lineHeight: 1.1 }}>
            The Complete Unfair<br />
            <span style={{ background: "linear-gradient(135deg, #6c63ff, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Advantage</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${f.color}15` }}
              style={{ background: "rgba(17,17,32,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: "24px", transition: "all 0.25s", cursor: "default" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8, color: "var(--text)" }}>{f.title}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7 }}>{f.desc}</div>
              <div style={{ marginTop: 16, width: 32, height: 2, borderRadius: 1, background: f.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
