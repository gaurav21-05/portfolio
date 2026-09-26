"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);

      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work", isExternal: false },
    { label: "Experience", href: "#experience", isExternal: false },
    { label: "Stack", href: "#stack", isExternal: false },
    { label: "GitHub", href: "#github", isExternal: false },
    { label: "Achievements", href: "#achievements", isExternal: false },
    { label: "Resume", href: "/resume.pdf", isExternal: true },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#6D7CFF] z-50 transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Main Centered Floating Pill Navbar */}
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-[#08090D]/85 backdrop-blur-xl border-[#202532] shadow-2xl shadow-black/60"
              : "bg-[#0D1017]/60 backdrop-blur-md border-[#202532]/60 shadow-lg shadow-black/20"
          } max-w-4xl w-full`}
          aria-label="Main Navigation"
        >
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase text-[#F5F7FB] hover:text-[#6D7CFF] transition-colors focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-[#6D7CFF] animate-pulse" />
            <span className="font-semibold tracking-widest">GAURAV RAWAT</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs text-[#8992A4]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="px-3 py-1.5 rounded-full hover:text-[#F5F7FB] hover:bg-[#202532]/50 transition-colors inline-flex items-center gap-1"
              >
                <span>{link.label}</span>
                {link.isExternal && <ArrowUpRight className="w-3 h-3 opacity-60" />}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle (Desktop & Mobile) */}
            <ThemeToggle />

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161B26] hover:bg-[#202532] text-xs font-mono text-[#F5F7FB] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all group"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8992A4] group-hover:text-[#6D7CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-[#8992A4] hover:text-[#F5F7FB] hover:bg-[#202532]/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md md:hidden pt-20 px-6 flex flex-col justify-between pb-8"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#555E70] uppercase tracking-wider mb-2">
              <span>Navigation</span>
              <span onClick={(e) => e.stopPropagation()}>
                <ThemeToggle />
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-mono text-[#F5F7FB] hover:text-[#6D7CFF] py-2 border-b border-[#202532]/60 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isExternal ? (
                  <ArrowUpRight className="w-4 h-4 text-[#6D7CFF]" />
                ) : (
                  <span className="text-xs text-[#555E70]">→</span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-mono text-[#6D7CFF] py-2 border-b border-[#202532]/60 flex items-center justify-between"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-[#555E70] pt-6 border-t border-[#202532]">
            <span>FULL-STACK AI ENGINEER</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ONLINE
            </span>
          </div>
        </div>
      )}
    </>
  );
}
