"use client";
export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "48px 1.5rem 32px", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: 10, background: "linear-gradient(135deg, #6c63ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Relentix
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 16, maxWidth: 220 }}>
              AI-powered resume optimizer built for Indian job seekers. Get hired faster.
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>Built for India 🇮🇳 · © 2025 Relentix</div>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 600, marginBottom: 14 }}>Product</div>
            {[
              { label: "Resume Analyzer", id: "tool" },
              { label: "Features", id: "features" },
              { label: "Pricing", id: "pricing" },
              { label: "Testimonials", id: undefined },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <button onClick={() => item.id && scrollTo(item.id)} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: "0.82rem", cursor: "pointer", padding: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; }}>
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          {/* Support */}
          <div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 600, marginBottom: 14 }}>Support</div>
            <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: 10 }}>Questions or issues?</div>
            <a href="https://wa.me/918778421719" style={{ color: "#10b981", fontWeight: 600, textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: 6 }}>
              <span>💬</span> WhatsApp us
            </a>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 8 }}>+91 8778421719</div>
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: 10, lineHeight: 1.6 }}>
              Avg. response time: &lt;30 mins<br />
              Mon–Sat, 9am–9pm IST
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
            Relentix is not affiliated with any recruiter, company, or job board.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l, i) => (
              <span key={i} style={{ fontSize: "0.72rem", color: "var(--muted)", cursor: "pointer" }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
