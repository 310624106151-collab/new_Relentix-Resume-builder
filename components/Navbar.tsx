"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(108,99,255,0.12)",
        background: "rgba(8,8,16,0.88)",
        backdropFilter: "blur(20px)",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #6c63ff, #38bdf8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: "white",
            boxShadow: "0 0 12px rgba(108,99,255,0.4)",
          }}>R</div>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.5px" }}>
            <span style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Relentix</span>
          </span>
          <span style={{ marginLeft: 4, background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.22)", color: "#a78bfa", padding: "2px 8px", borderRadius: 20, fontSize: "0.63rem", fontWeight: 600, letterSpacing: 0.5 }}>🇮🇳 INDIA</span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button onClick={() => scrollTo("tool")} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: "0.83rem", cursor: "pointer", padding: "6px 12px", borderRadius: 8, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; }}>
            Analyzer
          </button>
          <button onClick={() => scrollTo("features")} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: "0.83rem", cursor: "pointer", padding: "6px 12px", borderRadius: 8, fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted)"; }}>
            Features
          </button>
          <a href="#pricing" style={{ color: "var(--muted)", fontSize: "0.83rem", textDecoration: "none", padding: "6px 12px", borderRadius: 8, transition: "color 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)"; }}>
            Pricing
          </a>
          <button
            onClick={() => scrollTo("tool")}
            style={{
              padding: "8px 18px", borderRadius: 9,
              background: "linear-gradient(135deg, #6c63ff, #7c3aed)",
              border: "none", color: "white", cursor: "pointer",
              fontSize: "0.82rem", fontWeight: 700, letterSpacing: 0.3,
              boxShadow: "0 0 20px rgba(108,99,255,0.3)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "transform 0.15s, box-shadow 0.15s",
              marginLeft: 4,
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "scale(1.04)"; b.style.boxShadow = "0 0 28px rgba(108,99,255,0.5)"; }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "scale(1)"; b.style.boxShadow = "0 0 20px rgba(108,99,255,0.3)"; }}
          >
            Try Free →
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
