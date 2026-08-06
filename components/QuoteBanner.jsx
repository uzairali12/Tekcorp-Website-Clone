"use client";

import { useRef, useEffect } from "react";

export default function QuoteBanner() {
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = quoteRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#00d6a4] py-14 sm:py-18 lg:py-20 overflow-hidden">
      {/* White Micro-Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.45)_1.2px,transparent_1.2px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      {/* Full-width container positioned across the edges matching reference image */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        <blockquote
          ref={quoteRef}
          className="relative flex items-center justify-between gap-6 sm:gap-10 lg:gap-16 opacity-0 translate-y-6 transition-all duration-700 ease-out"
        >
          {/* Left Quote Mark - Pushed to far left */}
          <div className="shrink-0 text-[#014d40]">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Centered Text - Expanded across available screen width */}
          <p className="flex-1 font-sora font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] text-white text-center leading-snug sm:leading-tight lg:leading-snug tracking-tight">
            TekCorp helps businesses replace outdated systems with modern digital solutions designed for performance and growth.
          </p>

          {/* Right Quote Mark - Pushed to far right */}
          <div className="shrink-0 text-[#014d40]">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rotate-180"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </blockquote>
      </div>
    </section>
  );
}