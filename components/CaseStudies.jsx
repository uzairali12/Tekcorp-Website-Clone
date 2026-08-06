"use client";
import { useRef, useEffect } from "react";

const cases = [
  {
    title: "Empowering Brands Through Mobile-First Digital Transformation",
    category: "Mobile & Web App",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Development team collaborating around screens in a modern tech office",
    delayClass: "d1",
    href: "#",
  },
  {
    title: "Enterprise Workflow Automation & Scalable Cloud Migration",
    category: "SaaS & Automation",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    alt: "Software engineers discussing system architecture in front of monitors",
    delayClass: "d2",
    href: "#",
  },
  {
    title: "High-Scale E-Commerce & Omnichannel Digital Platform",
    category: "UI/UX & Platform",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    alt: "Digital agency strategy team analyzing dashboard analytics on screen",
    delayClass: "d3",
    href: "#",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".sr").forEach((el) => {
              el.classList.add("in");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section className="bg-[var(--bg-card)] section-padding overflow-hidden">
      <div ref={sectionRef} className="wrap">
        
        {/* SECTION HEADER */}
        <div className="sr grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-14 lg:mb-16 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-[var(--font-h)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
              Our <em className="italic text-[var(--text-muted)] font-normal">Work</em>
            </h2>
            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed max-w-xl">
              Our portfolio includes{" "}
              <strong className="text-[var(--text-dark)] font-bold italic">
                websites, digital platforms, automation systems
              </strong>
              , and branding projects developed for growth-driven businesses across multiple industries.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <h3 className="font-[var(--font-h)] font-bold text-xl sm:text-2xl lg:text-3xl text-[var(--text-dark)] leading-snug">
              Each Project Reflects Our Focus On{" "}
              <span className="text-[var(--text-muted)]">
                Usability, Performance, And Measurable Results
              </span>
            </h3>
          </div>
        </div>

        {/* CASE STUDY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`sr ${item.delayClass} group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--bg-dark)] shadow-[var(--shadow-md)] border border-[var(--border-subtle)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)] hover:border-[var(--border-light)]`}
            >
              <a href={item.href} className="block relative w-full h-[400px] sm:h-[440px] overflow-hidden">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
                />

                {/* Subtle Tech Overlay Grid Pattern */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-[var(--bg-dark)]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Card Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end z-10 space-y-4">
                  {/* Category Badge */}
                  <span className="inline-block bg-[var(--teal)]/15 border border-[var(--teal)]/30 backdrop-blur-md text-[var(--teal)] font-[var(--font-h)] font-semibold text-xs px-3.5 py-1.5 rounded-full w-fit">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h4 className="font-[var(--font-h)] font-bold text-lg sm:text-xl text-white leading-snug group-hover:text-[var(--teal)] transition-colors duration-200">
                    {item.title}
                  </h4>

                  {/* Action Link */}
                  <div>
                    <span className="inline-flex items-center gap-2 bg-white/10 group-hover:bg-white text-white group-hover:text-[var(--text-dark)] font-[var(--font-h)] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-white/20 group-hover:border-white backdrop-blur-sm transition-all duration-300">
                      <span>View Case Study</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}