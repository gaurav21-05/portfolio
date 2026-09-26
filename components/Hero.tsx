"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Terminal, Layers, Cpu, Cloud, Database } from "lucide-react";

export function Hero() {
  const focusAreas = [
    {
      title: "AI APPLICATIONS",
      desc: "LLMs, RAG, structured extraction & workflows",
      icon: Cpu,
      tag: "01",
    },
    {
      title: "AGENTIC SYSTEMS",
      desc: "Planning, tool calling, guardrails & validation",
      icon: Terminal,
      tag: "02",
    },
    {
      title: "FULL-STACK",
      desc: "Next.js, FastAPI, Node.js & high-scale DBs",
      icon: Layers,
      tag: "03",
    },
    {
      title: "CLOUD & AUTOMATION",
      desc: "AWS, Docker, CI/CD & resilient pipelines",
      icon: Cloud,
      tag: "04",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Subtle Radial Glow & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6D7CFF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 mask-radial pointer-events-none -z-20" />

      {/* Hero Top Content */}
      <div className="flex flex-col items-start max-w-5xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0D1017] border border-[#202532] text-xs font-mono text-[#8992A4] mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[#F5F7FB] font-medium tracking-wider">
            BUILDING AI PRODUCTS
          </span>
          <span className="text-[#555E70]">•</span>
          <span className="text-[#555E70] hidden sm:inline">GAURAV RAWAT</span>
        </div>

        {/* Large Editorial Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-0.04em] leading-[0.92] text-[#F5F7FB] uppercase font-sans">
          <span>FULL-STACK</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FB] via-[#F5F7FB] to-[#8992A4]">
            AI ENGINEER<span className="text-[#6D7CFF]">.</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#8992A4] max-w-3xl leading-relaxed font-normal">
          I turn AI ideas into production-ready products across intelligent applications,
          agentic systems, automation and modern full-stack infrastructure.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#F5F7FB] hover:bg-[#FFFFFF] text-[#08090D] font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:shadow-[0_0_24px_rgba(245,247,251,0.25)] group"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="https://github.com/gaurav21-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#0D1017] hover:bg-[#151924] text-[#F5F7FB] border border-[#202532] hover:border-[#6D7CFF]/50 font-mono text-xs font-medium tracking-wider uppercase transition-all duration-200 group"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8992A4] group-hover:text-[#6D7CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Quick Technical Indicator */}
          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-[#202532] font-mono text-xs text-[#555E70]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF]" />
              RUNTIME: PYTHON / NEXT.JS
            </span>
            <span>•</span>
            <span>PROD: AWS / DOCKER</span>
          </div>
        </div>
      </div>

      {/* Four Technical Focus Areas Below Hero */}
      <div className="mt-20 pt-10 border-t border-[#202532]/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {focusAreas.map((area) => {
          const Icon = area.icon;
          return (
            <div
              key={area.tag}
              className="p-4 rounded-lg bg-[#0D1017]/50 border border-[#202532]/80 hover:border-[#6D7CFF]/40 hover:bg-[#0D1017] transition-all group"
            >
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#555E70]">
                <span>{area.tag}</span>
                <Icon className="w-3.5 h-3.5 text-[#8992A4] group-hover:text-[#6D7CFF] transition-colors" />
              </div>
              <h2 className="text-sm font-semibold tracking-wide text-[#F5F7FB] font-mono mb-1">
                {area.title}
              </h2>
              <p className="text-xs text-[#8992A4] leading-relaxed">
                {area.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
