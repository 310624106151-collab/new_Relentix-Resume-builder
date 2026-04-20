"use client";
import { motion } from "framer-motion";

const steps = ["Rewriting your resume with AI...", "Crafting personalized cover letters...", "Building LinkedIn profile...", "Writing cold DM scripts...", "Generating interview Q&A..."];

export default function GeneratingKit() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
      style={{ borderRadius: 16, padding: "32px 24px", textAlign: "center",
        background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(56,189,248,0.05))",
        border: "1px solid rgba(108,99,255,0.2)" }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", border: "3px solid rgba(108,99,255,0.2)", borderTopColor: "#6c63ff", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
      <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>Generating Your Career Kit</h3>
      <p style={{ color: "var(--muted)", fontSize: "0.82rem" }}>AI is building your personalized kit. This takes 15-30 seconds...</p>
    </motion.div>
  );
}
