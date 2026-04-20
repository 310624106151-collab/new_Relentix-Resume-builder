"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(108,99,255,0.12)",
        background: "rgba(8,8,16,0.85)",
        backdropFilter: "blur(20px)",
        padding: "0 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #6c63ff, #38bdf8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: "white",
          }}>R</div>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.5px" }}>
            <span style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Relentix</span>
          </span>
          <span style={{ marginLeft: 6, background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.25)", color: "#a78bfa", padding: "2px 8px", borderRadius: 20, fontSize: "0.65rem", fontWeight: 600, letterSpacing: 0.5 }}>🇮🇳 INDIA</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#pricing" style={{ color: "var(--muted)", fontSize: "0.85rem", textDecoration: "none", transition: "color 0.2s" }}>Pricing</a>
          <button
            onClick={() => document.getElementById("tool")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "8px 18px", borderRadius: 8,
              background: "linear-gradient(135deg, #6c63ff, #7c3aed)",
              border: "none", color: "white", cursor: "pointer",
              fontSize: "0.82rem", fontWeight: 600, letterSpacing: 0.3,
              boxShadow: "0 0 20px rgba(108,99,255,0.3)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Try Free →
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
