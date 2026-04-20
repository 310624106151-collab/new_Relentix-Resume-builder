"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AnalysisState } from "@/types";

interface Props {
  onAnalyze: (text: string) => void;
  state: AnalysisState;
  role: string; setRole: (v: string) => void;
  exp: string; setExp: (v: string) => void;
  jd: string; setJd: (v: string) => void;
}

const loadingSteps = [
  "Reading resume structure...",
  "Checking ATS compatibility...",
  "Scanning keyword density...",
  "Identifying missing signals...",
  "Calculating your score...",
];

export default function ResumeUploader({ onAnalyze, state, role, setRole, exp, setExp, jd, setJd }: Props) {
  const [resumeText, setResumeText] = useState("");
  const [activeTab, setActiveTab] = useState<"paste" | "jd">("paste");
  const [step, setStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleAnalyze = () => {
    if (!resumeText.trim() || resumeText.length < 30) return;
    let i = 0;
    intervalRef.current = setInterval(() => {
      setStep(prev => (prev + 1) % loadingSteps.length);
      i++;
      if (i > 10 && intervalRef.current) clearInterval(intervalRef.current);
    }, 900);
    onAnalyze(resumeText);
  };

  const tabStyle = (active: boolean) => ({
    flex: 1, padding: "12px", border: "none", cursor: "pointer",
    background: active ? "rgba(108,99,255,0.12)" : "transparent",
    color: active ? "#a78bfa" : "var(--muted)",
    borderBottom: active ? "2px solid #6c63ff" : "2px solid transparent",
    fontSize: "0.82rem", fontWeight: 600, transition: "all 0.2s",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  });

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)", borderRadius: 10,
    color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.88rem", padding: "11px 14px", outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        borderRadius: 20, overflow: "hidden",
        border: "1px solid rgba(108,99,255,0.15)",
        background: "rgba(17,17,32,0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(108,99,255,0.06)",
      }}
    >
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--border)", background: "rgba(0,0,0,0.2)" }}>
        <button style={tabStyle(activeTab === "paste")} onClick={() => setActiveTab("paste")}>📄 Paste Resume</button>
        <button style={tabStyle(activeTab === "jd")} onClick={() => setActiveTab("jd")}>🎯 + Job Description</button>
      </div>

      <div style={{ padding: "24px" }}>
        {/* Textarea */}
        {activeTab === "paste" ? (
          <div>
            <label style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              Your Resume
              <span style={{ background: "rgba(108,99,255,0.15)", color: "#a78bfa", padding: "2px 8px", borderRadius: 20, fontSize: "0.65rem" }}>STEP 1</span>
            </label>
            <textarea
              value={resumeText}
              onChange={e => setResumeText(e.target.value)}
              placeholder={"Paste your full resume here...\n\nName, contact, experience, education, skills — everything. More detail = better output."}
              style={{ ...inputStyle, minHeight: 220, resize: "vertical", lineHeight: 1.65 }}
              onFocus={e => (e.target.style.borderColor = "#6c63ff")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />
          </div>
        ) : (
          <div>
            <label style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 1, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              Job Description
              <span style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", padding: "2px 8px", borderRadius: 20, fontSize: "0.65rem" }}>OPTIONAL BUT POWERFUL</span>
            </label>
            <textarea
              value={jd}
              onChange={e => setJd(e.target.value)}
              placeholder={"Paste the job description for laser-targeted optimization...\n\nThis aligns your resume exactly with what the ATS is scanning for. Massively boosts shortlist rates."}
              style={{ ...inputStyle, minHeight: 220, resize: "vertical", lineHeight: 1.65 }}
              onFocus={e => (e.target.style.borderColor = "#10b981")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />
          </div>
        )}

        {/* Role + Exp row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
          <div>
            <label style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 600, marginBottom: 7, display: "block" }}>Target Role</label>
            <input
              type="text" value={role} onChange={e => setRole(e.target.value)}
              placeholder="e.g. Software Engineer"
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = "#6c63ff")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 600, marginBottom: 7, display: "block" }}>Experience Level</label>
            <select value={exp} onChange={e => setExp(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
              <option value="">Select level</option>
              <option value="fresher">Fresher (0–1 yr)</option>
              <option value="junior">Junior (1–3 yrs)</option>
              <option value="mid">Mid-level (3–6 yrs)</option>
              <option value="senior">Senior (6+ yrs)</option>
            </select>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={handleAnalyze}
          disabled={state === "analyzing" || !resumeText.trim()}
          whileHover={{ scale: state === "analyzing" ? 1 : 1.01 }}
          whileTap={{ scale: 0.98 }}
          style={{
            width: "100%", marginTop: 18, padding: "15px",
            background: state === "analyzing" ? "rgba(108,99,255,0.4)" : "linear-gradient(135deg, #6c63ff, #7c3aed)",
            border: "none", borderRadius: 12, color: "white", cursor: state === "analyzing" ? "not-allowed" : "pointer",
            fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "0.95rem", fontWeight: 700,
            letterSpacing: 0.3, position: "relative", overflow: "hidden",
            boxShadow: state !== "analyzing" ? "0 0 25px rgba(108,99,255,0.35)" : "none",
          }}
        >
          {state === "analyzing" ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
              {loadingSteps[step]}
            </span>
          ) : (
            "✨ Analyze My Resume — FREE"
          )}
        </motion.button>

        <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--muted)", marginTop: 10 }}>
          Free: ATS Score + 1 Expert Tip · No signup required
        </p>
      </div>
    </motion.div>
  );
}
