import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const bootSteps = [
    { label: "INITIALIZING PORTFOLIO CORE...", color: "#64748b" },
    { label: "LOADING PARTICLE NETWORK...", color: "#38bdf8" },
    { label: "SYNCING ACADEMIC HIGHLIGHTS [CGPA 8.29]...", color: "#10b981" },
    { label: "COMPILING PROJECTS & EXPERTISE...", color: "#38bdf8" },
    { label: "AUTHENTICATING AFSHEEN FATHIMA...", color: "#10b981" },
    { label: "SYSTEM READY // WELCOME.", color: "#00f5d4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < bootSteps.length - 1) {
          return prev + 1;
        }

        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 700);
        }, 700);
        return prev;
      });
    }, 380);

    return () => clearInterval(interval);
  }, [bootSteps.length, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at top left, rgba(34, 211, 238, 0.18), transparent 30%), linear-gradient(135deg, #040816 0%, #07101f 45%, #02050b 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        overflow: "hidden",
        opacity: isFading ? 0 : 1,
        transform: isFading ? "scale(1.04)" : "scale(1)",
        filter: isFading ? "blur(12px)" : "blur(0px)",
        transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", animation: "sweep 3.6s linear infinite" }} />
      <div style={{ position: "absolute", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.22), transparent 70%)", top: "8%", left: "12%", animation: "floatSlow 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.16), transparent 70%)", bottom: "10%", right: "10%", animation: "floatSlow 10s ease-in-out infinite reverse" }} />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(92vw, 560px)",
          padding: "2.2rem",
          borderRadius: "28px",
          background: "rgba(7, 12, 22, 0.7)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.46)",
          backdropFilter: "blur(20px)",
          animation: "panelReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.4rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.24em", color: "#34d399", textTransform: "uppercase", fontWeight: 700 }}>
            Portfolio Boot Sequence
          </div>
          <div style={{ color: "#7dd3fc", fontSize: "0.9rem", fontWeight: 600 }}>
            {currentStep + 1}/{bootSteps.length}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.4rem" }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "16px", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #34d399, #22d3ee)", color: "#03110d", fontWeight: 800, fontSize: "1rem", boxShadow: "0 0 30px rgba(52,211,153,0.28)" }}>
            AF
          </div>
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8fafc" }}>Afsheen Fathima</div>
            <div style={{ fontSize: "0.95rem", color: "#8b9bb8" }}>Designing digital experiences with motion and clarity</div>
          </div>
        </div>

        <div style={{ width: "100%", height: "8px", borderRadius: "999px", background: "rgba(255,255,255,0.08)", overflow: "hidden", marginBottom: "1.2rem" }}>
          <div style={{ height: "100%", width: `${((currentStep + 1) / bootSteps.length) * 100}%`, background: "linear-gradient(90deg, #34d399, #22d3ee)", borderRadius: "999px", transition: "width 0.35s ease" }} />
        </div>

        <div style={{ minHeight: "126px", padding: "1rem", borderRadius: "16px", background: "rgba(2, 6, 23, 0.72)", border: "1px solid rgba(255,255,255,0.05)", boxSizing: "border-box" }}>
          {bootSteps.slice(0, currentStep + 1).map((step, idx) => (
            <div
              key={idx}
              style={{
                fontFamily: '"Fira Code", "Courier New", monospace',
                fontSize: "0.82rem",
                color: step.color,
                marginBottom: "6px",
                lineHeight: 1.45,
                opacity: idx === currentStep ? 1 : 0.45,
                transform: idx === currentStep ? "translateY(0)" : "translateY(2px)",
                transition: "all 0.25s ease",
              }}
            >
              <span style={{ color: "#4b5563", marginRight: "8px" }}>&gt;&gt;&gt;</span>
              {step.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes panelReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sweep {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-18px) translateX(12px); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;