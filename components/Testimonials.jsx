"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    stars: 5,
    text: "My website experienced a fatal error, causing one of the pages to become inaccessible. TekCorp LLC, under the expert guidance...",
    name: "Sarah J.",
    role: "CEO",
    initials: "SJ",
    color: "#8b6c5c",
  },
  {
    stars: 5,
    text: "I recently hired TekCorp to develop a website and LMS portal for my business, and I couldn't be more satisfied with the results...",
    name: "Jasmin Row",
    role: "HR Manager, Deutschland",
    initials: "JR",
    color: "#5c6b7a",
  },
  {
    stars: 4,
    text: "My website experienced a fatal error, causing one of the pages to become inaccessible. TekCorp LLC, under the expert guidance...",
    name: "Noname",
    role: "Deutschland",
    initials: "NN",
    color: "#7a5c6b",
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i <= count ? "#f59e0b" : "#e5e7eb"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".testimonial-card").forEach((card, i) => {
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
        padding: "60px 40px 100px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.03em",
              color: "var(--text-dark)",
            }}
          >
            What Our Clients Say
          </h2>

          {/* Google badge */}
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.4rem",
                letterSpacing: "-0.01em",
              }}
            >
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: 4 }}>Reviews</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <strong style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>5.0</strong>
              <span style={{ color: "#f59e0b" }}>★★★★★</span>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                background: "#f5f5f5",
                borderRadius: 20,
                padding: "32px",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.5s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 24,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <StarRating count={t.stars} />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--text-medium)",
                    lineHeight: 1.7,
                    marginTop: 16,
                  }}
                >
                  {t.text}
                </p>
              </div>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--text-dark)",
                      marginBottom: 4,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      color: "var(--text-light)",
                    }}
                  >
                    {t.role}
                  </p>
                </div>

                {/* Avatar placeholder */}
                {/* add image of client photo headshot dash */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: t.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{
                width: currentPage === i ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: currentPage === i ? "var(--teal)" : "#ddd",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}