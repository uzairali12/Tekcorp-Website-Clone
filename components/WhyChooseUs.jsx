"use client";

import { useRef, useEffect } from "react";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M9 12l1.5 1.5L15 9" />
        <path d="M9 7l1.5 1.5M12 6v1M15 7l-1.5 1.5" />
      </svg>
    ),
    title: ["Strategic", "Thinking"],
    light: ["Thinking"],
    desc: "Every project begins with understanding your business goals and identifying opportunities for improvement.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.7">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: ["Tailored", "Solutions"],
    light: ["Solutions"],
    desc: "Our digital solutions are designed specifically for each organization.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: ["Modern", "Technologies"],
    light: ["Technologies"],
    desc: "We build platforms using reliable technologies designed for performance and scalability.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.7">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    title: ["Long-Term", "Growth Focus"],
    light: ["Growth Focus"],
    desc: "Our solutions are created to support sustainable growth.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.querySelectorAll(".wc").forEach((c, i) => {
              setTimeout(() => {
                c.style.opacity = "1";
                c.style.transform = "translateY(0) scale(1)";
              }, i * 130);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      if (ref.current) obs.unobserve(ref.current);
    };
  }, []);

  return (
    <section style={{ background: "var(--bg)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <h2
          style={{
            fontFamily: "var(--font-h)",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Why Business Choose <span style={{ color: "#777" }}>Tekcorp</span>
        </h2>

        <div
          ref={ref}
          className="wc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1.5px solid var(--border)",
            borderRadius: 24,
            overflow: "hidden",
            background: "var(--border)",
            gap: "1.5px", // Creates clean grid borders via background bleeding
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="wc"
              style={{
                padding: "48px 44px",
                background: "white",
                opacity: 0,
                transform: "translateY(28px) scale(0.97)",
                transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--teal-light, #f0fdf4)";
                e.currentTarget.style.transform = "translateY(-6px) scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.zIndex = "2";
                const iconBox = e.currentTarget.querySelector(".wc-icon-box");
                if (iconBox) iconBox.style.transform = "scale(1.1) rotate(6deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.zIndex = "1";
                const iconBox = e.currentTarget.querySelector(".wc-icon-box");
                if (iconBox) iconBox.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <div
                className="wc-icon-box"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 13,
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                  transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-h)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                  color: "var(--text)",
                }}
              >
                {item.title.map((w, wi) => (
                  <span
                    key={wi}
                    style={{
                      color: item.light.includes(w) ? "#aaa" : "var(--text)",
                    }}
                  >
                    {w}
                    {wi < item.title.length - 1 ? " " : ""}
                  </span>
                ))}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.7,
                  maxWidth: 340,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width: 768px) {
          .wc-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5px !important;
          }
        }
        @media(max-width: 480px) {
          section > div {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}