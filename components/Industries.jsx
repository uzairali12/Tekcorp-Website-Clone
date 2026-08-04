"use client";
import { useEffect, useRef } from "react";

const industries = [
  { label: "Technology", icon: "💻" },
  { label: "Health Care", icon: "🏥" },
  { label: "Professional Services", icon: "💼" },
  { label: "Real Estate", icon: "🏘️" },
  { label: "E-Commerce", icon: "🛒" },
  { label: "Education", icon: "🎓" },
];

const panels = [
  { label: "Technology", icon: "⚙️" },
  { label: "Health Care", icon: "➕" },
  { label: "Professional Services", icon: "💼" },
  { label: "Real Estate", icon: "🏘️" },
  { label: "Education", icon: "🎓" },
];

export default function Industries() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--bg-white)",
        padding: "100px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="industries-grid"
      >
        {/* Left: 5-panel image mosaic */}
        <div className="reveal-left">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 0,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: 340,
            }}
          >
            {panels.map((panel, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: `linear-gradient(180deg, 
                    ${["#c8d8e8", "#d4e8d4", "#e8d4c8", "#e8e4c8", "#c8d4e8"][i]} 0%, 
                    ${["#a8c0d8", "#b4d8b4", "#d8b4a8", "#d8d4a8", "#a8b4d8"][i]} 100%)`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.flex = "1.5")}
                onMouseLeave={(e) => (e.currentTarget.style.flex = "1")}
              >
                {/* add image of industry professional dash */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "12px 8px",
                    background: "rgba(255,255,255,0.92)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                    }}
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      color: "var(--text-dark)",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {panel.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text content */}
        <div className="reveal-right">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.03em",
              color: "var(--text-dark)",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Technology Solutions
            <br />
            Across{" "}
            <span style={{ color: "#aaa" }}>Multiple Industries</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-medium)",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            We work with organizations across different industries, helping them build stronger digital platforms and modern online experiences.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-medium)",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Every project begins with understanding the unique needs of each industry.
          </p>

          {/* Industry checklist grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "14px 20px",
            }}
          >
            {industries.map((ind, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--text-dark)",
                  }}
                >
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}