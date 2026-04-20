"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  preview: string;
  onUpgrade: (plan: "basic" | "pro") => void;
}

export default function LockedFeature({ title, preview, onUpgrade }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "rgba(17,17,32,0.7)" }}>
      <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "0.88rem", display: "flex", alignItems: "center", gap: 8 }}>
          🔒 {title}
        </div>
        <span style={{ fontSize: "0.68rem", background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.25)", color: "#a78bfa", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>Unlock Below</span>
      </div>
      <div style={{ position: "relative", maxHeight: 90, overflow: "hidden" }}>
        <pre style={{ padding: "16px 18px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--muted)", whiteSpace: "pre-wrap", filter: "blur(5px)", userSelect: "none" }}>
          {preview}
        </pre>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 0%, rgba(17,17,32,0.7) 40%, rgba(17,17,32,0.98) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 8,
          background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.25)",
          borderRadius: 20, padding: "5px 14px", cursor: "pointer", whiteSpace: "nowrap",
        }} onClick={() => onUpgrade("pro")}>
          <span style={{ fontSize: "0.75rem", color: "#a78bfa", fontWeight: 600 }}>🔓 Unlock with Pro Kit — ₹249</span>
        </div>
      </div>
    </motion.div>
  );
}
