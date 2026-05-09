import { useEffect, useRef, useState } from 'react';
import ShoeSVG from './ShoeSVG';
import { shoes } from './data';

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [shoeHover, setShoeHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((p) => (p + 1) % shoes.length);
      setTimeout(() => setAnimating(false), 180);
    }, 180);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((p) => (p - 1 + shoes.length) % shoes.length);
      setTimeout(() => setAnimating(false), 180);
    }, 180);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animating]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 920px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const shoe = shoes[active];

  return (
    <section
      className="hero-carousel"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#060608",
      }}
    >
      {/* Animated BG gradient */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 70% at 60% 50%, ${shoe.accent}22 0%, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />
      {/* Grid lines */}
      <div
        className="hero-inner"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="hero-container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          maxWidth: 1200,
          display: "flex",
          alignItems: "center",
          gap: "8%",
          padding: "120px 0 60px",
        }}
      >
        {/* Left text */}
        <div className="hero-copy" style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${shoe.accent}22`,
              border: `1px solid ${shoe.accent}55`,
              borderRadius: 6,
              padding: "6px 16px",
              marginBottom: 28,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(-10px)" : "translateY(0)",
              transition: "all 0.4s ease",
            }}
          >
            <span
              style={{
                color: shoe.tagColor,
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.2em",
              }}
            >
              {shoe.tag}
            </span>
          </div>

          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 0.9,
              fontFamily: "'Black Han Sans', sans-serif",
              letterSpacing: "-0.02em",
              marginBottom: 24,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateX(-30px)" : "translateX(0)",
              transition: "all 0.45s ease",
            }}
          >
            {shoe.name.split(" ").map((w, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  color:
                    i === shoe.name.split(" ").length - 1
                      ? shoe.accent
                      : "#fff",
                  textShadow: "0 3px 14px rgba(0,0,0,0.7)",
                }}
              >
                {w}
              </span>
            ))}
          </h1>

          <p
            className="hero-desc"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 17,
              marginBottom: 40,
              maxWidth: 380,
              lineHeight: 1.6,
              opacity: animating ? 0 : 1,
              transition: "opacity 0.5s ease 0.1s",
            }}
          >
            {shoe.desc}
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span
              className="hero-price"
              style={{
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "'Black Han Sans', sans-serif",
              }}
            >
              {shoe.price}
            </span>
            <button
              className="hero-btn hero-btn-primary"
              style={{
                background: shoe.accent,
                color: "#000",
                border: "none",
                borderRadius: 10,
                padding: "14px 36px",
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: "0.1em",
                cursor: "pointer",
                boxShadow: `0 8px 32px ${shoe.accent}55`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.transform = "scale(1.05)";
                target.style.boxShadow = `0 12px 40px ${shoe.accent}88`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.transform = "scale(1)";
                target.style.boxShadow = `0 8px 32px ${shoe.accent}55`;
              }}
            >
              BUY NOW
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: 10,
                padding: "14px 28px",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.borderColor = "rgba(255,255,255,0.25)";
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* Right shoe */}
        <div
          className="hero-visual"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Glow circle */}
          <div
            className="hero-glow"
            style={{
              position: "absolute",
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: `${shoe.accent}18`,
              border: `1px solid ${shoe.accent}33`,
              transition: "background 0.6s, border 0.6s",
            }}
          />
          <div
            className="hero-shoe-wrap"
            style={{
              transform: animating
                ? "translateY(-16px) rotateZ(15deg) rotateX(9deg)"
                : isMobile
                  ? "translateY(2px) translateX(-10px) rotateZ(-11deg) rotateX(10deg) rotateY(-12deg)"
                  : shoeHover
                  ? "translateY(-4px) rotateZ(12deg) rotateX(12deg)"
                  : "translateY(0) rotateZ(9deg) rotateX(8deg)",
              transition: "transform 0.36s cubic-bezier(.22,.61,.36,1)",
              transformStyle: "preserve-3d",
            }}
            onMouseEnter={() => setShoeHover(true)}
            onMouseLeave={() => setShoeHover(false)}
          >
            <ShoeSVG
              key={shoe.id}
              color={shoe.svg}
              image={shoe.image}
              imageScale={shoe.imageScale}
              imageOffsetY={shoe.imageOffsetY}
              size={340}
            />
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.12em",
              fontWeight: 600,
            }}
          >
            {active + 1} / {shoes.length}
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 3,
        }}
      >
        {shoes.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              if (intervalRef.current) clearInterval(intervalRef.current);
            }}
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === active ? s.accent : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={prev}
        style={{
          position: "absolute",
          left: "3%",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.18)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
      >
        {"<"}
      </button>
      <button
        className="hero-arrow hero-arrow-right"
        onClick={next}
        style={{
          position: "absolute",
          right: "3%",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.18)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
      >
        {">"}
      </button>
      <style>{`
        @media (max-width: 920px) {
          .hero-carousel {
            min-height: 72vh !important;
          }
          .hero-inner {
            width: 92% !important;
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 8px !important;
            padding: 74px 0 22px !important;
            align-items: start !important;
          }
          .hero-container {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 40px 0 20px !important;
          }
          .hero-copy {
            order: 1;
            position: relative;
            z-index: 4;
            min-height: 170px;
            display: flex;
            flex-direction: column;
            margin-bottom: 0;
            width: clamp(150px, 35%, 220px);
          }
          .hero-copy h1 {
            font-size: clamp(1.45rem, 3.6vw, 2.2rem) !important;
            margin-bottom: 6px !important;
            line-height: 1.05 !important;
            margin-top: -8px !important;
          }
          .hero-title {
            text-shadow: 0 4px 20px rgba(0,0,0,0.8) !important;
            min-height: 70px;
          }
          .hero-desc {
            display: block;
            color: rgba(255,255,255,0.72);
            font-size: 12px;
            margin-bottom: 8px;
            line-height: 1.4;
            max-width: 100%;
          }
          .hero-actions {
            width: auto;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 6px !important;
            margin-top: auto;
            transform: translateY(6px);
          }
          .hero-price {
            font-size: 1.6rem !important;
            min-width: 64px;
          }
          .hero-btn {
            padding: 10px 12px !important;
            font-size: 11px !important;
            letter-spacing: 0.06em !important;
          }
          .hero-visual {
            order: 2;
            min-height: 140px;
            z-index: 2;
            margin-top: 0;
            padding-top: 6px;
            width: clamp(200px, 58%, 300px);
            display: flex;
            justify-content: center;
          }
          .hero-glow {
            width: min(48vw, 210px) !important;
            height: min(48vw, 210px) !important;
          }
          .hero-shoe-wrap {
            transform: translateY(-8px) translateX(10px) rotateZ(11deg) rotateX(10deg) rotateY(12deg) scale(0.48) !important;
          }
          .hero-arrow {
            width: 34px !important;
            height: 34px !important;
            top: 47% !important;
            font-size: 16px !important;
          }
          .hero-arrow-left {
            left: 1.5% !important;
          }
          .hero-arrow-right {
            right: 1.5% !important;
          }
        }
        @media (max-width: 420px) {
          .hero-carousel {
            min-height: 70vh !important;
          }
          .hero-inner {
            padding: 60px 0 14px !important;
          }
          .hero-container {
            gap: 10px;
            justify-content: center;
          }
          .hero-copy h1 {
            font-size: clamp(1.55rem, 9vw, 1.95rem) !important;
            margin-top: -12px !important;
          }
          .hero-title {
            min-height: 70px !important;
          }
          .hero-desc {
            font-size: 12px !important;
          }
          .hero-price {
            font-size: 1.6rem !important;
          }
          .hero-copy {
            min-height: 160px !important;
            width: clamp(150px, 45%, 180px) !important;
          }
          .hero-visual {
            min-height: 120px !important;
            padding-top: 10px !important;
            width: clamp(150px, 52%, 190px) !important;
          }
          .hero-btn {
            padding: 10px 10px !important;
            font-size: 10px !important;
          }
          .hero-arrow {
            top: 44% !important;
          }
        }
      `}</style>
    </section>
  );
}

