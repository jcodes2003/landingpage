import { useEffect, useMemo, useRef, useState } from 'react';
import ShoeSVG from './ShoeSVG';
import { featured } from './data';

export default function ProductGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const movingItems = useMemo(() => [...featured, ...featured], []);

  const renderCard = (item: typeof featured[number], i: number) => (
    <div
      key={`${item.name}-${i}`}
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered === i ? item.color + "66" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        padding: "22px 20px",
        cursor: "pointer",
        boxShadow: hovered === i ? `0 20px 40px ${item.color}22` : "none",
        minWidth: showAll ? "auto" : 280,
        width: showAll ? "auto" : 280,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.18em",
            color: item.color,
            background: `${item.color}18`,
            padding: "5px 12px",
            borderRadius: 5,
          }}
        >
          {item.tag}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 18,
          transform: hovered === i ? "rotate(-6deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
      >
        <ShoeSVG
          color={["orange", "blue", "purple", "green", "orange", "purple"][i % 6]}
          size={180}
        />
      </div>

      <h3
        style={{
          color: "#fff",
          fontWeight: 900,
          fontSize: 16,
          fontFamily: "'Black Han Sans', sans-serif",
          letterSpacing: "0.05em",
          marginBottom: 4,
        }}
      >
        {item.name}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 16 }}>
        {item.desc}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontSize: "1.3rem",
            fontWeight: 900,
            color: "#fff",
            fontFamily: "'Black Han Sans', sans-serif",
          }}
        >
          {item.price}
        </span>
        <button
          style={{
            background: hovered === i ? item.color : "rgba(255,255,255,0.08)",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            color: hovered === i ? "#000" : "#fff",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
        >
          ADD +
        </button>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} style={{ background: "#060608", padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 36,
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                color: "#FF6B35",
                fontSize: 12,
                letterSpacing: "0.25em",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              COLLECTION
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "'Black Han Sans', sans-serif",
                lineHeight: 1,
              }}
            >
              ALL STYLES
            </h2>
          </div>
          <button
            onClick={() => setShowAll((v) => !v)}
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              padding: "10px 24px",
              color: "rgba(255,255,255,0.75)",
              fontSize: 12,
              letterSpacing: "0.12em",
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {showAll ? "SHOW CAROUSEL" : "VIEW ALL"}
          </button>
        </div>

        {!showAll ? (
          <div
            style={{
              overflow: "hidden",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div
              className="collection-track"
              style={{
                display: "flex",
                gap: 18,
                width: "max-content",
              }}
            >
              {movingItems.map((item, i) => renderCard(item, i))}
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            {featured.map((item, i) => renderCard(item, i))}
          </div>
        )}
      </div>
      <style>{`
        .collection-track {
          animation: collection-slide 28s linear infinite;
        }
        .collection-track:hover {
          animation-play-state: paused;
        }
        @keyframes collection-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
