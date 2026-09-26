"use client";

import React from "react";
import { ACHIEVEMENTS } from "@/data/achievements";
import { Trophy, Terminal, Cpu, Cloud, Code2, Award } from "lucide-react";

export function Achievements() {
  const iconMap: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-4 h-4 text-[#6D7CFF]" />,
    Trophy: <Trophy className="w-4 h-4 text-[#F59E0B]" />,
    Cpu: <Cpu className="w-4 h-4 text-[#10B981]" />,
    Cloud: <Cloud className="w-4 h-4 text-[#38BDF8]" />,
    Code2: <Code2 className="w-4 h-4 text-[#A855F7]" />,
  };

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            05 / RECOGNITION
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans">
            Achievements & Credentials.
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#8992A4] max-w-md font-mono">
          Hackathon recognitions, technical certifications, and formal agentic engineering qualifications.
        </p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-[#08090D] border border-[#202532]">
                  {iconMap[item.iconName] || <Award className="w-4 h-4 text-[#6D7CFF]" />}
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="text-[#8992A4] px-2 py-0.5 rounded bg-[#141A28] border border-[#202532]">
                    {item.type}
                  </span>
                  <span className="text-[#555E70]">{item.year}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-base font-bold text-[#F5F7FB] font-sans mb-1 leading-snug">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-[#6D7CFF] mb-3">
                {item.issuer}
              </div>

              {/* Description */}
              <p className="text-xs text-[#8992A4] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom Highlight */}
            {item.highlight && (
              <div className="mt-6 pt-3 border-t border-[#202532]/60 text-[11px] font-mono text-[#F5F7FB] flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#6D7CFF]" />
                <span>{item.highlight}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
