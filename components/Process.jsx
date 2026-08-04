"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Discovery",
    desc: "Understanding business needs and project goals.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    title: "Strategy",
    desc: "Creating a roadmap for development.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Development",
    desc: "Building digital platforms using modern technologies.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Launch & Optimization",
    desc: "Improving performance after launch.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".process-card").forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 120);
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
        padding: "0 40px 100px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          How We{" "}
          <span style={{ color: "var(--text-dark)" }}>Deliver</span>{" "}
          <span style={{ color: "#aaa" }}>Projects</span>
        </h2>

        {/* Step cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            position: "relative",
          }}
          className="process-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: 26,
              left: "12.5%",
              right: "12.5%",
              height: 2,
              background: "linear-gradient(90deg, var(--teal) 0%, var(--teal) 100%)",
              zIndex: 0,
              opacity: 0.2,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="process-card"
              style={{
                background: "white",
                border: "1.5px solid var(--border-light)",
                borderRadius: 20,
                padding: "32px 28px",
                opacity: 0,
                transform: "translateY(24px)",
                transition: "all 0.5s ease",
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "var(--teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border-light)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "var(--text-dark)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-medium)",
                  lineHeight: 1.65,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}