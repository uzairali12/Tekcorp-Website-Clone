"use client";

import { useRef, useEffect } from "react";

const steps = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Discovery",
    desc: "Understanding business needs and project goals.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    title: "Strategy",
    desc: "Creating a roadmap for development.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Development",
    desc: "Building digital platforms using modern technologies.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Launch & Optimization",
    desc: "Improving performance after launch.",
  },
];

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".process-card").forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-6");
              }, index * 110);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Section Heading */}
        <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight text-center mb-12 sm:mb-16">
          How We <span className="text-slate-400">Deliver Projects</span>
        </h2>

        {/* Process Cards Grid */}
        <div ref={containerRef} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#00d4aa]/30 via-[#00d4aa] to-[#00d4aa]/30 z-0 pointer-events-none" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card group relative bg-white border border-slate-200 rounded-2xl p-7 z-10 opacity-0 translate-y-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00d4aa]/10 hover:border-[#00d4aa]"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 font-sora font-extrabold text-xs text-slate-300 group-hover:text-[#00d4aa] transition-colors duration-300">
                0{index + 1}
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#00d4aa] text-slate-900 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-sora font-bold text-lg text-slate-900 tracking-tight mb-2 group-hover:text-[#00d4aa] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}