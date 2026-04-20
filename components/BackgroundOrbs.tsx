"use client";
export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary gradient orbs */}
      <div style={{
        position: "absolute", top: "-20%", left: "-10%",
        width: "60vw", height: "60vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)",
        filter: "blur(40px)", animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-15%",
        width: "50vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
        filter: "blur(50px)", animation: "float 10s ease-in-out infinite reverse",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      {/* Extra accent orbs */}
      <div style={{
        position: "absolute", top: "30%", right: "10%",
        width: "25vw", height: "25vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
        filter: "blur(40px)", animation: "float 12s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "30%", left: "5%",
        width: "20vw", height: "20vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)",
        filter: "blur(35px)", animation: "float 9s ease-in-out infinite reverse",
      }} />
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.025 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6c63ff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Subtle vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,16,0.6) 100%)",
      }} />
    </div>
  );
}
