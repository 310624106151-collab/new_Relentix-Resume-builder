"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResumeUploader from "@/components/ResumeUploader";
import ResultsPanel from "@/components/ResultsPanel";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import PaywallModal from "@/components/PaywallModal";
import PaymentModal from "@/components/PaymentModal";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import { AnalysisState, AnalysisResult, PaidKit, PlanType } from "@/types";

export default function Home() {
  const [state, setState] = useState<AnalysisState>("idle");
  const [resumeText, setResumeText] = useState("");
  const [role, setRole] = useState("");
  const [exp, setExp] = useState("");
  const [jd, setJd] = useState("");
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [paidKit, setPaidKit] = useState<PaidKit | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "pro">("pro");
  const [generatingKit, setGeneratingKit] = useState(false);
  const [paidPlan, setPaidPlan] = useState<PlanType>("free");
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = useCallback(async (text: string) => {
    setResumeText(text);
    setState("analyzing");
    setAnalysis(null);
    setPaidKit(null);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume: text, role, exp, jd }),
      });
      const data = await res.json();
      setAnalysis(data);
      setState("done");
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    } catch {
      setAnalysis({
        atsScore: 52,
        scoreTitle: "Needs Work",
        scoreDesc: "Your resume is missing key ATS signals. Automated screening is likely filtering you out before a human reads your profile.",
        freeTip: "Add quantified achievements to every bullet. Replace vague claims with metrics: 'Led team of 8, delivered 3 projects 2 weeks early, saving ₹4L in costs.'",
        missingKeywords: ["quantified metrics", "technical stack keywords", "leadership outcomes"],
        strengths: ["Clear contact information", "Relevant education"],
        weaknesses: ["No measurable impact", "Generic bullets", "Missing keywords"],
      });
      setState("done");
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, [role, exp, jd]);

  const handleUpgrade = (plan: "basic" | "pro") => {
    setSelectedPlan(plan);
    setShowPaywall(false);
    setShowPayment(true);
  };

  const handlePaymentSuccess = async (txnId: string) => {
    setShowPayment(false);
    setGeneratingKit(true);
    setPaidPlan(selectedPlan);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume: resumeText, role, exp, jd, plan: selectedPlan, txnId }),
      });
      const kit = await res.json();
      setPaidKit(kit);
    } catch {
      setPaidKit({
        optimizedResume: `Generation error. WhatsApp +91 8778421719 with TXN ID: ${txnId} for delivery within 30 mins.`,
        coverLetter1: `Contact +91 8778421719 for support.`,
      });
    }
    setGeneratingKit(false);
  };

  return (
    <main className="relative min-h-screen" style={{ background: "var(--bg)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <BackgroundOrbs />
      <Navbar />
      <HeroSection onScrollToTool={() => { const el = document.getElementById("tool"); el?.scrollIntoView({ behavior: "smooth" }); }} />
      <ProblemSection />
      <SolutionSection />
      <section id="tool" className="relative z-10 pb-20 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          <ResumeUploader onAnalyze={handleAnalyze} state={state} role={role} setRole={setRole} exp={exp} setExp={setExp} jd={jd} setJd={setJd} />
        </div>
      </section>
      <div ref={resultsRef}>
        <AnimatePresence>
          {(state === "analyzing" || state === "done") && (
            <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 pb-24">
              <div className="max-w-4xl mx-auto px-4">
                <ResultsPanel state={state} analysis={analysis} paidKit={paidKit} paidPlan={paidPlan} generatingKit={generatingKit} onShowPaywall={() => setShowPaywall(true)} onUpgrade={handleUpgrade} />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection onUpgrade={handleUpgrade} />
      <Footer />
      <AnimatePresence>
        {showPaywall && <PaywallModal onClose={() => setShowPaywall(false)} onUpgrade={handleUpgrade} />}
        {showPayment && <PaymentModal plan={selectedPlan} onClose={() => setShowPayment(false)} onSuccess={handlePaymentSuccess} />}
      </AnimatePresence>
    </main>
  );
}
