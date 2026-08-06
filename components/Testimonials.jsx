"use client";

import { useRef, useEffect } from "react";

const reviews = [
  {
    stars: 5,
    text: "My website experienced a fatal error, causing one of the pages to become inaccessible. TekCorp LLC, under the expert guidance of their team, resolved the issue swiftly and restored full functionality.",
    name: "Sarah J.",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
  },
  {
    stars: 5,
    text: "I recently hired TekCorp to develop a website and LMS portal for my business, and I couldn't be more satisfied with the results. Their professionalism and technical competence are second to none.",
    name: "Jasmin Row",
    role: "HR Manager, Deutschland",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
  },
  {
    stars: 4,
    text: "Working with TekCorp has been an absolute game-changer for our online presence. They delivered our project ahead of schedule with flawless attention to detail and exceptional support.",
    name: "Noname",
    role: "Deutschland",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= n ? "text-amber-400" : "text-slate-300"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".tc");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-5");
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
      <div
        ref={containerRef}
        className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12"
      >
        {/* Header */}
        <div className="flex flex-wrap justify-between items-start gap-5 mb-11">
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="text-right">
            <div className="font-sora font-black text-xl tracking-tight leading-none">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 mb-1">Reviews</div>
            <div className="flex items-center gap-1.5 justify-end">
              <strong className="font-sora text-sm text-slate-900">5.0</strong>
              <span className="text-amber-400 text-xs">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="tc bg-[#f4f4f4] rounded-2xl p-7 flex flex-col justify-between gap-6 opacity-0 translate-y-5 transition-all duration-450 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <Stars n={r.stars} />
                <p className="text-sm text-slate-600 leading-relaxed mt-3.5">
                  {r.text}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sora font-bold text-sm text-slate-900 mb-0.5">
                    {r.name}
                  </p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>

                {/* Headshot Image */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-200 relative">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}