import type { NavbarProps } from './types';

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className="landing-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 5%",
        minHeight: 68,
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
      <div className="landing-nav-links" style={{ display: "flex", gap: 36 }}>
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
      <style>{`
        @media (max-width: 920px) {
          .landing-nav {
            padding: 10px 4%;
            gap: 14px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }
          .landing-nav-links {
            width: 100%;
            gap: 18px !important;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 4px;
            -ms-overflow-style: none;
            scrollbar-width: none;
            justify-content: center;
          }
          .landing-nav-links::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}

