"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] py-16 lg:py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 items-start">
          
          {/* COLUMN 1: Logo & CTA */}
          <div className="flex flex-col items-start gap-7">
            <div className="relative w-56 h-14 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/assets/whitelogo.png"
                alt="TekCorp - Empowering Innovation"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            <a
              href="#schedule"
              className="group inline-flex items-center justify-between w-full max-w-[240px] pl-6 pr-2 py-2.5 border border-white/20 rounded-full text-sm font-semibold text-white bg-transparent transition-all duration-300 hover:border-[#00d4aa] hover:bg-[#00d4aa]/10 hover:shadow-lg hover:shadow-[#00d4aa]/10 active:scale-[0.98]"
            >
              <span className="tracking-wide">Schedule a Call</span>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#00d4aa] group-hover:text-slate-950 group-hover:rotate-45">
                <svg
                  className="w-4 h-4 stroke-current transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>

          {/* COLUMN 2: Contact Details */}
          <div>
            <h3 className="font-bold text-sm tracking-wide text-white/80 mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+573006702491"
                className="group flex items-center gap-3.5 text-white/80 hover:text-[#00d4aa] text-base font-medium transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-white/60 transition-colors duration-200 group-hover:text-[#00d4aa] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>
                <span>+57 300 670 2491</span>
              </a>

              <a
                href="mailto:tekcorp@gmail.com"
                className="group flex items-center gap-3.5 text-white/80 hover:text-[#00d4aa] text-base font-medium transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-white/60 transition-colors duration-200 group-hover:text-[#00d4aa] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>tekcorp@gmail.com</span>
              </a>
            </div>
          </div>

          {/* COLUMN 3: Badges */}
          <div>
            <h3 className="font-bold text-sm tracking-wide text-white/80 mb-6">
              Badges
            </h3>

            <div className="flex flex-col gap-6">
              {/* Row 1: Google Rating, Clutch, Award Badge */}
              <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
                <div className="relative h-10 w-36 shrink-0 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/assets/googlefooter.png"
                    alt="Google 5.0 Rating Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative h-9 w-28 shrink-0 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/assets/clutchfooter.png"
                    alt="Clutch Logo Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative h-14 w-20 shrink-0 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/assets/tsdc.png"
                    alt="Top Software Development Company Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Row 2: GDPR Seal, Meta Verified Badge */}
              <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
                <div className="relative h-24 w-24 shrink-0 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/assets/gdprfoot.png"
                    alt="GDPR General Data Protection Regulation Seal"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative h-10 w-36 shrink-0 transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/assets/metawhite.png"
                    alt="Meta Verified Badge"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Line & Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 TekCorp LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-[#00d4aa] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-[#00d4aa] transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}