"use client";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l2 2 4-4" />
        <path d="M9 7l1.5 1.5M12 6v1M15 7l-1.5 1.5" />
      </svg>
    ),
    title: "Strategic Thinking",
    desc: "Every project begins with understanding your business goals and identifying opportunities for improvement.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Tailored Solutions",
    desc: "Our digital solutions are designed specifically for each organization.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Modern Technologies",
    desc: "We build platforms using reliable technologies designed for performance and scalability.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.8">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    title: "Long-Term Growth Focus",
    desc: "Our solutions are created to support sustainable growth.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".why-card").forEach((card, i) => {
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
        background: "var(--bg-primary)",
        padding: "100px 40px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          Why Business Choose{" "}
          <span style={{ color: "#555" }}>Tekcorp</span>
        </h2>

        {/* 2x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid var(--border-light)",
            borderRadius: 24,
            overflow: "hidden",
          }}
          className="why-grid"
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="why-card"
              style={{
                padding: "52px 48px",
                borderRight: i % 2 === 0 ? "1px solid var(--border-light)" : "none",
                borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
                background: "white",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.5s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--teal-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  transition: "all 0.2s ease",
                }}
                className="icon-container"
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  color: "var(--text-dark)",
                  marginBottom: 14,
                  letterSpacing: "-0.02em",
                }}
              >
                {/* Bold first word, light rest */}
                {reason.title.split(" ").map((word, wi, arr) => {
                  const lightWords = ["Solutions", "Technologies", "Focus"];
                  return lightWords.includes(word) ? (
                    <span key={wi} style={{ color: "#aaa" }}>{word}{wi < arr.length - 1 ? " " : ""}</span>
                  ) : (
                    <span key={wi}>{word}{wi < arr.length - 1 ? " " : ""}</span>
                  );
                })}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "var(--text-medium)",
                  lineHeight: 1.7,
                  maxWidth: 380,
                }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-card {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
          }
        }
      `}</style>
    </section>
  );
}