"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            01 / SELECTED WORK
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans">
            Things I&apos;ve built.
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#8992A4] max-w-md font-mono">
          Engineered for production reliability: autonomous workflows, agentic state
          orchestration, and high-throughput enterprise pipelines.
        </p>
      </div>

      {/* Flagship Case Studies with Alternating Layouts */}
      <div className="flex flex-col gap-12 md:gap-16">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
