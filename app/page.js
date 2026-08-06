"use client";
import { useEffect, useState } from "react";
import "./globals.css"; // Ensure global CSS rules and Tailwind theme are loaded

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoPreview from "../components/VideoPreview";
import PainPoints from "../components/PainPoints";
import QuoteBanner from "../components/QuoteBanner";
import Services from "../components/Services";
import Impact from "../components/Impact";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Page() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Global scroll reveal observer
  useEffect(() => {
    let obs;

    // Small delay ensures child components fully attach to DOM before querying classes
    const timer = setTimeout(() => {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
            }
          });
        },
        { threshold: 0.12 }
      );

      const targets = document.querySelectorAll(".sr, .sr-l, .sr-r");
      targets.forEach((el) => obs.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      if (obs) obs.disconnect();
    };
  }, []);

  // Scroll-to-top button visibility toggle
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <VideoPreview />
        <PainPoints />
        <QuoteBanner />
        <Services />
        <Impact />
        <Industries />
        <WhyChooseUs />
        <CaseStudies />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Scroll to top */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: "var(--teal)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,212,170,0.35)",
          zIndex: 998,
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? "auto" : "none",
          transform: showScrollTop ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          if (showScrollTop) {
            e.currentTarget.style.transform = "translateY(-3px) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,212,170,0.45)";
          }
        }}
        onMouseLeave={(e) => {
          if (showScrollTop) {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,212,170,0.35)";
          }
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}