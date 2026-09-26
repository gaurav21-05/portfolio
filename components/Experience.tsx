"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar, MapPin, ArrowRight, Server, CheckCircle2 } from "lucide-react";

export function Experience() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated pipeline progress
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  const pipelineStages = [
    { title: "EMAIL INGESTION", sub: "IMAP stream & webhook queues" },
    { title: "AI EXTRACTION", sub: "Pydantic structured parser" },
    { title: "VALIDATION", sub: "Geo normalization & syntax" },
    { title: "RULE EVALUATION", sub: "Corporate travel policy matching" },
    { title: "EXECUTION", sub: "Enterprise .NET Core backend" },
  ];

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            02 / EXPERIENCE
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans">
            Where I&apos;ve built.
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#8992A4] max-w-md font-mono">
          Production engineering experience building mission-critical AI pipelines processing high daily volume.
        </p>
      </div>

      {/* Experience Item */}
      <div className="p-8 md:p-12 rounded-2xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all duration-300 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#202532]/70">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#6D7CFF] mb-2">
              <span className="font-semibold uppercase tracking-wider">AI ENGINEER INTERN</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#F5F7FB] font-sans">
              WTI CABS
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8992A4]">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141A28] border border-[#202532]">
              <Calendar className="w-3.5 h-3.5 text-[#6D7CFF]" />
              <span>July 2026 – September 2026</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141A28] border border-[#202532]">
              <MapPin className="w-3.5 h-3.5 text-[#8992A4]" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Highlight Callout */}
        <div className="my-8 p-5 rounded-xl bg-[#08090D] border border-[#202532] font-mono text-xs text-[#F5F7FB] flex flex-wrap items-center gap-4">
          <span className="px-2.5 py-1 rounded bg-[#6D7CFF]/20 text-[#6D7CFF] font-semibold text-[10px] tracking-wider uppercase">
            PRODUCTION IMPACT
          </span>
          <span className="text-sm text-[#8992A4]">
            Built an AI-powered reservation automation pipeline processing{" "}
            <strong className="text-[#F5F7FB] font-bold">3,000–5,000 emails/day</strong> with sub-3 second confirmation.
          </span>
        </div>

        {/* Five-Stage Animated Pipeline Visualization */}
        <div className="my-8">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#555E70] mb-4">
            <span className="flex items-center gap-2 text-[#F5F7FB]">
              <Server className="w-3.5 h-3.5 text-[#6D7CFF]" />
              FIVE-STAGE HIGH-THROUGHPUT PIPELINE
            </span>
            <span className="text-[11px] text-[#6D7CFF]">STAGE {activeStage + 1} OF 5</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
            {pipelineStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.title}
                  className={`p-3.5 rounded-lg border transition-all duration-300 relative ${
                    isActive
                      ? "bg-[#141A28] border-[#6D7CFF] shadow-[0_0_18px_rgba(109,124,255,0.22)]"
                      : "bg-[#08090D] border-[#202532] text-[#8992A4]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-bold ${
                        isActive ? "text-[#6D7CFF]" : "text-[#555E70]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF] animate-ping" />
                    )}
                  </div>
                  <div
                    className={`font-semibold text-xs truncate ${
                      isActive ? "text-[#F5F7FB]" : "text-[#8992A4]"
                    }`}
                  >
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-[#555E70] truncate mt-1">
                    {stage.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Bullets */}
        <div className="space-y-3.5 text-sm sm:text-base text-[#8992A4] mt-8 leading-relaxed font-sans">
          <div className="flex items-start gap-3">
            <span className="text-[#6D7CFF] font-mono text-xs mt-1">✦</span>
            <span>
              Engineered resilient ingestion microservices to parse incoming corporate reservation emails
              with structured Pydantic schema validation and geographic address normalization.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#6D7CFF] font-mono text-xs mt-1">✦</span>
            <span>
              Implemented corporate travel policy evaluation engine validating billing codes, vehicle class
              entitlements, and blackout schedules before transaction dispatch.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#6D7CFF] font-mono text-xs mt-1">✦</span>
            <span>
              Interfaced directly with legacy enterprise .NET Core backends via idempotent API adapters,
              reducing reservation turnaround latency from 30+ minutes of manual entry to under 3 seconds.
            </span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-8 pt-6 border-t border-[#202532]/70 flex flex-wrap items-center gap-2">
          {["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", ".NET integration"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md bg-[#08090D] border border-[#202532] font-mono text-xs text-[#F5F7FB]"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
