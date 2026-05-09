import { useEffect, useRef, useState } from 'react';

export default function BrandStory() {
  const ref = useRef<HTMLElement | null>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#0A0A0F",
        padding: "120px 5%",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Large background text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "clamp(8rem, 18vw, 18rem)",
          fontWeight: 900,
          color: "rgba(255,107,53,0.05)",
          fontFamily: "'Black Han Sans', sans-serif",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        SOLE
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          position: "relative",
        }}
        className="brand-story-grid"
      >
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateX(-50px)",
            transition: "all 0.8s ease",
          }}
        >
          <p
            style={{
              color: "#FF6B35",
              fontSize: 12,
              letterSpacing: "0.25em",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            OUR STORY
          </p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              fontFamily: "'Black Han Sans', sans-serif",
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            DESIGNED FOR
            <br />
            <span style={{ color: "#FF6B35" }}>THOSE WHO</span>
            <br />
            NEVER STOP
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              fontSize: 16,
              marginBottom: 32,
            }}
          >
            Since 2015, SOLE has engineered footwear that moves with you - from
            concrete jungles to mountain trails. Every stitch, every sole, every
            silhouette is a statement.
          </p>
          <button
            style={{
              background: "transparent",
              border: "1.5px solid #FF6B35",
              borderRadius: 10,
              padding: "14px 36px",
              color: "#FF6B35",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.12em",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FF6B35";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#FF6B35";
            }}
          >
            OUR MISSION ?
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            opacity: vis ? 1 : 0,
            transition: "all 0.8s ease 0.2s",
          }}
          className="brand-story-stats"
        >
          {[
            ["10+", "Years", "#FF6B35"],
            ["50K+", "Happy Feet", "#3CAAFF"],
            ["120+", "Styles", "#B03CFF"],
            ["24/7", "Support", "#3CFF8A"],
          ].map(([val, lbl, col], i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  color: col,
                  fontFamily: "'Black Han Sans', sans-serif",
                  marginBottom: 6,
                }}
              >
                {val}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
              >
                {lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .brand-story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .brand-story-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .brand-story-stats > div {
            padding: 20px 16px !important;
          }
          .brand-story-stats > div > div:first-child {
            font-size: 2rem !important;
          }
          .brand-story-stats > div > div:last-child {
            font-size: 11px !important;
          }
        }
        @media (max-width: 600px) {
          section {
            padding: 80px 5% !important;
          }
          .brand-story-grid {
            gap: 30px !important;
          }
          .brand-story-stats {
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}

