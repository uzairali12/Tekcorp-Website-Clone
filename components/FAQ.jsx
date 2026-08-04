"use client";
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "What services do TekCorp provide?",
    a: "We provide AI automation, web development, SEO services, branding solutions, and EdTech platform development.",
  },
  {
    q: "Do you develop custom solutions?",
    a: "Yes, every solution we build is fully customized to meet the unique needs and goals of your business. We don't offer one-size-fits-all packages.",
  },
  {
    q: "How long does a project take?",
    a: "Project timelines vary based on scope and complexity. A typical website takes 4–8 weeks, while more complex platforms can take 2–6 months. We provide a detailed timeline during discovery.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer ongoing maintenance and support packages to ensure your digital platforms continue to perform at their best after launch.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".faq-item").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
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
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
            color: "var(--text-dark)",
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Frequently Asked{" "}
          <span style={{ color: "#aaa" }}>Questions</span>
        </h2>

        {/* FAQ items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "faq-active" : ""}`}
              style={{
                background: "white",
                borderRadius: 16,
                border: open === i ? "2px solid var(--teal)" : "2px solid transparent",
                overflow: "hidden",
                opacity: 0,
                transform: "translateY(16px)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: open === i ? "0 8px 24px rgba(0,212,170,0.1)" : "none",
              }}
            >
              {/* Question header */}
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 28px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: open === i ? 700 : 500,
                    fontSize: "1rem",
                    color: open === i ? "var(--text-dark)" : "var(--text-medium)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: open === i ? "var(--teal)" : "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={open === i ? "white" : "#666"}
                    strokeWidth="2.5"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--text-medium)",
                    lineHeight: 1.7,
                    padding: "0 28px 24px",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}