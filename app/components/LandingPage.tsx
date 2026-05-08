"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Shoe = {
  id: number;
  name: string;
  price: string;
  tag: string;
  tagColor: string;
  color: string;
  bg: string;
  accent: string;
  desc: string;
  emoji: string;
  svg: string;
};

type FeaturedItem = {
  name: string;
  price: string;
  color: string;
  desc: string;
  tag: string;
};

type ShoeSVGProps = {
  color: string;
  size?: number;
};

type NavbarProps = {
  scrolled: boolean;
};

const shoes: Shoe[] = [
  {
    id: 1,
    name: "APEX RUNNER X1",
    price: "$189",
    tag: "NEW DROP",
    tagColor: "#ff3c3c",
    color: "#FF6B35",
    bg: "from-orange-950 via-orange-900 to-stone-950",
    accent: "#FF6B35",
    desc: "Engineered for the streets. Built for legends.",
    emoji: "FIRE",
    svg: "orange",
  },
  {
    id: 2,
    name: "STEALTH ELITE",
    price: "$224",
    tag: "BESTSELLER",
    tagColor: "#3caaff",
    color: "#3CAAFF",
    bg: "from-blue-950 via-slate-900 to-black",
    accent: "#3CAAFF",
    desc: "Silent steps. Loud presence.",
    emoji: "BOLT",
    svg: "blue",
  },
  {
    id: 3,
    name: "VAPOR CLOUD 3",
    price: "$167",
    tag: "LIMITED",
    tagColor: "#b03cff",
    color: "#B03CFF",
    bg: "from-purple-950 via-violet-900 to-black",
    accent: "#B03CFF",
    desc: "Walk on air. Leave a mark.",
    emoji: "SPARK",
    svg: "purple",
  },
  {
    id: 4,
    name: "TERRA GRIP PRO",
    price: "$198",
    tag: "ECO SERIES",
    tagColor: "#3cff8a",
    color: "#3CFF8A",
    bg: "from-green-950 via-emerald-900 to-stone-950",
    accent: "#3CFF8A",
    desc: "Tread lightly. Dominate wildly.",
    emoji: "LEAF",
    svg: "green",
  },
];

const featured: FeaturedItem[] = [
  {
    name: "APEX RUNNER X1",
    price: "$189",
    color: "#FF6B35",
    desc: "Streets Edition",
    tag: "NEW",
  },
  {
    name: "STEALTH ELITE",
    price: "$224",
    color: "#3CAAFF",
    desc: "Performance Series",
    tag: "HOT",
  },
  {
    name: "VAPOR CLOUD 3",
    price: "$167",
    color: "#B03CFF",
    desc: "Comfort Plus",
    tag: "LTD",
  },
  {
    name: "TERRA GRIP PRO",
    price: "$198",
    color: "#3CFF8A",
    desc: "Trail Ready",
    tag: "ECO",
  },
  {
    name: "NOCTURNE SLIP",
    price: "$145",
    color: "#FFD13C",
    desc: "Night Walk",
    tag: "SALE",
  },
  {
    name: "MONO FORCE",
    price: "$212",
    color: "#FF3C8A",
    desc: "Urban Core",
    tag: "NEW",
  },
];

function ShoeSVG({ color, size = 280 }: ShoeSVGProps) {
  return (
    <div
      style={{
        width: size,
        height: size * 0.6,
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
        transition: "transform 0.3s ease",
      }}
    >
      <Image
        src="/shoes/jordan2.png"
        alt={`${color} shoe`}
        fill
        loading="eager"
        sizes="(max-width: 768px) 80vw, 420px"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 5%",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(6,6,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "#FF6B35",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: 16,
            color: "#fff",
            fontFamily: "'Black Han Sans', sans-serif",
          }}
        >
          S
        </div>
        <span
          style={{
            color: "#fff",
            fontWeight: 900,
            fontSize: 20,
            letterSpacing: "0.08em",
            fontFamily: "'Black Han Sans', sans-serif",
          }}
        >
          SOLE
        </span>
      </div>
      <div style={{ display: "flex", gap: 36 }}>
        {["Shop", "Collections", "About", "Contact"].map((n) => (
          <a
            key={n}
            href="#"
            style={{
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.12em",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
            }
          >
            {n}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.65)",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          SEARCH
        </button>
        <button
          style={{
            background: "#FF6B35",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            padding: "8px 20px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 13,
            letterSpacing: "0.08em",
          }}
        >
          CART (0)
        </button>
      </div>
    </nav>
  );
}

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
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

  const shoe = shoes[active];

  return (
    <section
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
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 70% at 60% 50%, ${shoe.accent}22 0%, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />
      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
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
        <div style={{ flex: 1, minWidth: 0 }}>
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
                }}
              >
                {w}
              </span>
            ))}
          </h1>

          <p
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

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <span
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
            style={{
              transform: animating
                ? "rotateZ(-14deg) scale(0.9) translateY(-16px)"
                : "rotateZ(-8deg) scale(1) translateY(0)",
              transition: "transform 0.36s cubic-bezier(.22,.61,.36,1)",
            }}
          >
            <ShoeSVG color={shoe.svg} size={340} />
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
    </section>
  );
}

function ScrollShoeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = rect.height + windowH;
      const passed = windowH - rect.top;
      const p = Math.min(Math.max(passed / total, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shrinkProgress = Math.min(progress, 1);
  const revealProgress = Math.min(progress * 1.5, 1);
  const smooth = revealProgress * revealProgress * (3 - 2 * revealProgress);
  const translateY = -300 + smooth * 300;
  const scale = 3.05 - smooth * 2.05;
  const rotateZ = -36 + smooth * 28;
  const rotateY = -170 + smooth * 170;
  const detailOpacity = Math.min(progress * 2.4, 1);
  const statProgress = Math.min(Math.max((progress - 0.45) / 0.35, 0), 1);
  const glowScale = 0.75 + smooth * 0.4;
  const opacity =
    progress < 0.1 ? progress * 10 : progress > 0.85 ? (1 - progress) * 6.6 : 1;

  return (
    <section
      ref={sectionRef}
      style={{ height: "180vh", background: "#060608", position: "relative" }}
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
            opacity: 0.45 + smooth * 0.5,
            transition: "opacity 120ms linear",
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
              opacity: detailOpacity,
              transform: `translateX(${(1 - Math.min(progress * 3, 1)) * -24}px)`,
              transition: "opacity 0.12s ease-out, transform 0.12s ease-out",
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
              position as you scroll.
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
                  width: `${Math.max(6, smooth * 100)}%`,
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, rgba(255,107,53,1) 0%, rgba(255,153,102,1) 100%)",
                  boxShadow: "0 0 20px rgba(255,107,53,0.5)",
                  transition: "width 0.08s linear",
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
                background: "radial-gradient(circle, rgba(255,107,53,0.28), rgba(255,107,53,0.02) 65%, transparent 72%)",
                transform: `scale(${glowScale})`,
                filter: "blur(8px)",
                pointerEvents: "none",
                transition: "transform 0.06s linear",
              }}
            />
            <div
              style={{
                transform: `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                opacity,
                transformStyle: "preserve-3d",
                transition: "transform 0.07s cubic-bezier(.22,.61,.36,1), opacity 0.09s linear",
                filter: `drop-shadow(0 30px 60px #FF6B3566)`,
                willChange: "transform, opacity",
              }}
            >
              <ShoeSVG color="orange" size={320} />
            </div>
            <div
              style={{
                display: "flex",
                gap: 38,
                marginTop: 38,
                opacity: statProgress,
                transform: `translateY(${(1 - statProgress) * 24}px)`,
                transition: "opacity 0.18s ease-out, transform 0.18s ease-out",
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

        {/* Ring decorations */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: `${200 + i * 140}px`,
              height: `${200 + i * 140}px`,
              border: `1px solid rgba(255,107,53,${0.12 / i})`,
              transform: `rotate(${progress * 180 * i}deg)`,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function ProductGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
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

  return (
    <section
      ref={sectionRef}
      style={{ background: "#060608", padding: "100px 5%" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 60,
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
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              padding: "10px 24px",
              color: "rgba(255,255,255,0.65)",
              fontSize: 12,
              letterSpacing: "0.12em",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            VIEW ALL
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {featured.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${hovered === i ? item.color + "66" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 16,
                padding: "28px 24px",
                cursor: "pointer",
                transform: visible
                  ? `translateY(${hovered === i ? -8 : 0}px)`
                  : "translateY(40px)",
                opacity: visible ? 1 : 0,
                transition: `all 0.5s ease ${i * 0.08}s`,
                boxShadow:
                  hovered === i ? `0 20px 40px ${item.color}22` : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
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
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: 18,
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                >
                  HEART
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20,
                  transform:
                    hovered === i
                      ? "rotate(-6deg) scale(1.05)"
                      : "rotate(0deg) scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <ShoeSVG
                  color={
                    ["orange", "blue", "purple", "green", "orange", "purple"][
                      i % 6
                    ]
                  }
                  size={200}
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
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  marginBottom: 20,
                }}
              >
                {item.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: "'Black Han Sans', sans-serif",
                  }}
                >
                  {item.price}
                </span>
                <button
                  style={{
                    background:
                      hovered === i ? item.color : "rgba(255,255,255,0.08)",
                    border: "none",
                    borderRadius: 8,
                    padding: "8px 20px",
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
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    "FREE RETURNS",
    "NEW ARRIVALS WEEKLY",
    "SUSTAINABLE MATERIALS",
    "WORLDWIDE SHIPPING",
    "120-DAY WARRANTY",
  ];
  return (
    <div
      style={{
        background: "#FF6B35",
        padding: "14px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 0,
          animation: "marquee 18s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              paddingRight: 48,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.18em",
              color: "#000",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#000",
                display: "inline-block",
              }}
            />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function BrandStory() {
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
        overflow: "hidden",
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
            OUR MISSION →
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
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section
      style={{
        background: "#060608",
        padding: "100px 5%",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: "#FF6B35",
            fontSize: 12,
            letterSpacing: "0.25em",
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          STAY IN THE LOOP
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#fff",
            fontFamily: "'Black Han Sans', sans-serif",
            marginBottom: 16,
          }}
        >
          GET EARLY ACCESS
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            marginBottom: 36,
            fontSize: 15,
          }}
        >
          New drops, exclusive collabs, and members-only offers.
        </p>
        {sent ? (
          <div
            style={{
              color: "#3CFF8A",
              fontSize: 16,
              fontWeight: 700,
              padding: 24,
            }}
          >
            OK You're on the list. Welcome to the family.
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: 0,
              maxWidth: 440,
              margin: "0 auto",
              borderRadius: 12,
              overflow: "hidden",
              border: "1.5px solid rgba(255,107,53,0.4)",
            }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "none",
                padding: "14px 20px",
                color: "#fff",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={() => email && setSent(true)}
              style={{
                background: "#FF6B35",
                border: "none",
                padding: "14px 28px",
                color: "#000",
                fontWeight: 900,
                fontSize: 13,
                letterSpacing: "0.1em",
                cursor: "pointer",
              }}
            >
              JOIN
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#030305",
        padding: "60px 5% 30px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#FF6B35",
                fontFamily: "'Black Han Sans', sans-serif",
                letterSpacing: "0.1em",
                marginBottom: 16,
              }}
            >
              SOLE
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 260,
              }}
            >
              Premium footwear for those who move with purpose and style.
            </p>
          </div>
          {([
            ["SHOP", ["New Arrivals", "Best Sellers", "Sale", "All Styles"]],
            ["COMPANY", ["About", "Careers", "Press", "Blog"]],
            ["HELP", ["FAQ", "Shipping", "Returns", "Size Guide"]],
          ] as [string, string[]][]).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  marginBottom: 20,
                }}
              >
                {title}
              </h4>
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 10,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
            (c) 2026 SOLE. All rights reserved.
          </span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13 }}>
            Made with HEART for sneakerheads everywhere
          </span>
        </div>
      </div>
    </footer>
  );
}

function IntroLoader({ closing }: { closing: boolean }) {
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderClosing, setLoaderClosing] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  useEffect(() => {
    const startClose = setTimeout(() => {
      setLoaderClosing(true);
    }, 1500);

    const hideLoader = setTimeout(() => {
      setShowLoader(false);
    }, 3300);

    return () => {
      clearTimeout(startClose);
      clearTimeout(hideLoader);
    };
  }, []);

  return (
    <>
      {showLoader && <IntroLoader closing={loaderClosing} />}
      <div
        style={{
          background: "#060608",
          minHeight: "100vh",
          fontFamily: "system-ui, sans-serif",
          opacity: showLoader ? 0 : 1,
          transform: "scale(1)",
          transition: "opacity 700ms ease",
        }}
      >
        <Navbar scrolled={scrolled} />
        <HeroCarousel />
        <MarqueeStrip />
        <ScrollShoeSection />
        <ProductGrid />
        <BrandStory />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
