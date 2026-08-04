"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111111",
        padding: "80px 40px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main footer row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 60,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Left: Logo + CTA */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="8" y="8" width="28" height="5" rx="1" fill="#00d4aa"/>
                <rect x="19" y="8" width="6" height="28" rx="1" fill="#00d4aa"/>
                <rect x="30" y="14" width="5" height="22" rx="1" fill="#00d4aa" opacity="0.35"/>
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  TEKCORP
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.05em",
                    marginTop: 3,
                  }}
                >
                  Empowering Innovation
                </div>
              </div>
            </div>

            {/* Schedule a Call CTA */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px 16px 28px",
                background: "transparent",
                color: "white",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.95rem",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: 50,
                textDecoration: "none",
                transition: "all 0.25s ease",
                maxWidth: 240,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--teal)";
                e.currentTarget.style.background = "rgba(0,212,170,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Schedule a Call
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          </div>

          {/* Center: Contact Us */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 28,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a
                href="tel:+573006702491"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                  </svg>
                </div>
                +57 300 670 2491
              </a>
              <a
                href="mailto:tekcorp@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                  </svg>
                </div>
                tekcorp@gmail.com
              </a>
            </div>
          </div>

          {/* Right: Badges */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 28,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontSize: "0.8rem",
              }}
            >
              Badges
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "center",
              }}
            >
              {/* Google Rating */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                >
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}> Rating</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <strong style={{ color: "white", fontFamily: "var(--font-heading)" }}>5.0</strong>
                  <span style={{ color: "#f59e0b", fontSize: "0.8rem" }}>★★★★★</span>
                </div>
              </div>

              {/* Clutch */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "#e31b23",
                }}
              >
                Clutch
              </div>

              {/* Award */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a3a5c, #2563eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                🏆
              </div>

              {/* GDPR */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.45rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                GDPR
              </div>

              {/* Meta Verified */}
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)" }}>∞ meta</span>
                <span
                  style={{
                    background: "#1877f2",
                    color: "white",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: 4,
                  }}
                >
                  ✓ Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2024 TekCorp LLC. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}