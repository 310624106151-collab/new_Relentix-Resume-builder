"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 1.5rem", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1rem", marginBottom: 4, background: "linear-gradient(135deg, #6c63ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Relentix Resume Builder
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Built for India 🇮🇳 · © 2025 Relentix</div>
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--muted)", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
          <span>Questions? WhatsApp us</span>
          <a href="https://wa.me/918778421719" style={{ color: "#10b981", fontWeight: 600, textDecoration: "none", fontSize: "0.88rem" }}>+91 8778421719</a>
        </div>
      </div>
    </footer>
  );
}
