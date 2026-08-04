"use client";
import { useEffect, useRef } from "react";

const impacts = [
  "More efficient digital operations",
  "Improved search visibility",
  "Better customer engagement",
  "Scalable platforms for future growth",
  "Streamlined workflows and automation",
];

export default function Impact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
            entry.target.querySelectorAll(".impact-item").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
              }, 150 + i * 100);
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
        background: "var(--bg-primary)",
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
        className="impact-grid"
      >
        {/* Left: Text content */}
        <div className="reveal-left">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "var(--text-dark)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            What the{" "}
            <span
              style={{
                background: "var(--teal)",
                padding: "2px 10px 4px",
                borderRadius: 6,
                color: "var(--text-dark)",
              }}
            >
              Right Digital
            </span>
            <br />
            Systems Can Achieve
          </h2>

          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text-medium)",
              fontStyle: "italic",
              marginBottom: 32,
            }}
          >
            Organizations working with TekCorp often experience:
          </p>

          <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {impacts.map((item, i) => (
              <li
                key={i}
                className="impact-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  opacity: 0,
                  transform: "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <span
                  style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--teal-light)",
                    border: "2px solid var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    color: "var(--teal-dark)",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "var(--text-medium)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: Image with overlay quote */}
        <div className="reveal-right" style={{ position: "relative" }}>
          {/* Main image placeholder */}
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            {/* add image of business team working at laptop in office dash */}
            <div
              style={{
                width: "100%",
                paddingBottom: "68%",
                background: "linear-gradient(135deg, #e8f4f0 0%, #d4eee6 100%)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(135deg, #c8e6da 0%, #a8d4c2 50%, #88c2aa 100%)",
                }}
              />
              {/* Placeholder text */}
              <p style={{ color: "rgba(0,0,0,0.2)", fontSize: "0.85rem", zIndex: 1, fontFamily: "var(--font-body)" }}>
                {/* add image of business team working at laptop */}
              </p>
            </div>

            {/* Quote overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px 28px",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--text-dark)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                Our focus is simple — build digital solutions that create measurable impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .impact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}