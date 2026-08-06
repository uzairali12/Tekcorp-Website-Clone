"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    projectDetails: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = heroRef.current?.querySelectorAll(".sr, .sr-l, .sr-r");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Quote Request:", formData);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#f2f9f6] overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#00d4aa]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-[600px] h-[600px] bg-[#00d4aa]/05 rounded-full blur-3xl" />
      </div>

      {/* ✅ FIXED: removed max-w cap, now full-width with padding */}
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 space-y-8">
            <div className="sr d1">
              <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-[4.2rem] text-slate-900 leading-[1.08] tracking-tight">
                Build{" "}
                <span className="bg-[#00d4aa] text-slate-900 px-3 py-1 rounded-xl inline-block my-1 shadow-sm">
                  Digital Systems
                </span>{" "}
                That <br className="hidden sm:inline" />
                Power <span className="text-slate-900">Business Growth</span>
              </h1>
            </div>

            <div className="sr d2 space-y-4 max-w-2xl">
              <p className="font-sora font-bold text-lg sm:text-xl text-slate-800 leading-snug">
                Technology should move your business forward — not slow it down.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At TekCorp, we design and develop digital platforms that help
                businesses automate operations, strengthen their online presence,
                and scale confidently.
              </p>
            </div>

            <div className="sr d3 pt-2">
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-[#e4ece8] shadow-sm">
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-5">
                  More than <span className="text-[#00d4aa] font-bold">100+</span> Companies partner
                </p>
                <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-10">

  <div className="relative w-[170px] h-[70px] shrink-0 transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/goo.png"
      alt="Google 5.0 Rating Badge"
      fill
      className="object-contain object-center"
    />
  </div>

  <div className="relative w-[170px] h-[70px] shrink-0 transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/clutchnew.png"
      alt="Clutch Leader Badge"
      fill
      className="object-contain object-center"
    />
  </div>

  <div className="relative w-[170px] h-[70px] shrink-0 transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/tsdc.png"
      alt="Top Software Development Company Badge"
      fill
      className="object-contain object-center"
    />
  </div>

  <div className="relative w-[170px] h-[70px] shrink-0 transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/metahero.png"
      alt="Meta Verified Partner Badge"
      fill
      className="object-contain object-center"
    />
  </div>

  <div className="relative w-[170px] h-[70px] shrink-0 transition-transform duration-300 hover:scale-105">
    <Image
      src="/assets/gdpr.png"
      alt="GDPR Compliant Badge"
      fill
      className="object-contain object-center"
    />
  </div>

</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 sr-r d2">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#e4ece8] transition-all duration-300 hover:shadow-3xl">
              <h3 className="font-sora font-bold text-xl sm:text-2xl text-slate-900 mb-6 leading-snug">
                Helping businesses build smarter digital ecosystems.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full bg-[#f2f9f6] border border-transparent focus:border-[#00d4aa] focus:bg-white focus:ring-2 focus:ring-[#00d4aa]/20 rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-200" />
                  <input type="tel" name="phone" placeholder="+01 3254 547 780" value={formData.phone} onChange={handleChange} className="w-full bg-[#f2f9f6] border border-transparent focus:border-[#00d4aa] focus:bg-white focus:ring-2 focus:ring-[#00d4aa]/20 rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full bg-[#f2f9f6] border border-transparent focus:border-[#00d4aa] focus:bg-white focus:ring-2 focus:ring-[#00d4aa]/20 rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-200" />
                  <input type="text" name="service" placeholder="Services" value={formData.service} onChange={handleChange} className="w-full bg-[#f2f9f6] border border-transparent focus:border-[#00d4aa] focus:bg-white focus:ring-2 focus:ring-[#00d4aa]/20 rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-200" />
                </div>
                <textarea name="projectDetails" rows={4} placeholder="Project Details" value={formData.projectDetails} onChange={handleChange} className="w-full bg-[#f2f9f6] border border-transparent focus:border-[#00d4aa] focus:bg-white focus:ring-2 focus:ring-[#00d4aa]/20 rounded-xl px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-200 resize-none" />
                <button type="submit" className="w-full bg-[#00d4aa] hover:bg-[#00b894] text-slate-900 font-sora font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-[#00d4aa]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                  Get Custom Development Quote
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}