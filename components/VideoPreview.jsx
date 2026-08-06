"use client";

import { useState, useRef, useEffect } from "react";

export default function VideoPreview() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) x.target.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      if (ref.current) obs.unobserve(ref.current);
    };
  }, []);

  return (
    <section style={{ background: "var(--bg)", padding: "0 0 72px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          ref={ref}
          className="sr"
          style={{
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 16px 56px rgba(0,0,0,0.09)",
            border: "2px solid rgba(0,212,170,0.18)",
            position: "relative",
            cursor: playing ? "default" : "pointer",
            background: "#000",
          }}
          onClick={() => {
            if (!playing) setPlaying(true);
          }}
        >
          {playing ? (
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                title="TekCorp Tech Showcase"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                paddingBottom: "46%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* VR User Outdoors Under Sky Image Preview */}
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200"
                alt="VR Technology Preview"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay with Play Button */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.25)",
                  transition: "background 0.3s",
                }}
              >
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--teal, #00d6a4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.88)";
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="var(--text, #0f172a)"
                    style={{ marginLeft: 4 }}
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`@media(max-width:480px){section>div{padding:0 16px!important;}}`}</style>
    </section>
  );
}