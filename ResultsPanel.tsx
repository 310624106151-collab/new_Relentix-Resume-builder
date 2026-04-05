"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AnalysisState, AnalysisResult, PaidKit, PlanType } from "@/app/page";
import ATSScoreCard from "./ATSScoreCard";
import LockedFeature from "./LockedFeature";
import PaidResults from "./PaidResults";
import GeneratingKit from "./GeneratingKit";

interface Props {
  state: AnalysisState;
  analysis: AnalysisResult | null;
  paidKit: PaidKit | null;
  paidPlan: PlanType;
  generatingKit: boolean;
  onShowPaywall: () => void;
  onUpgrade: (plan: "basic" | "pro") => void;
}

export default function ResultsPanel({ state, analysis, paidKit, paidPlan, generatingKit, onShowPaywall, onUpgrade }: Props) {
  if (state === "analyzing" && !analysis) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            border: "3px solid rgba(108,99,255,0.2)", borderTopColor: "#6c63ff",
            animation: "spin 0.8s linear infinite",
          }} />
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Analyzing with AI...</p>
        </div>
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(108,99,255,0.3), transparent)" }} />
        <span style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 600 }}>Your Analysis</span>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, rgba(108,99,255,0.3), transparent)" }} />
      </div>

      {/* ATS Score */}
      <ATSScoreCard analysis={analysis} />

      {/* Free Tip */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        style={{
          borderRadius: 16, padding: "20px",
          background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.03))",
          border: "1px solid rgba(16,185,129,0.2)",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ background: "#10b981", color: "#000", fontSize: "0.62rem", fontWeight: 700, padding: "2px 8px", borderRadius: 20, letterSpacing: 0.5 }}>FREE TIP</span>
          <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>🎯 Your #1 Improvement</span>
        </div>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text)" }}>{analysis.freeTip}</p>
      </motion.div>

      {/* Generating kit */}
      {generatingKit && <GeneratingKit />}

      {/* Paid results */}
      {paidKit && <PaidResults kit={paidKit} plan={paidPlan} />}

      {/* Locked sections (only show if no paid kit yet) */}
      {!paidKit && !generatingKit && (
        <>
          <LockedFeature
            title="ATS-Optimized Resume Rewrite"
            preview="ARJUN MEHTA | arjun@gmail.com | +91 9876543210 | LinkedIn | GitHub\nSoftware Engineer — 4 Years Experience | Full Stack | Cloud\n\nPROFESSIONAL SUMMARY\nResults-driven Software Engineer with 4+ years delivering scalable web applications serving 500K+ users. Reduced API latency by 42%, led cross-functional team of 6 engineers, and championed migration to microservices architecture cutting deployment time by 60%..."
            onUpgrade={onUpgrade}
          />
          <LockedFeature
            title="Tailored Cover Letter (3 Versions)"
            preview="Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Engineer position at your organization. Having spent 4 years building production-grade systems that handle 500,000+ daily active users, I bring both technical depth and a track record of measurable impact..."
            onUpgrade={onUpgrade}
          />
          <LockedFeature
            title="LinkedIn Bio + 5 Cold DM Scripts"
            preview="LINKEDIN HEADLINE: Senior Software Engineer | Java · React · AWS | Building at Scale | Open to Opportunities\n\nLINKEDIN SUMMARY:\nI build software that scales. Over 4 years, I've shipped products used by half a million people, reduced infrastructure costs by ₹18L annually, and led teams from 0 to production..."
            onUpgrade={onUpgrade}
          />

          {/* Upgrade CTA */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{
              borderRadius: 20, padding: "28px 24px",
              background: "linear-gradient(135deg, rgba(108,99,255,0.1), rgba(56,189,248,0.06))",
              border: "1px solid rgba(108,99,255,0.2)",
              textAlign: "center",
            }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>
              🚀 Unlock Your Full Career Kit
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: 24 }}>
              One-time UPI payment · Instant generation · No subscription
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 520, margin: "0 auto 20px" }}>
              {[
                { plan: "basic" as const, name: "Basic Kit", price: "₹149", features: ["Full Resume Rewrite", "1 Cover Letter", "10 Interview Q&A"] },
                { plan: "pro" as const, name: "Pro Kit", price: "₹249", popular: true, features: ["Full Resume Rewrite", "3 Cover Letters", "LinkedIn Bio + Headline", "5 Cold DM Scripts", "20 Interview Q&A"] },
              ].map(p => (
                <div key={p.plan} onClick={() => onUpgrade(p.plan)}
                  style={{
                    borderRadius: 14, padding: "18px",
                    background: p.popular ? "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(124,58,237,0.1))" : "rgba(255,255,255,0.03)",
                    border: p.popular ? "1px solid rgba(108,99,255,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer", transition: "all 0.2s", textAlign: "left",
                  }}>
                  {p.popular && <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#a78bfa", background: "rgba(108,99,255,0.2)", padding: "2px 8px", borderRadius: 10, display: "inline-block", marginBottom: 8, letterSpacing: 0.5 }}>⚡ POPULAR</div>}
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{p.name}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#a78bfa", margin: "6px 0" }}>{p.price}</div>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ fontSize: "0.75rem", color: "var(--text)", display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <span style={{ color: "#10b981", fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button onClick={() => onUpgrade("pro")} style={{
              padding: "14px 36px", borderRadius: 12,
              background: "linear-gradient(135deg, #6c63ff, #7c3aed)",
              border: "none", color: "white", cursor: "pointer",
              fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "0.95rem", fontWeight: 700,
              boxShadow: "0 0 25px rgba(108,99,255,0.35)",
              letterSpacing: 0.3,
            }}>
              💳 Pay via UPI — Unlock Instantly
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
