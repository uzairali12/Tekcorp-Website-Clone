"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Staggered entrance animations
    const elements = heroRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        alignItems: "center",
        padding: "100px 40px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0,212,170,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(0,212,170,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: Headline & Content */}
        <div>
          <h1
            className="hero-animate"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-dark)",
              marginBottom: 28,
            }}
          >
            Build{" "}
            <span
              style={{
                background: "var(--teal)",
                padding: "2px 10px 4px",
                borderRadius: 6,
                color: "var(--text-dark)",
              }}
            >
              Digital Systems
            </span>{" "}
            That
            <br />
            Power{" "}
            <span style={{ color: "#aaa" }}>Business Growth</span>
          </h1>

          <p
            className="hero-animate"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: "var(--text-dark)",
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            Technology should move your business forward — not slow it down.
          </p>

          <p
            className="hero-animate"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-medium)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            At TekCorp, we design and develop digital platforms that help businesses automate operations, strengthen their online presence, and scale confidently.
          </p>

          {/* Trust badges row */}
          <div
            className="hero-animate"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--text-medium)",
                fontWeight: 500,
              }}
            >
              More than{" "}
              <strong style={{ color: "var(--teal)", fontWeight: 700 }}>100+</strong>{" "}
              Companies partner
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              {/* Google Rating */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.75rem",
                    color: "#4285F4",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                  }}
                >
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                  {" "}Rating
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <strong style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1rem" }}>5.0</strong>
                  <span style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★★★★★</span>
                </div>
              </div>

              {/* Clutch */}
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: "#e31b23",
                  letterSpacing: "-0.02em",
                }}
              >
                Clutch
              </div>

              {/* Award badge placeholder */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a3a5c, #2563eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                🏆
              </div>

              {/* Meta Verified */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: "0.7rem", color: "#555" }}>meta</span>
                <span
                  style={{
                    background: "#1877f2",
                    color: "white",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  ✓ Verified
                </span>
              </div>

              {/* GDPR */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "2px solid #1a3a5c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  color: "#1a3a5c",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                GDPR
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form Card */}
        <div
          className="hero-animate"
          style={{
            background: "white",
            borderRadius: 24,
            padding: "40px 36px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            border: "1px solid var(--border-light)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "var(--text-dark)",
              marginBottom: 28,
              lineHeight: 1.3,
            }}
          >
            Helping businesses build smarter digital ecosystems.
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  background: "#f0f4f2",
                  border: "1.5px solid transparent",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-dark)",
                  outline: "none",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--teal)";
                  e.target.style.background = "white";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,212,170,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "transparent";
                  e.target.style.background = "#f0f4f2";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="tel"
                placeholder="+01 3254 547 780"
                style={{
                  background: "#f0f4f2",
                  border: "1.5px solid transparent",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-dark)",
                  outline: "none",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--teal)";
                  e.target.style.background = "white";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,212,170,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "transparent";
                  e.target.style.background = "#f0f4f2";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  background: "#f0f4f2",
                  border: "1.5px solid transparent",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-dark)",
                  outline: "none",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--teal)";
                  e.target.style.background = "white";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,212,170,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "transparent";
                  e.target.style.background = "#f0f4f2";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="text"
                placeholder="Services"
                style={{
                  background: "#f0f4f2",
                  border: "1.5px solid transparent",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-dark)",
                  outline: "none",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--teal)";
                  e.target.style.background = "white";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,212,170,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "transparent";
                  e.target.style.background = "#f0f4f2";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Project Details"
              rows={4}
              style={{
                background: "#f0f4f2",
                border: "1.5px solid transparent",
                borderRadius: 12,
                padding: "14px 18px",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-dark)",
                outline: "none",
                transition: "all 0.2s ease",
                resize: "none",
                width: "100%",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--teal)";
                e.target.style.background = "white";
                e.target.style.boxShadow = "0 0 0 3px rgba(0,212,170,0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "transparent";
                e.target.style.background = "#f0f4f2";
                e.target.style.boxShadow = "none";
              }}
            />

            {/* Submit Button */}
            <button
              style={{
                width: "100%",
                background: "var(--teal)",
                color: "var(--text-dark)",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "18px 24px",
                borderRadius: 14,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--teal-dark)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,212,170,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--teal)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Custom Development Quote
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}