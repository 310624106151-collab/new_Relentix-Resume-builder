"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎯",
    title: "Resume Analyzer",
    subtitle: "ATS Score + Deep Insights",
    desc: "Instant score with exact reasons you're being filtered out. Detailed breakdown of strengths, weaknesses and missing keywords recruiters look for.",
    color: "#6c63ff",
    badge: "FREE",
    badgeColor: "#10b981",
    visual: {
      type: "score",
      value: 82,
      label: "ATS Score",
    },
  },
  {
    icon: "🔄",
    title: "Job Match",
    subtitle: "Resume vs Job Description",
    desc: "Upload any JD and see exactly how your resume stacks up. Find missing skills, keyword gaps, and get a match score before you apply.",
    color: "#38bdf8",
    badge: "POPULAR",
    badgeColor: "#f59e0b",
    visual: {
      type: "match",
      value: 87,
      label: "Match Score",
    },
  },
  {
    icon: "✍️",
    title: "AI Resume Rewrite",
    subtitle: "Before vs After",
    desc: "Every bullet rewritten with strong action verbs, quantified impact, and role-specific keywords. See the transformation instantly.",
    color: "#a78bfa",
    badge: "PRO",
    badgeColor: "#a78bfa",
    visual: { type: "rewrite" },
  },
  {
    icon: "💼",
    title: "LinkedIn Optimizer",
    subtitle: "Headline + About Section",
    desc: "Headline and full About section that make recruiters message you — not the other way around. SEO-optimized for LinkedIn discovery.",
    color: "#10b981",
    badge: "PRO",
    badgeColor: "#a78bfa",
    visual: { type: "linkedin" },
  },
  {
    icon: "📬",
    title: "Cold DM Scripts",
    subtitle: "5 Ready-to-Send Templates",
    desc: "Proven LinkedIn outreach templates to reach hiring managers directly. Bypass the job board queue entirely with a personalized approach.",
    color: "#f59e0b",
    badge: "PRO",
    badgeColor: "#a78bfa",
    visual: { type: "dm" },
  },
  {
    icon: "🎤",
    title: "Interview Q&A Kit",
    subtitle: "20 Personalized Answers",
    desc: "20 most-asked questions with personalized answers built from your actual resume. Walk in confident, walk out hired.",
    color: "#ef4444",
    badge: "PRO",
    badgeColor: "#a78bfa",
    visual: { type: "interview" },
  },
];

