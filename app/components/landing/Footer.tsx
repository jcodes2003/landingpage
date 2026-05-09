export default function Footer() {
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

