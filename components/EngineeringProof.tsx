"use client";

import React, { useEffect, useState, useRef } from "react";
import { Database, Mail, ShieldCheck, Cpu } from "lucide-react";

interface Metric {
  value: string;
  numValue?: number;
  suffix?: string;
  label: string;
  sub: string;
  icon: React.ElementType;
}

export function EngineeringProof() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics: Metric[] = [
    {
      value: "10,000+",
      label: "PRODUCT RECORDS",
      sub: "Shinra live catalog in production",
      icon: Database,
    },
    {
      value: "3,000–5,000",
      label: "EMAILS / DAY",
      sub: "High-throughput extraction pipeline",
      icon: Mail,
    },
    {
      value: "49",
      label: "AUTOMATED TESTS",
      sub: "Apex AI bounded DAG state verification",
      icon: ShieldCheck,
    },
    {
      value: "2026",
      label: "AI ENGINEERING",
      sub: "Agentic systems & cloud infrastructure",
      icon: Cpu,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-y border-[#202532]/70 bg-[#0D1017]/40 backdrop-blur-sm relative z-10"
      aria-label="Engineering Proof Points"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex flex-col justify-between transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-[#555E70] uppercase tracking-widest">
                  0{idx + 1} / METRIC
                </span>
                <Icon className="w-3.5 h-3.5 text-[#6D7CFF] opacity-80" />
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-[#F5F7FB] tracking-tight">
                {item.value}
              </div>

              <div className="mt-2 text-xs font-mono font-semibold tracking-wider text-[#6D7CFF] uppercase">
                {item.label}
              </div>

              <p className="mt-1 text-[11px] text-[#8992A4] font-sans leading-normal">
                {item.sub}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
