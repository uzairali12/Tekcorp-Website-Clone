"use client";

import { useRef, useEffect } from "react";

const services = [
  {
    title: "AI Solutions",
    sub: "Smart systems are designed to automate operations and improve efficiency",
    body: [
      "Businesses rely on intelligent tools to streamline workflows and enhance customer interactions.",
      "Our AI solutions help companies simplify processes and operate more effectively.",
    ],
    italic: "Technology designed for smarter business operations.",
    tags: [
      "AI Automation",
      "AI Agents",
      "AI Chatbots",
      "CRM Automation",
      "Custom AI Development",
    ],
  },
  {
    title: "Website & Software Development",
    sub: "Reliable platforms are built for performance and scalability.",
    body: [
      "A modern website or software platform is essential for building a strong digital presence.",
      "Our development team builds secure and scalable systems designed to support business growth.",
    ],
    italic: "Digital platforms are built for reliability and performance.",
    tags: [
      "WordPress Development",
      "Shopify Development",
      "Custom Website Development",
      "Software Development",
    ],
  },
  {
    title: "Search Engine Optimization",
    sub: "Helping businesses appear where customers are searching.",
    body: [
      "Search visibility plays a major role in digital success. Our SEO strategies focus on improving rankings, increasing traffic, and strengthening online presence.",
    ],
    italic: "More visibility leads to stronger opportunities.",
    tags: [
      "Technical SEO",
      "On-Page Optimization",
      "Local SEO",
      "Content Optimization",
      "SEO Strategy",
    ],
  },
  {
    title: "Branding & Design",
    sub: "A strong brand builds recognition and trust.",
    body: [
      "Our design team creates visual identities that help businesses communicate clearly and stand out in competitive markets.",
    ],
    italic: "A brand that reflects the strength of your business.",
    tags: [
      "Logo Design",
      "UI / UX Design",
      "Brand Identity Development",
      "Design Systems",
    ],
  },
  {
    title: "EdTech Platform Development",
    sub: "Digital learning platforms designed for modern education.",
    body: [
      "Education organizations require reliable systems to deliver engaging online learning experiences.",
      "We develop scalable platforms designed for accessibility and performance.",
    ],
    italic: "Technology built to support digital learning.",
    tags: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Education Mobile Apps",
      "Custom EdTech Solutions",
    ],
    wide: true,
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-6");
              }, index * 90);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Digital Services Designed <br className="hidden sm:inline" />
            for <span className="text-slate-400 font-bold">Modern Businesses</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            We combine technology, strategy, and design to build digital systems that deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#00d6a4] opacity-0 translate-y-6 ${
                service.wide ? "md:col-span-2 md:max-w-[calc(50%-12px)]" : ""
              }`}
            >
              <h3 className="font-sora font-bold text-xl sm:text-2xl text-slate-900 tracking-tight mb-3">
                {service.title}
              </h3>

              <p className="font-sora font-semibold text-sm sm:text-base text-slate-800 mb-3 leading-snug">
                {service.sub}
              </p>

              {service.body.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 last:mb-4"
                >
                  {paragraph}
                </p>
              ))}

              {service.italic && (
                <p className="text-slate-500 text-sm sm:text-base italic font-medium mb-6">
                  {service.italic}
                </p>
              )}

              {service.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#00d6a4] text-slate-900 font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-[#00c093] cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}