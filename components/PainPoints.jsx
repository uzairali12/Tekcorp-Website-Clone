"use client";
import { useState, useEffect, useRef } from "react";

const painPoints = [
  { num: "01", text: "Outdated Websites That Fail To Convert" },
  { num: "02", text: "Manual Processes That Reduce Efficiency" },
  { num: "03", text: "Limited Visibility In Search Engines" },
  { num: "04", text: "Inconsistent Brand Presentation" },
  { num: "05", text: "Digital Platforms That Cannot Scale" },
];

export default function PainPoints() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Auto-cycle through pain points
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % painPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
          alignItems: "start",
        }}
        className="pain-grid"
      >
        {/* Left: Heading */}
        <div className="reveal-left">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-dark)",
              marginBottom: 32,
            }}
          >
            Many Businesses{" "}
            <span style={{ color: "#aaa" }}>Struggle</span>
            <br />
            with Digital Growth
          </h2>

          {/* Pain point list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {painPoints.map((point, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "20px 24px",
                  borderRadius: active === i ? 14 : 0,
                  background: active === i ? "var(--teal)" : "transparent",
                  borderBottom: active === i ? "none" : "1px solid #eee",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  marginBottom: active === i ? 4 : 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: active === i ? "rgba(0,0,0,0.4)" : "#ccc",
                    minWidth: 28,
                    transition: "color 0.3s ease",
                  }}
                >
                  {point.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: active === i ? 700 : 500,
                    fontSize: active === i ? "1.05rem" : "1rem",
                    color: active === i ? "var(--text-dark)" : "var(--text-medium)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Description */}
        <div
          className="reveal-right"
          style={{ paddingTop: 8 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--text-medium)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Companies often face challenges that slow down progress and limit opportunities.
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--text-dark)",
            }}
          >
            These problems are common — but they are solvable.
          </p>

          {/* Detail panel for active item */}
          <div
            style={{
              marginTop: 48,
              padding: "32px",
              background: "var(--teal-light)",
              borderRadius: 20,
              borderLeft: "4px solid var(--teal)",
              transition: "all 0.4s ease",
              animation: "fadeIn 0.4s ease",
            }}
            key={active}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "3rem",
                color: "var(--teal)",
                opacity: 0.3,
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              {painPoints[active].num}
            </div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "var(--text-dark)",
                marginBottom: 12,
              }}
            >
              {painPoints[active].text}
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-medium)",
                lineHeight: 1.7,
              }}
            >
              This is one of the most common obstacles businesses face in their digital transformation journey. TekCorp delivers targeted solutions designed to eliminate this bottleneck and accelerate your growth.
            </p>
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            {painPoints.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: active === i ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: active === i ? "var(--teal)" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .pain-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}