import { useEffect, useRef, useState } from 'react';
import ShoeSVG from './ShoeSVG';

export default function ScrollShoeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: "100vh", background: "#060608", position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 68% 45%, rgba(255,107,53,0.18), rgba(6,6,8,0) 60%)",
            opacity: started ? 0.95 : 0.45,
            transition: "opacity 600ms ease",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            width: "min(1150px, 100%)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 36,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              opacity: started ? 1 : 0,
              transform: started ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 650ms ease-out, transform 650ms ease-out",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              backdropFilter: "blur(10px)",
              padding: "22px 20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            <p
              style={{
                color: "#FF6B35",
                fontSize: 12,
                letterSpacing: "0.22em",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              PERFORMANCE DETAILS
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "'Black Han Sans', sans-serif",
                letterSpacing: "-0.02em",
                marginBottom: 12,
                lineHeight: 1,
              }}
            >
              BUILT TO
              <br />
              <span style={{ color: "#FF6B35" }}>MOVE FAST</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 24,
                maxWidth: 440,
              }}
            >
              The shoe drops in oversized from above, then tightens and locks into
              position automatically.
            </p>
            <div style={{ display: "grid", gap: 10, maxWidth: 420 }}>
              {[
                ["Weight", "290g lightweight foam"],
                ["Cushion", "Dual-density impact core"],
                ["Grip", "Street + trail outsole pattern"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingBottom: 8,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 18,
                width: "100%",
                maxWidth: 420,
                height: 6,
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: started ? "100%" : "6%",
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, rgba(255,107,53,1) 0%, rgba(255,153,102,1) 100%)",
                  boxShadow: "0 0 20px rgba(255,107,53,0.5)",
                  transition: "width 1400ms ease",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 380,
                height: 380,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,107,53,0.28), rgba(255,107,53,0.02) 65%, transparent 72%)",
                transform: started ? "scale(1.1)" : "scale(0.75)",
                filter: "blur(8px)",
                pointerEvents: "none",
                transition: "transform 800ms ease",
              }}
            />
            <div
              style={{
                transform: started
                  ? "translateY(0) scale(1)"
                  : "translateY(-300px) scale(3.05)",
                opacity: started ? 1 : 0.1,
                transformStyle: "preserve-3d",
                transition:
                  "transform 1200ms cubic-bezier(.22,.61,.36,1), opacity 900ms linear",
                filter: "drop-shadow(0 30px 60px #FF6B3566)",
                willChange: "transform, opacity",
              }}
            >
              <div
                style={{
                  animation: started ? "shoeSettleSpin 1200ms cubic-bezier(.22,.61,.36,1) 1 forwards" : "none",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div
                  style={{
                    transform: hovered ? "rotateZ(-8deg) rotateY(-16deg)" : "rotateZ(0deg) rotateY(0deg)",
                    transformStyle: "preserve-3d",
                    transition: "transform 280ms ease",
                  }}
                >
                  <ShoeSVG color="orange" size={320} />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 38,
                marginTop: 38,
                opacity: started ? 1 : 0,
                transform: started ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 900ms ease-out, transform 900ms ease-out",
              }}
            >
              {[
                ["4.9*", "Rating"],
                ["50K+", "Sold"],
                ["120+", "Styles"],
              ].map(([val, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#FF6B35",
                      fontFamily: "'Black Han Sans', sans-serif",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.15em",
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: `${200 + i * 140}px`,
              height: `${200 + i * 140}px`,
              border: `1px solid rgba(255,107,53,${0.12 / i})`,
              animation: started ? `ringSpin${i} ${8 + i * 2}s linear infinite` : "none",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes shoeSettleSpin {
          0% { transform: rotateY(-170deg) rotateZ(-36deg); }
          100% { transform: rotateY(0deg) rotateZ(0deg); }
        }
        @keyframes ringSpin1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ringSpin2 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes ringSpin3 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
