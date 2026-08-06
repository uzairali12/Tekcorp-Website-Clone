"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const items = [
  {
    n: "01",
    t: "Outdated Websites That Fail To Convert",
    desc: "Legacy web designs lose up to 70% of potential leads due to poor mobile optimization, slow load times, and confusing UI/UX. TekCorp rebuilds high-converting digital storefronts tailored to turn traffic into revenue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    alt: "Analytics dashboard showing web conversion rates",
  },
  {
    n: "02",
    t: "Manual Processes That Reduce Efficiency",
    desc: "Repetitive daily workflows drain employee capacity and introduce costly human errors. We automate back-office operations and integrate intelligent CRM & ERP software.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    alt: "Team optimizing operational workflows",
  },
  {
    n: "03",
    t: "Limited Visibility In Search Engines",
    desc: "If your target audience can't find you on page one, your competitors win by default. Our technical SEO and content architectures elevate your organic visibility.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    alt: "Search Engine Optimization research and analytics",
  },
  {
    n: "04",
    t: "Inconsistent Brand Presentation",
    desc: "Fragmented design language across touchpoints weakens customer trust. We deliver cohesive brand design systems and digital asset guidelines that stand out.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    alt: "Brand identity design system workspace",
  },
  {
    n: "05",
    t: "Digital Platforms That Cannot Scale",
    desc: "Architectural debt and monolithic web setups fail under heavy traffic spikes. We build resilient cloud-native infrastructures capable of handling rapid user expansion.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    alt: "Scalable cloud server architecture diagram",
  },
];

export default function PainPoints() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".sr, .sr-l, .sr-r").forEach((el) => {
              el.classList.add("in");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - Title & Interactive List */}
          <div className="lg:col-span-6 sr-l">
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-8">
              Many Businesses{" "}
              <span className="text-slate-400">Struggle</span>
              <br />
              with Digital Growth
            </h2>

            <div
              role="tablist"
              aria-label="Business pain points"
              className="space-y-3"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {items.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.n}
                    id={`painpoint-tab-${index}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`painpoint-panel-${index}`}
                    onClick={() => setActive(index)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? "bg-[#00d4aa] border-[#00d4aa] text-slate-900 shadow-md shadow-[#00d4aa]/20 translate-x-1"
                        : "bg-transparent border-slate-100 text-slate-600 hover:bg-[#f2f9f6] hover:border-[#00d4aa]/30"
                    }`}
                  >
                    <span
                      className={`font-sora font-bold text-sm sm:text-base min-w-[28px] transition-colors duration-200 ${
                        isActive ? "text-slate-900/60" : "text-slate-300"
                      }`}
                    >
                      {item.n}
                    </span>
                    <span
                      className={`font-sora text-sm sm:text-base transition-all duration-200 ${
                        isActive ? "font-bold text-slate-900" : "font-medium text-slate-700"
                      }`}
                    >
                      {item.t}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - Dynamic Visual Solution Card */}
          <div className="lg:col-span-6 sr-r space-y-6">
            <div className="space-y-2">
              <p className="text-slate-600 text-base leading-relaxed">
                Companies often face challenges that slow down progress and limit opportunities.
              </p>
              <p className="font-sora font-bold text-base text-slate-900">
                These problems are common — but they are completely solvable.
              </p>
            </div>

            {/* Active Pain Point Card with Dynamic Graphic */}
            <div
              id={`painpoint-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`painpoint-tab-${active}`}
              className="bg-[#e6f9f5] rounded-3xl p-6 sm:p-8 border-l-4 border-[#00d4aa] shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-2"
              key={active}
            >
              {/* Contextual Visual Image with unoptimized prop to prevent Next.js domain errors */}
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-6 shadow-sm border border-[#00d4aa]/20">
                <Image
                  src={items[active].image}
                  alt={items[active].alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={active === 0}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00d4aa]">
                  Issue #{items[active].n}
                </div>
              </div>

              <h3 className="font-sora font-bold text-lg sm:text-xl text-slate-900 mb-3">
                {items[active].t}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {items[active].desc}
              </p>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 pt-2" role="tablist" aria-label="Slide indicators">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to item ${i + 1}`}
                  aria-selected={active === i}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-[#00d4aa]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}