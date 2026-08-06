"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const dropdownRef = useRef(null);

  // Handle navbar background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown and mobile drawer when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Solutions", hasDropdown: true },
    { name: "Case Studies", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Company", href: "#" },
  ];

  const solutionsItems = [
    {
      title: "AI Solutions",
      description: "Intelligent automation & generative ML systems",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[var(--teal-dark)] transition-transform duration-200 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Website & Software Development",
      description: "Custom web applications & scalable backend systems",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[var(--teal-dark)] transition-transform duration-200 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Search Engine Optimization",
      description: "Organic search growth & technical domain optimization",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[var(--teal-dark)] transition-transform duration-200 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Branding & Design",
      description: "UI/UX interfaces & modern brand identities",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[var(--teal-dark)] transition-transform duration-200 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "EdTech Platform Development",
      description: "Interactive learning portals & education software",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[var(--teal-dark)] transition-transform duration-200 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur-md shadow-sm py-3 border-b border-[var(--border-subtle)]"
          : "bg-transparent py-5"
      }`}
    >

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] flex-shrink-0"
        >
          <div className="relative h-9 sm:h-11 w-36 sm:w-44">
            <Image
              src="/assets/blacklogo.png"
              alt="TekCorp Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Center Pill Navigation (Desktop) */}
        <nav className="hidden md:flex items-center bg-[var(--bg-card)] rounded-full p-1.5 shadow-[var(--shadow-sm)] border border-[var(--border-subtle)]">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    onClick={() => setSolutionsOpen((prev) => !prev)}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeTab === link.name || solutionsOpen
                        ? "bg-[var(--teal)] text-[var(--text-dark)] shadow-sm"
                        : "text-[var(--text-body)] hover:text-[var(--text-dark)] hover:bg-[var(--bg)]"
                    }`}
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        solutionsOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {solutionsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 sm:w-96 z-50">
                      <div className="bg-[var(--bg-card)] rounded-2xl p-2.5 shadow-2xl border border-[var(--border-subtle)] animate-in fade-in slide-in-from-top-2 duration-200 divide-y divide-[var(--border-subtle)]/50">
                        <div className="p-1 space-y-1">
                          {solutionsItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="group flex items-start gap-3.5 p-2.5 rounded-xl transition-all duration-150 hover:bg-[var(--teal-light)]/60"
                            >
                              <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--bg)] border border-[var(--border-subtle)] shadow-xs group-hover:border-[var(--teal)]/40 group-hover:bg-white">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs sm:text-sm font-bold text-[var(--text-dark)] group-hover:text-[var(--teal-dark)] transition-colors">
                                  {item.title}
                                </div>
                                <p className="text-[11px] text-[var(--text-body)] opacity-80 leading-tight mt-0.5 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === link.name
                    ? "bg-[var(--teal)] text-[var(--text-dark)] shadow-sm"
                    : "text-[var(--text-body)] hover:text-[var(--text-dark)] hover:bg-[var(--bg)]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="#contact"
            className="btn-teal text-sm !py-2.5 !px-6 font-bold inline-block rounded-full transition-transform active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--text-dark)] focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-card)] border-t border-[var(--border-subtle)] px-6 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <a
            href="#"
            className="block py-2 text-base font-semibold text-[var(--text-dark)] border-b border-[var(--border-subtle)]"
            onClick={() => {
              setActiveTab("Home");
              setMobileOpen(false);
            }}
          >
            Home
          </a>
          <div>
            <span className="block py-2 text-base font-semibold text-[var(--text-dark)]">
              Our Solutions
            </span>
            <div className="pl-2 space-y-2 border-l-2 border-[var(--teal)] my-2">
              {solutionsItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-[var(--teal-light)]/40 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="p-1.5 rounded-md bg-[var(--bg)] border border-[var(--border-subtle)] mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--text-dark)]">
                      {item.title}
                    </span>
                    <span className="block text-xs text-[var(--text-body)] opacity-75">
                      {item.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="block py-2 text-base font-semibold text-[var(--text-dark)] border-b border-[var(--border-subtle)]"
            onClick={() => {
              setActiveTab("Case Studies");
              setMobileOpen(false);
            }}
          >
            Case Studies
          </a>
          <a
            href="#"
            className="block py-2 text-base font-semibold text-[var(--text-dark)] border-b border-[var(--border-subtle)]"
            onClick={() => {
              setActiveTab("Insights");
              setMobileOpen(false);
            }}
          >
            Insights
          </a>
          <a
            href="#"
            className="block py-2 text-base font-semibold text-[var(--text-dark)]"
            onClick={() => {
              setActiveTab("Company");
              setMobileOpen(false);
            }}
          >
            Company
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              className="block w-full text-center py-3 bg-[var(--teal)] text-[var(--text-dark)] font-bold rounded-full shadow-md hover:bg-[var(--teal-hover)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}