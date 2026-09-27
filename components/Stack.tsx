"use client";

import React, { useState } from "react";
import { ENGINEERING_STACK } from "@/data/stack";
import { Sparkles, Terminal, Database, Cloud, Layout, Workflow } from "lucide-react";

export function Stack() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categoryIcons: Record<string, React.ReactNode> = {
    "AI / LLM": <Sparkles className="w-4 h-4 text-[#6D7CFF]" />,
    Backend: <Terminal className="w-4 h-4 text-[#6D7CFF]" />,
    Databases: <Database className="w-4 h-4 text-[#6D7CFF]" />,
    "Cloud / DevOps": <Cloud className="w-4 h-4 text-[#6D7CFF]" />,
    "Frameworks & Tools": <Layout className="w-4 h-4 text-[#6D7CFF]" />,
    Concepts: <Workflow className="w-4 h-4 text-[#6D7CFF]" />,
    Frontend: <Layout className="w-4 h-4 text-[#6D7CFF]" />,
    Architecture: <Workflow className="w-4 h-4 text-[#6D7CFF]" />,
  };

  const filteredStack =
    activeCategory === "ALL"
      ? ENGINEERING_STACK
      : ENGINEERING_STACK.filter((cat) => cat.title === activeCategory);

  return (
    <section id="stack" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            03 / ENGINEERING STACK
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans">
            What I work with.
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#8992A4] max-w-md font-mono">
          Production technologies across AI agent workflows, distributed backends,
          databases, and cloud infrastructure.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4">
        <button
          type="button"
          onClick={() => setActiveCategory("ALL")}
          className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors cursor-pointer ${
            activeCategory === "ALL"
              ? "bg-[#6D7CFF] text-[#08090D] font-semibold"
              : "bg-[#0D1017] text-[#8992A4] hover:text-[#F5F7FB] border border-[#202532]"
          }`}
        >
          All Domains
        </button>

        {ENGINEERING_STACK.map((cat) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setActiveCategory(cat.title)}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors cursor-pointer ${
              activeCategory === cat.title
                ? "bg-[#6D7CFF] text-[#08090D] font-semibold"
                : "bg-[#0D1017] text-[#8992A4] hover:text-[#F5F7FB] border border-[#202532]"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Grid of Categorized Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStack.map((cat) => (
          <div
            key={cat.title}
            className="p-6 sm:p-7 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#2E374A] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  {categoryIcons[cat.title] || <Sparkles className="w-4 h-4 text-[#6D7CFF]" />}
                  <h3 className="font-mono text-base font-semibold text-[#F5F7FB]">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#555E70] px-2 py-0.5 rounded bg-[#141A28] border border-[#202532]">
                  {cat.badge}
                </span>
              </div>

              <p className="text-xs text-[#8992A4] mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Categorized Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1.5 rounded-md bg-[#08090D] hover:bg-[#141A28] border border-[#202532] hover:border-[#6D7CFF]/40 font-mono text-xs text-[#F5F7FB] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202532]/60 text-[11px] font-mono text-[#555E70]">
              {cat.items.length} Production Technologies
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
