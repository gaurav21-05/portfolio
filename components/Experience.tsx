"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            04 / EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FB] font-sans">
            Work history.
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#8992A4] max-w-md font-mono">
          Production engineering experience delivering automated pipelines at scale.
        </p>
      </div>

      {/* Experience Item */}
      <div className="p-8 md:p-10 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all duration-300">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#202532]/70">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#6D7CFF] mb-2">
              <span className="font-semibold uppercase tracking-wider">AI Engineer Intern</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#F5F7FB] font-sans">
              WTI Cabs
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8992A4]">
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
        <div className="my-6 p-4 rounded-lg bg-[#08090D] border border-[#202532] font-mono text-xs text-[#F5F7FB] flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-[#6D7CFF]/20 text-[#6D7CFF] font-semibold text-[10px]">
            KEY HIGHLIGHT
          </span>
          <span className="text-[#8992A4]">
            Built an AI-powered reservation automation pipeline processing{" "}
            <strong className="text-[#F5F7FB]">3,000–5,000 emails/day</strong>.
          </span>
        </div>

        {/* Architecture Flow */}
        <div className="my-6">
          <div className="text-xs font-mono uppercase tracking-wider text-[#555E70] mb-3">
            SYSTEM ARCHITECTURE FLOW
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {[
              "Ingestion",
              "AI Extraction",
              "Validation",
              "Corporate Rule Evaluation",
              "Execution",
            ].map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded-md bg-[#161A26] border border-[#202532] text-[#F5F7FB]">
                  {step}
                </span>
                {idx < 4 && <ArrowRight className="w-3 h-3 text-[#555E70]" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bullets */}
        <div className="space-y-3 text-sm text-[#8992A4] mt-6 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <span className="text-[#6D7CFF] font-mono text-xs mt-0.5">✦</span>
            <span>
              Engineered resilient ingestion microservices to parse incoming corporate reservation emails
              with structured Pydantic schema validation.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-[#6D7CFF] font-mono text-xs mt-0.5">✦</span>
            <span>
              Implemented corporate travel policy evaluation engine validating billing codes, vehicle class
              entitlements, and blackout schedules before transaction dispatch.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-[#6D7CFF] font-mono text-xs mt-0.5">✦</span>
            <span>
              Interfaced directly with legacy .NET enterprise backends via idempotent API adapters,
              reducing reservation turnaround latency from 30+ minutes to under 3 seconds.
            </span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-8 pt-6 border-t border-[#202532]/70 flex flex-wrap items-center gap-2">
          {["Python", "FastAPI", "PostgreSQL", "Docker", "AWS", ".NET integration"].map(
            (tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#08090D] border border-[#202532] font-mono text-xs text-[#8992A4]"
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
