"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    sub: "always free",
    color: "#7070a0",
    features: [
      { yes: true,  text: "ATS Score" },
      { yes: true,  text: "1 Expert Tip" },
      { yes: false, text: "Resume Rewrite" },
      { yes: false, text: "Cover Letters" },
      { yes: false, text: "LinkedIn Bio" },
      { yes: false, text: "Cold DM Scripts" },
      { yes: false, text: "Interview Q&A" },
    ],
    cta: "Start Free",
    ctaFn: () => document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    name: "Basic Kit",
    price: "₹149",
    sub: "one-time payment",
    color: "#6c63ff",
    features: [
      { yes: true, text: "ATS Score + Full Analysis" },
      { yes: true, text: "Full Resume Rewrite" },
      { yes: true, text: "1 Cover Letter" },
      { yes: true, text: "10 Interview Q&A" },
      { yes: false, text: "LinkedIn Bio" },
      { yes: false, text: "Cold DM Scripts" },
      { yes: false, text: "3 Cover Letter Versions" },
    ],
    cta: "Get Basic Kit",
    plan: "basic" as const,
  },
  {
    name: "Pro Kit",
    price: "₹249",
    sub: "one-time payment",
    color: "#a78bfa",
    popular: true,
    features: [
      { yes: true, text: "ATS Score + Full Analysis" },
      { yes: true, text: "Full Resume Rewrite" },
      { yes: true, text: "3 Cover Letter Versions" },
      { yes: true, text: "LinkedIn Headline + About" },
      { yes: true, text: "5 Cold DM Scripts" },
      { yes: true, text: "20 Interview Q&A" },
      { yes: true, text: "Keyword Gap Analysis" },
    ],
    cta: "⚡ Unlock Pro Kit",
    plan: "pro" as const,
  },
];

export default function PricingSection({ onUpgrade }: { onUpgrade: (plan: "basic" | "pro") => void }) {
  return (
    <section id="pricing" style={{ padding: "80px 1.5rem 100px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 2, fontWeight: 600, marginBottom: 14 }}>Pricing</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-1px", color: "var(--text)", lineHeight: 1.1, marginBottom: 14 }}>
            One-Time Payment.<br />Instant Delivery.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>No subscription. No hidden fees. Pay once via UPI, get your kit instantly.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, alignItems: "stretch" }}>
          {plans.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                borderRadius: 20, overflow: "hidden",
                border: p.popular ? `1px solid ${p.color}50` : "1px solid rgba(255,255,255,0.06)",
                background: p.popular ? `linear-gradient(160deg, rgba(108,99,255,0.12), rgba(167,139,250,0.06))` : "rgba(17,17,32,0.8)",
                position: "relative", boxShadow: p.popular ? "0 0 40px rgba(108,99,255,0.12)" : "none",
              }}>
              {p.popular && (
                <div style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)", padding: "6px", textAlign: "center", fontSize: "0.7rem", fontWeight: 700, color: "white", letterSpacing: 0.5 }}>
                  ⚡ MOST POPULAR — GET 3X MORE INTERVIEWS
                </div>
              )}
              <div style={{ padding: "24px" }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "2rem", fontWeight: 800, color: p.color, lineHeight: 1, marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginBottom: 22 }}>{p.sub}</div>
                <div style={{ marginBottom: 22 }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontSize: "0.8rem" }}>
                      <span style={{ color: f.yes ? "#10b981" : "var(--muted)", fontWeight: 700, fontSize: "0.72rem", flexShrink: 0 }}>{f.yes ? "✓" : "✗"}</span>
                      <span style={{ color: f.yes ? "var(--text)" : "var(--muted)" }}>{f.text}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => p.plan ? onUpgrade(p.plan) : (document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" }))}
                  style={{
                    width: "100%", padding: "13px", borderRadius: 11,
                    background: p.popular ? "linear-gradient(135deg, #6c63ff, #7c3aed)" : p.plan ? "rgba(108,99,255,0.15)" : "rgba(255,255,255,0.06)",
                    border: p.popular ? "none" : `1px solid ${p.color}30`,
                    color: p.popular ? "white" : "var(--text)",
                    cursor: "pointer", fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: "0.88rem", fontWeight: 700,
                    boxShadow: p.popular ? "0 0 24px rgba(108,99,255,0.35)" : "none",
                  }}>
                  {p.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ display: "flex", justifyContent: "center", gap: "clamp(20px, 5vw, 50px)", marginTop: 40, flexWrap: "wrap" }}>
          {["🔒 UPI Secure Payment", "⚡ Instant Generation", "💬 WhatsApp Support", "🇮🇳 Built for India"].map((b, i) => (
            <span key={i} style={{ fontSize: "0.78rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>{b}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
