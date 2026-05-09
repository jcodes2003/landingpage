import { useState } from 'react';

export default function Newsletter() {
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
            OK You&apos;re on the list. Welcome to the family.
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

