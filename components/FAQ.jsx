"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "What services do TekCorp provide?",
    a: "We provide end-to-end digital engineering including AI automation systems, custom web platform development, high-converting SEO architectures, cohesive brand design systems, and specialized EdTech solutions.",
  },
  {
    q: "Do you develop custom solutions?",
    a: "Yes, every system we build is custom-architected to align with your exact business processes and growth objectives. We avoid rigid templates and one-size-fits-all software.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope and feature complexity. A high-converting corporate website typically takes 4–8 weeks, while complex web applications or SaaS platforms require 2–6 months. We deliver a milestone-based timeline during discovery.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer structured post-launch support and maintenance SLAs to continuously optimize platform performance, manage security updates, and scale system capacity as your business grows.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpen((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-[#f2f9f6] py-20 lg:py-28 overflow-hidden">
      <div ref={sectionRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked <span className="text-slate-400">Questions</span>
        </h2>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const buttonId = `faq-btn-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              /* SCROLL REVEAL WRAPPER (Decoupled from Accordion State) */
              <div
                key={i}
                style={{ transitionDelay: isVisible ? `${i * 90}ms` : "0ms" }}
                className={`transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                {/* ACCORDION CARD CONTAINER */}
                <div
                  className={`fi rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#00d4aa] shadow-lg shadow-[#00d4aa]/10 ring-1 ring-[#00d4aa]/30"
                      : "bg-white/80 hover:bg-white border-transparent hover:border-slate-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center px-6 py-5 sm:px-8 sm:py-6 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa] rounded-2xl transition-colors duration-200"
                  >
                    <span
                      className={`font-sora text-base sm:text-lg leading-snug transition-colors duration-200 ${
                        isOpen ? "font-bold text-slate-900" : "font-semibold text-slate-700"
                      }`}
                    >
                      {faq.q}
                    </span>

                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#00d4aa] text-slate-900 shadow-md shadow-[#00d4aa]/30"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* ANIMATED ACCORDION CONTENT */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}