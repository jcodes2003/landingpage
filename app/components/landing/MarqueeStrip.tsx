export default function MarqueeStrip() {
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

