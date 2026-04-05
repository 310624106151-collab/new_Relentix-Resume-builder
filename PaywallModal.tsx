"use client";
import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
  onUpgrade: (plan: "basic" | "pro") => void;
}

export default function PaywallModal({ onClose, onUpgrade }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(8px)" }}>
      <motion.div initial={{ scale: 0.85, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 20 }}
        onClick={e => e.stopPropagation()}
        style={{ background: "#111120", border: "1px solid rgba(108,99,255,0.25)", borderRadius: 24, width: "100%", maxWidth: 460, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(108,99,255,0.1)" }}>
        <div style={{ background: "linear-gradient(135deg, #6c63ff, #7c3aed)", padding: "28px 24px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🚀</div>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "white", marginBottom: 8 }}>
            You're One Step Away from Standing Out
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>Unlock the full power of Relentix</p>
        </div>
        <div style={{ padding: "24px" }}>
          {[
            { icon: "🎯", text: "Beat ATS filters — get past automated screening" },
            { icon: "📞", text: "Get 3x more recruiter callbacks" },
            { icon: "💼", text: "Land interviews faster with optimized LinkedIn" },
            { icon: "📬", text: "Reach hiring managers directly with proven DM scripts" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <span style={{ fontSize: "1.2rem" }}>{b.icon}</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text)" }}>{b.text}</span>
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
            <button onClick={() => onUpgrade("basic")} style={{ padding: "12px", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text)", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Basic — ₹149
            </button>
            <button onClick={() => onUpgrade("pro")} style={{ padding: "12px", borderRadius: 12, background: "linear-gradient(135deg, #6c63ff, #7c3aed)", border: "none", color: "white", cursor: "pointer", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Bricolage Grotesque', sans-serif", boxShadow: "0 0 20px rgba(108,99,255,0.4)" }}>
              Pro — ₹249 ⚡
            </button>
          </div>
          <button onClick={onClose} style={{ width: "100%", marginTop: 12, background: "none", border: "none", color: "var(--muted)", fontSize: "0.78rem", cursor: "pointer", padding: "6px" }}>
            Maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
