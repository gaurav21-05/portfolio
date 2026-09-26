"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  X,
  Workflow,
  ShieldCheck,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article className="group relative rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 p-6 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-15px_rgba(109,124,255,0.12)]">
        {/* Subtle Ambient Glow on Hover */}
        <div className="absolute top-0 right-1/4 w-72 h-44 bg-[#6D7CFF]/5 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div>
            {/* Meta Category & Index */}
            <div className="flex items-center gap-3 font-mono text-xs text-[#8992A4] mb-3">
              <span className="text-[#6D7CFF] font-semibold">{project.number}</span>
              <span className="text-[#555E70]">/</span>
              <span className="tracking-wider uppercase text-[#8992A4]">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FB] font-sans">
              {project.title}
            </h3>
          </div>

          {/* Proof Point Badge */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141A28] border border-[#202532] text-xs font-mono text-[#F5F7FB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF]" />
              <span className="font-semibold text-white">{project.proofPoint}</span>
            </div>
            <span className="text-[10px] font-mono text-[#555E70] mt-1 uppercase tracking-wider">
              {project.proofLabel}
            </span>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-base md:text-lg text-[#8992A4] leading-relaxed max-w-4xl mb-8">
          {project.description}
        </p>

        {/* VISUAL ARCHITECTURE / WORKFLOW DIAGRAM */}
        {project.id === "apex-ai" && (
          <div className="my-8 p-5 md:p-6 rounded-lg bg-[#08090D] border border-[#202532] font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#202532]/70 text-[11px] text-[#555E70]">
              <span className="flex items-center gap-1.5 text-[#F5F7FB]">
                <Workflow className="w-3.5 h-3.5 text-[#6D7CFF]" />
                BOUNDED AGENT ORCHESTRATION GRAPH
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> 49 TESTS PASSING
              </span>
            </div>

            {/* Steps Visual Chain */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { step: "01", name: "Criteria", note: "Boundary Gates" },
                { step: "02", name: "Planning", note: "DAG Graph" },
                { step: "03", name: "Execution", note: "Docker Sandbox" },
                { step: "04", name: "Validation", note: "Automated Suite" },
                { step: "05", name: "Rollback / Approval", note: "Atomic State" },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="relative p-3 rounded-md bg-[#0D1017] border border-[#202532] group-hover:border-[#2E374A] transition-colors"
                >
                  <div className="text-[10px] text-[#6D7CFF] mb-1 font-semibold">
                    {item.step}
                  </div>
                  <div className="font-medium text-[#F5F7FB] truncate">{item.name}</div>
                  <div className="text-[10px] text-[#8992A4] truncate mt-0.5">
                    {item.note}
                  </div>
                  {idx < 4 && (
                    <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#555E70]">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.id === "wti-cabs" && (
          <div className="my-8 p-5 md:p-6 rounded-lg bg-[#08090D] border border-[#202532] font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#202532]/70 text-[11px] text-[#555E70]">
              <span className="flex items-center gap-1.5 text-[#F5F7FB]">
                <Server className="w-3.5 h-3.5 text-[#6D7CFF]" />
                HIGH-THROUGHPUT PIPELINE ARCHITECTURE
              </span>
              <span className="text-[#8992A4]">3,000–5,000 EMAILS / DAY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { step: "01", name: "Email Ingestion", note: "IMAP / Webhook" },
                { step: "02", name: "AI Extraction", note: "Pydantic Schema" },
                { step: "03", name: "Validation", note: "Geo & Syntax" },
                { step: "04", name: "Rule Evaluation", note: "Policy Engine" },
                { step: "05", name: "Execution", note: ".NET Core API" },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="relative p-3 rounded-md bg-[#0D1017] border border-[#202532] group-hover:border-[#2E374A] transition-colors"
                >
                  <div className="text-[10px] text-[#6D7CFF] mb-1 font-semibold">
                    {item.step}
                  </div>
                  <div className="font-medium text-[#F5F7FB] truncate">{item.name}</div>
                  <div className="text-[10px] text-[#8992A4] truncate mt-0.5">
                    {item.note}
                  </div>
                  {idx < 4 && (
                    <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#555E70]">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.id === "shinra" && (
          <div className="my-8 p-5 md:p-6 rounded-lg bg-[#08090D] border border-[#202532] font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#202532]/70 text-[11px] text-[#555E70]">
              <span className="flex items-center gap-1.5 text-[#F5F7FB]">
                <Layers className="w-3.5 h-3.5 text-[#6D7CFF]" />
                AUTOMATED MERCHANDISE & CONTENT PIPELINE
              </span>
              <span className="text-[#8992A4]">10,000+ RECORDS IN PROD</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { step: "01", name: "Market Discovery", note: "Trend & Keyword Ingest" },
                { step: "02", name: "Structured LLM", note: "SEO Titles & Specs" },
                { step: "03", name: "Mockup Engine", note: "Automated Compositing" },
                { step: "04", name: "Storefront Deploy", note: "Next.js ISR + S3 CDN" },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="relative p-3 rounded-md bg-[#0D1017] border border-[#202532] group-hover:border-[#2E374A] transition-colors"
                >
                  <div className="text-[10px] text-[#6D7CFF] mb-1 font-semibold">
                    {item.step}
                  </div>
                  <div className="font-medium text-[#F5F7FB] truncate">{item.name}</div>
                  <div className="text-[10px] text-[#8992A4] truncate mt-0.5">
                    {item.note}
                  </div>
                  {idx < 3 && (
                    <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#555E70]">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Pills and Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#202532]/70">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#161A26] border border-[#202532] font-mono text-[11px] text-[#8992A4]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#161B26] hover:bg-[#202532] text-xs font-mono text-[#F5F7FB] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all cursor-pointer group/btn"
            >
              <span>Case Study</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#8992A4] group-hover/btn:text-[#6D7CFF] group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#08090D] hover:bg-[#161B26] text-xs font-mono text-[#F5F7FB] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all group/web"
                aria-label={`Visit ${project.title} live website`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#8992A4] group-hover/web:text-[#6D7CFF]" />
                <span className="hidden sm:inline">Live Site</span>
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-[#08090D] hover:bg-[#161B26] text-[#8992A4] hover:text-[#F5F7FB] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      {/* FULL IN-DEPTH CASE STUDY MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <div className="relative w-full max-w-4xl bg-[#0D1017] border border-[#202532] rounded-xl shadow-2xl p-6 md:p-10 my-8 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#202532] pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#6D7CFF] mb-1">
                  <span>CASE STUDY</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
                <h3
                  id={`modal-title-${project.id}`}
                  className="text-2xl md:text-3xl font-bold text-[#F5F7FB] font-sans"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-lg bg-[#141A28] border border-[#202532] text-[#8992A4] hover:text-[#F5F7FB] hover:border-[#6D7CFF]/50 transition-colors focus:outline-none"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {project.caseStudy.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]"
                >
                  <div className="text-xl font-bold font-mono text-[#F5F7FB]">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-[#8992A4] mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Study Sections */}
            <div className="space-y-6 text-sm text-[#8992A4] leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF]" />
                  Overview
                </h4>
                <p>{project.caseStudy.overview}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-[#08090D] border border-[#202532]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                    The Problem
                  </h4>
                  <p>{project.caseStudy.problem}</p>
                </div>

                <div className="p-4 rounded-lg bg-[#08090D] border border-[#202532]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                    The Solution
                  </h4>
                  <p>{project.caseStudy.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Architecture & System Design
                </h4>
                <p className="bg-[#08090D] p-4 rounded-lg border border-[#202532] font-mono text-xs text-[#F5F7FB]/90 leading-normal">
                  {project.caseStudy.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                  AI Workflow & Pipeline
                </h4>
                <div className="p-4 rounded-lg bg-[#08090D] border border-[#202532] font-mono text-xs text-[#6D7CFF] leading-relaxed">
                  {project.caseStudy.aiWorkflow}
                </div>
              </div>

              {/* Engineering Decisions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Key Engineering Decisions
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.engineeringDecisions.map((dec, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#6D7CFF] font-mono text-xs mt-0.5">↳</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Challenges Overcome
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.challenges.map((chal, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#F59E0B] font-mono text-xs mt-0.5">!</span>
                      <span>{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Production Results
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-[#F5F7FB]">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FB] mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#161A26] border border-[#202532] font-mono text-xs text-[#F5F7FB]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 pt-6 border-t border-[#202532] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#6D7CFF] hover:bg-[#8592FF] text-[#08090D] font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#161B26] hover:bg-[#202532] text-[#F5F7FB] border border-[#202532] font-mono text-xs tracking-wider transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-md font-mono text-xs text-[#8992A4] hover:text-[#F5F7FB] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
