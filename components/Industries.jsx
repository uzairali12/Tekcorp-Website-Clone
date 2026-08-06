"use client";
import { useRef, useEffect } from "react";

const panels = [
  {
    label: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Health Care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Professional Services",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
];

const checks = ["Technology", "Health Care", "Professional Services", "Real Estate", "E-Commerce", "Education"];

export default function Industries() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((e) => {
      e.forEach((x) => {
        if (x.isIntersecting) x.target.querySelectorAll(".sr,.sr-l,.sr-r").forEach((el) => el.classList.add("in"));
      });
    }, { threshold: 0.15 });

    if (ref.current) obs.observe(ref.current);
    return () => { if (ref.current) obs.unobserve(ref.current); };
  }, []);

  return (
    <section ref={ref} style={{ background: "white", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="ind-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          {/* LEFT — 5-panel mosaic */}
          <div className="sr-l">
            <div style={{
              display: "flex",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 18px 56px rgba(0,0,0,0.10)",
              height: 330,
            }}>
              {panels.map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    position: "relative",
                    overflow: "hidden",
                    background: `linear-gradient(180deg, ${["#b8cfe0", "#c4dece", "#d0c8de", "#dcd8c8", "#c4cede"][i]} 0%, ${["#98b4cc", "#a4c8ae", "#b0a8be", "#bcb8a8", "#a4aebe"][i]} 100%)`,
                    transition: "flex 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.flex = "1.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.flex = "1")}
                >
                  {/* Industry Image */}
                  <img
                    src={item.image}
                    alt={item.label}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.88,
                    }}
                  />

                  {/* Gradient Overlay for Readability */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 60%)",
                  }} />

                  {/* Bottom Label Badge */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "10px 6px",
                    background: "rgba(255,255,255,0.93)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                  }}>
                    <div style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-b)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="sr-r">
            <h2 style={{ fontFamily: "var(--font-h)", fontWeight: 800, fontSize: "clamp(1.8rem,3.2vw,2.6rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 22 }}>
              Technology Solutions<br />Across <span style={{ color: "#aaa" }}>Multiple Industries</span>
            </h2>
            <p style={{ fontSize: "0.97rem", color: "var(--text-mid)", lineHeight: 1.72, marginBottom: 14 }}>
              We work with organizations across different industries, helping them build stronger digital platforms and modern online experiences.
            </p>
            <p style={{ fontSize: "0.97rem", color: "var(--text-mid)", lineHeight: 1.72, marginBottom: 36 }}>
              Every project begins with understanding the unique needs of each industry.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 18px" }}>
              {checks.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "var(--font-h)", fontWeight: 700, fontSize: "0.87rem", color: "var(--text)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .ind-grid{grid-template-columns:1fr!important;gap:40px!important;} }
        @media(max-width:480px){ section>div{padding:0 16px!important;} }
      `}</style>
    </section>
  );
}