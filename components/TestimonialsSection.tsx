"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Arjun Kumar", role: "Software Engineer, Bangalore", avatar: "AK", color: "#6c63ff", rating: 5, text: "My ATS score jumped from 34 to 91 in one go. Got 3 interview calls within a week after updating. The resume rewrite is genuinely impressive — every bullet now has a metric." },
  { name: "Priya Sharma", role: "Fresher, Chennai (Placed at TCS)", avatar: "PS", color: "#10b981", rating: 5, text: "As a fresher I had zero idea how ATS works. Relentix rewrote my entire resume and gave me a cover letter that actually sounded like me. TCS shortlisted me within 10 days!" },
  { name: "Rohan Mehta", role: "Data Analyst, Pune", avatar: "RM", color: "#38bdf8", rating: 5, text: "The cold DM scripts alone were worth ₹249. Messaged 12 HRs using the templates, got 5 responses, 3 interviews. I'd never gotten a single response from LinkedIn outreach before." },
  { name: "Sneha Iyer", role: "Product Manager, Hyderabad", avatar: "SI", color: "#a78bfa", rating: 5, text: "LinkedIn optimization is the hidden gem. My profile views went from ~30/week to 200+. Two recruiters reached out to ME within 3 days of updating my headline and summary." },
  { name: "Karthik Nair", role: "DevOps Engineer, Mumbai", avatar: "KN", color: "#f59e0b", rating: 5, text: "I was applying for 2 months with zero callbacks. Tried Relentix, rewrote my resume following the suggestions, started getting calls from Infosys, Wipro and a startup the next week." },
  { name: "Divya Patel", role: "HR Manager (Recommends to candidates)", avatar: "DP", color: "#ef4444", rating: 5, text: "As an HR, I see hundreds of resumes daily. Relentix-optimized resumes are instantly recognizable — clean, metric-driven, keyword-rich. I now recommend it to candidates I like but whose CVs need work." },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "80px 1.5rem", position: "relative", zIndex: 10, overflow: "hidden" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 2, fontWeight: 600, marginBottom: 14 }}>Real Results</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", letterSpacing: "-1px", color: "var(--text)", lineHeight: 1.1 }}>
            Indians Getting Hired<br />
            <span style={{ background: "linear-gradient(135deg, #6c63ff, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>with Relentix</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 16 }}>
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{ background: "rgba(17,17,32,0.8)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: "22px" }}>
              <div style={{ color: "#f59e0b", fontSize: "0.85rem", marginBottom: 12, letterSpacing: 2 }}>{"★".repeat(t.rating)}</div>
              <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "rgba(240,240,248,0.85)", marginBottom: 18, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${t.color}22`, border: `1px solid ${t.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.78rem", color: t.color, flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
