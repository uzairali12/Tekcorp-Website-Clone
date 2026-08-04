"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(244,250,248,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        padding: "0 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 80,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Teal "T" logo icon */}
          <div
            style={{
              width: 40,
              height: 40,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 8 L20 8 L20 32 L16 32 L16 12 L8 12 Z" fill="#00d4aa"/>
              <path d="M20 8 L32 8 L32 12 L20 12 Z" fill="#00d4aa"/>
              <path d="M28 14 L32 14 L32 32 L28 32 Z" fill="#1a1a2e" opacity="0.3"/>
              <rect x="8" y="8" width="24" height="4" rx="1" fill="#00d4aa"/>
              <rect x="17" y="8" width="6" height="24" rx="1" fill="#00d4aa"/>
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "var(--text-dark)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              TEKCORP
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                color: "var(--text-light)",
                letterSpacing: "0.05em",
                marginTop: 2,
              }}
            >
              Empowering Innovation
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            borderRadius: 50,
            padding: "6px 8px",
            gap: 2,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            border: "1px solid #e8edf0",
          }}
          className="nav-pill-container"
        >
          {/* Home - active */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 50,
              background: "var(--teal)",
              color: "var(--text-dark)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            Home
          </a>

          {/* Our Solutions with dropdown */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 20px",
                borderRadius: 50,
                background: "transparent",
                color: "var(--text-medium)",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.9rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f4faf8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Our Solutions
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transition: "transform 0.2s",
                  transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {solutionsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "white",
                  borderRadius: 16,
                  padding: "12px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  border: "1px solid #e8edf0",
                  minWidth: 220,
                  zIndex: 100,
                  animation: "fadeInUp 0.2s ease",
                }}
              >
                {[
                  "AI Solutions",
                  "Website & Software Development",
                  "Search Engine Optimization",
                  "Branding & Design",
                  "EdTech Platform Development",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      borderRadius: 10,
                      color: "var(--text-medium)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--teal-light)";
                      e.currentTarget.style.color = "var(--teal-dark)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--text-medium)";
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {["Case Studies", "Insights", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: 50,
                background: "transparent",
                color: "var(--text-medium)",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f4faf8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 28px",
            borderRadius: 50,
            background: "transparent",
            color: "var(--text-dark)",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "0.9rem",
            textDecoration: "none",
            border: "2px solid var(--text-dark)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--text-dark)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--text-dark)";
          }}
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            padding: "20px 24px",
            borderTop: "1px solid var(--border-light)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            animation: "fadeInUp 0.2s ease",
          }}
        >
          {["Home", "Our Solutions", "Case Studies", "Insights", "Company"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                padding: "12px 16px",
                color: "var(--text-dark)",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                borderRadius: 10,
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f4faf8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            style={{
              marginTop: 12,
              padding: "14px 24px",
              background: "var(--teal)",
              color: "var(--text-dark)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              borderRadius: 50,
              textAlign: "center",
            }}
          >
            Get Started
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .nav-pill-container { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}