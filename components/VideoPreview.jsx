"use client";
import { useState, useRef, useEffect } from "react";

export default function VideoPreview() {
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
      style={{
        background: "var(--bg-primary)",
        padding: "20px 40px 80px",
      }}
    >
      <div
        ref={sectionRef}
        className="reveal"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          border: "2px solid rgba(0,212,170,0.2)",
          cursor: "pointer",
        }}
        onClick={() => setPlaying(!playing)}
      >
        {/* Video placeholder image */}
        {/* add image of VR woman with sky background dash */}
        <div
          style={{
            width: "100%",
            paddingBottom: "52%",
            position: "relative",
            background: "linear-gradient(135deg, #87ceeb 0%, #b0d4e8 40%, #d4eaf4 100%)",
            overflow: "hidden",
          }}
        >
          {/* Placeholder for the VR woman image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #87CEEB 0%, #a8d8ea 50%, #d4eaf4 100%)",
            }}
          >
            {/* Background sky/clouds decoration */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(ellipse 200px 80px at 30% 40%, rgba(255,255,255,0.6) 0%, transparent 70%), radial-gradient(ellipse 150px 60px at 70% 30%, rgba(255,255,255,0.5) 0%, transparent 60%)",
              }}
            />
            <p style={{ color: "rgba(0,0,0,0.3)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
              {/* add image of VR woman with sky background */}
            </p>
          </div>

          {/* Play button overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: playing ? "transparent" : "rgba(0,0,0,0.08)",
              transition: "background 0.3s ease",
            }}
          >
            {!playing && (
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  transition: "all 0.2s ease",
                  animation: "float 3s ease-in-out infinite",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.background = "var(--teal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="var(--text-dark)"
                  style={{ marginLeft: 4 }}
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}