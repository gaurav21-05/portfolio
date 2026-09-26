"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#202532] bg-[#08090D] py-16 px-6 md:px-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Brand & Role */}
        <div>
          <div className="flex items-center gap-2.5 text-sm font-bold text-[#F5F7FB] tracking-wider mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#6D7CFF]" />
            <span>GAURAV RAWAT</span>
          </div>
          <div className="text-[#8992A4] font-medium mb-1">
            Full-Stack AI Engineer
          </div>
          <div className="text-[11px] text-[#555E70]">
            AI Applications · Agentic Systems · Full-Stack · Cloud
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-6 text-[#8992A4]">
          <a
            href="https://github.com/gaurav21-05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav-rawat-41293928b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:gauravrawatop@gmail.com"
            className="hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 text-[#8992A4] hover:text-[#F5F7FB] transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#202532]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#555E70] text-[11px]">
        <div>
          © {new Date().getFullYear()} Gaurav Rawat. Designed & engineered for production.
        </div>
        <div className="flex items-center gap-2">
          <span>LATENCY: 18MS</span>
          <span>•</span>
          <span className="text-emerald-400">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </footer>
  );
}
