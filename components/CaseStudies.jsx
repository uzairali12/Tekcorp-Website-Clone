"use client";
import { useEffect, useRef } from "react";

const caseStudies = [
  {
    title: "Empowering Brands Through Mobile-First Digital Transformation",
    label: "EdTech",
  },
  {
    title: "Empowering Brands Through Mobile-First Digital Transformation",
    label: "FinTech",
  },
  {
    title: "Empowering Brands Through Mobile-First Digital Transformation",
    label: "Healthcare",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
            entry.target.querySelectorAll(".case-card").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
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
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            marginBottom: 64,
            alignItems: "start",
          }}
          className="case-header reveal"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.03em",
                color: "var(--text-dark)",
                marginBottom: 20,
              }}
            >
              Our <span style={{ fontStyle: "italic", color: "#555" }}>Work</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text-medium)",
                lineHeight: 1.7,
              }}
            >
              Our portfolio includes{" "}
              <em style={{ fontWeight: 700, color: "var(--text-dark)" }}>websites, digital platforms, automation systems</em>
              , and branding projects developed for businesses across multiple industries.
            </p>
          </div>

          {/* Right */}
          <div style={{ paddingTop: 8 }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                color: "var(--text-dark)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Each Project Reflects Our Focus On{" "}
              <span style={{ color: "#aaa" }}>Usability, Performance, And</span>{" "}
              <span style={{ color: "#aaa" }}>Measurable Results</span>
            </h3>
          </div>
        </div>

        {/* Case study cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="case-grid"
        >
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="case-card"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                background: "#1a1a1a",
                opacity: 0,
                transform: "translateY(28px)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image area */}
              {/* add image of case study project workspace with team and screens dash */}
              <div
                style={{
                  width: "100%",
                  paddingBottom: "72%",
                  position: "relative",
                  background: `linear-gradient(
                    ${["135deg, #2c3e50 0%, #4a6fa5 100%", "135deg, #1a2a3a 0%, #2d5a8e 100%", "135deg, #1e3a2e 0%, #2d6e4a 100%"][i]}
                  )`,
                  overflow: "hidden",
                }}
              >
                {/* Decorative monitors/screens in background */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Card overlay content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "white",
                    lineHeight: 1.3,
                    marginBottom: 16,
                  }}
                >
                  {cs.title}
                </p>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background: "transparent",
                    color: "white",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    padding: "10px 20px",
                    borderRadius: 50,
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "var(--text-dark)";
                    e.currentTarget.style.borderColor = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .case-header {
            grid-template-columns: 1fr !important;
          }
          .case-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .case-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}