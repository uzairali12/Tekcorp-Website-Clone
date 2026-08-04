"use client";
import { useEffect, useRef } from "react";

export default function QuoteBanner() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.3 }
    );
    const el = ref.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(el);
    }
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--teal)",
        padding: "60px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      {/* Opening quote */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 40,
          fontSize: "5rem",
          color: "rgba(0,0,0,0.15)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      {/* Closing quote */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 40,
          fontSize: "5rem",
          color: "rgba(0,0,0,0.15)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        &rdquo;
      </div>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
            color: "var(--text-dark)",
            lineHeight: 1.45,
            letterSpacing: "-0.01em",
          }}
        >
          TekCorp helps businesses replace outdated systems with modern digital solutions designed for performance and growth.
        </p>
      </div>
    </section>
  );
}