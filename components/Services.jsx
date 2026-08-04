"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "AI Solutions",
    subtitle: "Smart systems are designed to automate operations and improve efficiency",
    desc1: "Businesses rely on intelligent tools to streamline workflows and enhance customer interactions.",
    desc2: "Our AI solutions help companies simplify processes and operate more effectively.",
    italic: "Technology designed for smarter business operations.",
    tags: ["AI Automation", "AI Agents", "AI Chatbots", "CRM Automation", "Custom AI Development"],
  },
  {
    title: "Website & Software Development",
    subtitle: "Reliable platforms are built for performance and scalability.",
    desc1: "A modern website or software platform is essential for building a strong digital presence.",
    desc2: "Our development team builds secure and scalable systems designed to support business growth.",
    italic: "Digital platforms are built for reliability and performance.",
    tags: ["WordPress Development", "Shopify Development", "Custom Website Development", "Software Development"],
  },
  {
    title: "Search Engine Optimization",
    subtitle: "Helping businesses appear where customers are searching.",
    desc1: "Search visibility plays a major role in digital success. Our SEO strategies focus on improving rankings, increasing traffic, and strengthening online presence.",
    desc2: null,
    italic: "More visibility leads to stronger opportunities.",
    tags: ["Technical SEO", "On-Page Optimization", "Local SEO", "Content Optimization", "SEO Strategy"],
  },
  {
    title: "Branding & Design",
    subtitle: "A strong brand builds recognition and trust.",
    desc1: "Our design team creates visual identities that help businesses communicate clearly and stand out in competitive markets.",
    desc2: null,
    italic: "A brand that reflects the strength of your business.",
    tags: ["Logo Design", "UI / UX Design", "Brand Identity Development", "Design Systems"],
  },
  {
    title: "EdTech Platform Development",
    subtitle: "Digital learning platforms designed for modern education.",
    desc1: "Education organizations require reliable systems to deliver engaging online learning experiences.",
    desc2: "We develop scalable platforms designed for accessibility and performance.",
    italic: null,
    tags: [],
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".service-card").forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 100);
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
        background: "var(--bg-primary)",
        padding: "80px 40px 100px",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto 64px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            marginBottom: 16,
          }}
        >
          Digital Services Designed
          <br />
          for <span style={{ color: "#aaa" }}>Modern Businesses</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--text-medium)",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          We combine technology, strategy, and design to build digital systems that deliver measurable results.
        </p>
      </div>

      {/* Services grid */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
        className="services-grid"
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card"
            style={{
              background: "white",
              borderRadius: 20,
              padding: "36px 32px",
              border: "1.5px solid var(--border-light)",
              transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: 0,
              transform: "translateY(24px)",
              gridColumn: i === 4 ? "1 / -1" : "auto",
              maxWidth: i === 4 ? "50%" : "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "var(--teal)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "var(--border-light)";
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.3rem",
                color: "var(--text-dark)",
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              {service.title.split(" ").map((word, wi) => {
                // Apply italic styling to middle word
                const italicWords = ["Engine", "Software", "&", "Platform"];
                return italicWords.includes(word) ? (
                  <span key={wi} style={{ fontStyle: "italic", color: "#555" }}>{word} </span>
                ) : (
                  <span key={wi}>{word} </span>
                );
              })}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: "var(--text-dark)",
                marginBottom: 12,
              }}
            >
              {service.subtitle}
            </p>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "var(--text-medium)",
                lineHeight: 1.65,
                marginBottom: service.desc2 ? 8 : 12,
              }}
            >
              {service.desc1}
            </p>

            {service.desc2 && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "var(--text-medium)",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                {service.desc2}
              </p>
            )}

            {service.italic && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "var(--text-dark)",
                  fontStyle: "italic",
                  fontWeight: 500,
                  marginBottom: 20,
                }}
              >
                {service.italic}
              </p>
            )}

            {service.tags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "var(--teal)",
                      color: "var(--text-dark)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "5px 14px",
                      borderRadius: 50,
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--teal-dark)";
                      e.currentTarget.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--teal)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--teal)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,212,170,0.35)",
          zIndex: 999,
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,212,170,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,212,170,0.35)";
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .service-card {
            max-width: 100% !important;
            grid-column: auto !important;
          }
        }
      `}</style>
    </section>
  );
}