function FeatureVisual({ feature }: { feature: typeof features[0] }) {
  const { visual, color } = feature;

  if (visual.type === "score" && "value" in visual) {
    const val = visual.value as number;
    const circ = 2 * Math.PI * 22;
    const dash = ((100 - val) / 100) * circ;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}>
          <svg width="52" height="52" viewBox="0 0 52 52" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
            <motion.circle cx="26" cy="26" r="22" fill="none" stroke={color} strokeWidth="4"
              strokeLinecap="round" strokeDasharray={circ}
              initial={{ strokeDashoffset: circ }}
              whileInView={{ strokeDashoffset: dash }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              style={{ filter: `drop-shadow(0 0 4px ${color})` }}
            />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "0.9rem", color, lineHeight: 1 }}>{val}</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.68rem", color: "var(--muted)", marginBottom: 4 }}>ATS Score</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {["keywords", "format", "impact"].map(k => (
              <span key={k} style={{ fontSize: "0.58rem", background: `${color}18`, border: `1px solid ${color}30`, color, padding: "2px 7px", borderRadius: 20 }}>{k}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (visual.type === "match" && "value" in visual) {
    const val = visual.value as number;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#38bdf8", lineHeight: 1 }}>
            {val}%
          </div>
          <div style={{ fontSize: "0.6rem", color: "var(--muted)", marginTop: 2 }}>Match</div>
        </div>
        <div style={{ flex: 1 }}>
          {["Skills", "Keywords", "Seniority"].map((label, j) => (
            <div key={j} style={{ marginBottom: 5 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: "var(--muted)", marginBottom: 2 }}>
                <span>{label}</span>
              </div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${[87, 92, 75][j]}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: j * 0.1, ease: "easeOut" }}
                  style={{ height: "100%", background: "#38bdf8", borderRadius: 2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual.type === "rewrite") {
    return (
      <div style={{ fontSize: "0.65rem", lineHeight: 1.5 }}>
        <div style={{ color: "#ef4444", marginBottom: 4, fontWeight: 600, fontSize: "0.58rem", letterSpacing: 0.5 }}>✗ BEFORE</div>
        <div style={{ color: "var(--muted)", marginBottom: 8, fontStyle: "italic" }}>&ldquo;Worked on various projects with team&rdquo;</div>
        <div style={{ color: "#10b981", marginBottom: 4, fontWeight: 600, fontSize: "0.58rem", letterSpacing: 0.5 }}>✓ AFTER</div>
        <div style={{ color: "var(--text)" }}>&ldquo;Led cross-functional team of 6, delivered 3 features 2 weeks early, reducing churn by 18%&rdquo;</div>
      </div>
    );
  }

  if (visual.type === "linkedin") {
    return (
      <div>
        <div style={{ fontSize: "0.58rem", color: "#10b981", fontWeight: 700, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.8 }}>Generated Headline</div>
        <div style={{ fontSize: "0.7rem", color: "var(--text)", lineHeight: 1.5, background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 8, padding: "8px 10px" }}>
          Senior SWE | Java · React · AWS | Built for 500K+ users | Open to Opportunities
        </div>
      </div>
    );
  }

  if (visual.type === "dm") {
    return (
      <div style={{ fontSize: "0.65rem", color: "var(--muted)", lineHeight: 1.6, background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 8, padding: "10px 12px" }}>
        <span style={{ color: "#f59e0b", fontWeight: 700 }}>Hi [Name], </span>
        I came across your team at [Company] and noticed the {"{role}"} opening. My background in [X] helped deliver [achievement]. Would love to connect!
      </div>
    );
  }

  if (visual.type === "interview") {
    return (
      <div style={{ fontSize: "0.65rem", lineHeight: 1.6 }}>
        <div style={{ color: "#a78bfa", fontWeight: 600, marginBottom: 4 }}>Q: Tell me about yourself.</div>
        <div style={{ color: "var(--muted)" }}>A: I&apos;m a {"{role}"} with {"{X}"} years building {"{domain}"}. Most recently I {"{achievement}"}...</div>
      </div>
    );
  }

  return null;
}

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "80px 1.5rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 2, fontWeight: 600, marginBottom: 14 }}>Everything in Your Kit</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-1px", color: "var(--text)", lineHeight: 1.1 }}>
            The Complete Unfair<br />
            <span style={{ background: "linear-gradient(135deg, #6c63ff, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Advantage</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: `0 24px 48px rgba(0,0,0,0.35), 0 0 24px ${f.color}15` }}
              style={{
                background: "rgba(17,17,32,0.85)",
                border: `1px solid ${f.color}14`,
                borderRadius: 20,
                padding: "24px",
                transition: "all 0.25s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top glow */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${f.color}40, transparent)`,
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: `${f.color}18`, border: `1px solid ${f.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{f.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "var(--text)", lineHeight: 1.2 }}>{f.title}</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--muted)", marginTop: 1 }}>{f.subtitle}</div>
                  </div>
                </div>
                <span style={{ fontSize: "0.58rem", background: `${f.badgeColor}18`, border: `1px solid ${f.badgeColor}30`, color: f.badgeColor, padding: "2px 8px", borderRadius: 20, fontWeight: 700, letterSpacing: 0.5, whiteSpace: "nowrap" }}>{f.badge}</span>
              </div>

              <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 18 }}>{f.desc}</p>

              {/* Visual preview */}
              <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 12, padding: "14px", border: "1px solid rgba(255,255,255,0.04)" }}>
                <FeatureVisual feature={f} />
              </div>

              <div style={{ marginTop: 16, width: 28, height: 2, borderRadius: 1, background: f.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
