"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  plan: "basic" | "pro";
  onClose: () => void;
  onSuccess: (txnId: string) => void;
}

const PLANS = {
  basic: { price: 149, label: "Basic Kit" },
  pro:   { price: 249, label: "Pro Kit" },
};

const UPI_ID = "prasannakumar2564@okicici";
const UPI_PHONE = "8778421719";
const PAYEE = "Relentix Resume Builder";

export default function PaymentModal({ plan, onClose, onSuccess }: Props) {
  const [txn, setTxn] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const { price, label } = PLANS[plan];
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE)}&am=${price}&cu=INR&tn=${encodeURIComponent("Relentix " + label)}`)}`;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleVerify = async () => {
    if (!txn.trim() || txn.length < 5) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    onSuccess(txn.trim());
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(10px)" }}>
      <motion.div initial={{ scale: 0.88, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88 }}
        onClick={e => e.stopPropagation()}
        style={{ background: "#0f0f1e", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 24, width: "100%", maxWidth: 420, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.9), 0 0 40px rgba(108,99,255,0.08)" }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #6c63ff 0%, #38bdf8 100%)", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1rem", color: "white" }}>💳 Pay via UPI</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", marginTop: 2 }}>Instant unlock after payment</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "white", width: 30, height: 30, borderRadius: "50%", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>

        <div style={{ padding: "22px" }}>
          {/* Amount */}
          <div style={{ textAlign: "center", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.15)", borderRadius: 14, padding: "14px", marginBottom: 20 }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "2.2rem", fontWeight: 800, background: "linear-gradient(135deg, #6c63ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>₹{price}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 4 }}>{label} — One-time payment, no subscription</div>
          </div>

          {/* QR Code */}
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <div style={{ fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600, marginBottom: 12 }}>Scan to Pay</div>
            <div style={{ display: "inline-block", background: "white", padding: 12, borderRadius: 14, boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
              <img src={qrUrl} alt={`UPI payment QR code for ₹${price} ${label}`} width={160} height={160} style={{ display: "block" }} />
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: 8 }}>PhonePe · GPay · Paytm · BHIM · Any UPI app</div>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "14px 0", color: "var(--muted)", fontSize: "0.72rem" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            OR COPY UPI DETAILS
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          {/* UPI rows */}
          {[
            { label: "UPI ID", value: UPI_ID, key: "upi" },
            { label: "Phone",  value: UPI_PHONE, key: "phone" },
          ].map(row => (
            <div key={row.key} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px", marginBottom: 10 }}>
              <span style={{ fontSize: "0.7rem", color: "var(--muted)", minWidth: 50 }}>{row.label}</span>
              <span style={{ flex: 1, fontSize: "0.84rem", fontFamily: "monospace", color: "var(--text)" }}>{row.value}</span>
              <button onClick={() => copyText(row.value, row.key)} style={{ background: copied === row.key ? "rgba(16,185,129,0.15)" : "rgba(108,99,255,0.15)", border: "none", color: copied === row.key ? "#10b981" : "#a78bfa", padding: "5px 11px", borderRadius: 7, fontSize: "0.72rem", cursor: "pointer", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {copied === row.key ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}

          {/* Transaction ID */}
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: 8 }}>After paying, paste your UPI Transaction ID:</div>
            <input
              type="text" value={txn} onChange={e => setTxn(e.target.value)}
              placeholder="e.g. 407623819234 or T20241231..."
              style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", padding: "11px 14px", marginBottom: 12, outline: "none" }}
              onFocus={e => (e.target.style.borderColor = "#6c63ff")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />
            <button onClick={handleVerify} disabled={loading || txn.trim().length < 5}
              style={{ width: "100%", padding: "13px", borderRadius: 11, background: loading ? "rgba(16,185,129,0.4)" : "#10b981", border: "none", color: loading ? "rgba(255,255,255,0.6)" : "#000", cursor: txn.trim().length < 5 ? "not-allowed" : "pointer", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "0.92rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: txn.trim().length >= 5 ? "0 0 20px rgba(16,185,129,0.25)" : "none" }}>
              {loading ? (
                <><span style={{ width: 14, height: 14, border: "2px solid rgba(0,0,0,0.2)", borderTopColor: "#000", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Unlocking...</>
              ) : "✅ I've Paid — Unlock My Kit"}
            </button>
            <p style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--muted)", marginTop: 10, lineHeight: 1.5 }}>
              Transaction ID shown in your UPI app after payment.<br />
              Support: WhatsApp <strong style={{ color: "var(--text)" }}>+91 {UPI_PHONE}</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
