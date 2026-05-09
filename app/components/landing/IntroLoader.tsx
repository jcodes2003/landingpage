export default function IntroLoader({ closing }: { closing: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background:
          "radial-gradient(circle at 50% 45%, rgba(255,107,53,0.22), rgba(6,6,8,1) 55%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none",
        opacity: closing ? 0 : 1,
        transition: "opacity 1400ms ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(255,107,53,0.22)",
          animation: "loaderRing 1.6s ease-in-out infinite",
          opacity: closing ? 0 : 1,
          transition: "opacity 220ms ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 580,
          height: 580,
          borderRadius: "50%",
          border: "1px solid rgba(255,107,53,0.12)",
          animation: "loaderRing 1.6s ease-in-out infinite 0.2s",
          opacity: closing ? 0 : 1,
          transition: "opacity 220ms ease",
        }}
      />
      <div
        style={{
          fontFamily: "'Black Han Sans', sans-serif",
          fontSize: "clamp(4rem, 12vw, 8.4rem)",
          letterSpacing: "0.06em",
          color: "#ff5a2f",
          textShadow: "0 10px 36px rgba(255,90,47,0.5)",
          WebkitTextStroke: "1px rgba(0,0,0,0.35)",
          transform: "translateZ(0) scale(1)",
          opacity: 1,
          transition: "none",
          animation: closing ? "none" : "loaderPulse 1.4s ease-in-out infinite",
          willChange: "opacity",
        }}
      >
        SOLE
      </div>
      <style>{`
        @keyframes loaderPulse {
          0% { transform: translateZ(0) scale(0.98); opacity: 0.92; }
          50% { transform: translateZ(0) scale(1.04); opacity: 1; }
          100% { transform: translateZ(0) scale(0.98); opacity: 0.92; }
        }
        @keyframes loaderRing {
          0% { transform: scale(0.82); opacity: 0.2; }
          50% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.14); opacity: 0.15; }
        }
      `}</style>
    </div>
  );
}

