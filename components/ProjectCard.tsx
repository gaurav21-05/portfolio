"use client";

import React, { useState, useEffect } from "react";
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
  ArrowRight,
  Play,
  RotateCcw,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isReversed = index % 2 === 1; // Project 02 is visual left, text right

  // Sequential node illumination loop for Apex AI and WTI Cabs
  useEffect(() => {
    const totalSteps = project.id === "shinra" ? 4 : 5;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 1800);

    return () => clearInterval(interval);
  }, [project.id]);

  return (
    <>
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 p-7 md:p-12 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(109,124,255,0.14)] overflow-hidden"
      >
        {/* Subtle Ambient Radial Glow on Hover */}
        <div className="absolute top-1/3 right-1/4 w-96 h-60 bg-[#6D7CFF]/6 rounded-full blur-[110px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* TEXT CONTENT COLUMN */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between ${
              isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div>
              {/* Category, Index & Expanding Accent Line */}
              <div className="flex items-center gap-3 font-mono text-xs text-[#8992A4] mb-4">
                <span className="text-[#6D7CFF] font-semibold">{project.number}</span>
                <span className="text-[#555E70]">/</span>
                <span className="tracking-wider uppercase text-[#8992A4]">
                  {project.category}
                </span>
                <div className="w-0 group-hover:w-12 h-[1px] bg-[#6D7CFF] transition-all duration-300 ml-1 hidden sm:block" />
              </div>

              {/* Title with Subtle Shift on Hover */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7FB] font-sans transition-transform duration-300 group-hover:translate-x-1">
                {project.title}
              </h3>

              {/* Proof Point Chip */}
              <div className="mt-4 mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141A28] border border-[#202532] text-xs font-mono text-[#F5F7FB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF] animate-pulse" />
                <span className="font-semibold text-white">{project.proofPoint}</span>
                <span className="text-[#555E70]">•</span>
                <span className="text-[11px] text-[#8992A4] uppercase tracking-wider">
                  {project.proofLabel}
                </span>
              </div>

              {/* Project Description */}
              <p className="text-base sm:text-lg text-[#8992A4] leading-relaxed mb-8 font-sans">
                {project.description}
              </p>
            </div>

            {/* Technologies & Actions */}
            <div className="pt-6 border-t border-[#202532]/70 space-y-6">
              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#161A26] border border-[#202532] font-mono text-[11px] text-[#8992A4] transition-colors group-hover:border-[#2E374A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#161B26] hover:bg-[#202532] text-xs font-mono text-[#F5F7FB] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all cursor-pointer group/btn"
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
                    <span>Live Platform</span>
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
          </div>

          {/* VISUAL ARCHITECTURE / PIPELINE COLUMN */}
          <div
            className={`lg:col-span-6 w-full ${
              isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative rounded-xl bg-[#08090D] border border-[#202532] group-hover:border-[#2E374A] p-6 sm:p-8 transition-transform duration-400 group-hover:scale-[1.02] shadow-xl">
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#202532]/70 font-mono text-xs">
                <span className="flex items-center gap-2 text-[#F5F7FB] font-semibold">
                  {project.id === "apex-ai" && <Workflow className="w-4 h-4 text-[#6D7CFF]" />}
                  {project.id === "wti-cabs" && <Server className="w-4 h-4 text-[#6D7CFF]" />}
                  {project.id === "shinra" && <Layers className="w-4 h-4 text-[#6D7CFF]" />}
                  <span>
                    {project.id === "apex-ai" && "BOUNDED ORCHESTRATION DAG"}
                    {project.id === "wti-cabs" && "PIPELINE ARCHITECTURE"}
                    {project.id === "shinra" && "CATALOG AUTOMATION PIPELINE"}
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-[#6D7CFF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF] animate-ping" />
                  LIVE SYSTEM
                </span>
              </div>

              {/* APEX AI: SEQUENTIAL NODE ILLUMINATION */}
              {project.id === "apex-ai" && (
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { step: "01", name: "CRITERIA", desc: "Rigid acceptance criteria and dependency boundaries" },
                    { step: "02", name: "PLANNING", desc: "DAG task decomposition with guardrails" },
                    { step: "03", name: "EXECUTION", desc: "Isolated Docker container sandbox code synthesis" },
                    { step: "04", name: "VALIDATION", desc: "AST parsing, linting & 49 automated test suites" },
                    { step: "05", name: "APPROVAL / ROLLBACK", desc: "Human gate with atomic git rollback guarantee" },
                  ].map((node, i) => {
                    const isNodeActive = activeStep === i;
                    return (
                      <div
                        key={node.step}
                        className={`p-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                          isNodeActive
                            ? "bg-[#141A28] border-[#6D7CFF] shadow-[0_0_20px_rgba(109,124,255,0.2)]"
                            : "bg-[#0D1017] border-[#202532] text-[#8992A4]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                              isNodeActive
                                ? "bg-[#6D7CFF] text-[#08090D]"
                                : "bg-[#161A26] text-[#555E70]"
                            }`}
                          >
                            {node.step}
                          </span>
                          <div>
                            <div
                              className={`text-xs font-semibold ${
                                isNodeActive ? "text-[#F5F7FB]" : "text-[#8992A4]"
                              }`}
                            >
                              {node.name}
                            </div>
                            <div className="text-[10px] text-[#555E70] truncate max-w-[220px] sm:max-w-[320px]">
                              {node.desc}
                            </div>
                          </div>
                        </div>

                        {isNodeActive ? (
                          <span className="text-[10px] font-mono text-[#6D7CFF] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF] animate-pulse" />
                            ACTIVE
                          </span>
                        ) : (
                          <span className="text-xs text-[#555E70]">↓</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* WTI CABS: ANIMATED INGESTION PIPELINE */}
              {project.id === "wti-cabs" && (
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { step: "01", name: "EMAIL INGESTION", desc: "Corporate stream listener via IMAP & webhook queues" },
                    { step: "02", name: "AI EXTRACTION", desc: "Pydantic structured parser for dates, legs & passengers" },
                    { step: "03", name: "VALIDATION", desc: "Geographic coordinate normalization & schema checks" },
                    { step: "04", name: "RULE EVALUATION", desc: "Corporate policy matching, cost center & SLA engine" },
                    { step: "05", name: "EXECUTION", desc: "Idempotent commit into enterprise .NET Core backend" },
                  ].map((node, i) => {
                    const isNodeActive = activeStep === i;
                    return (
                      <div
                        key={node.step}
                        className={`p-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                          isNodeActive
                            ? "bg-[#141A28] border-[#6D7CFF] shadow-[0_0_20px_rgba(109,124,255,0.2)]"
                            : "bg-[#0D1017] border-[#202532] text-[#8992A4]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                              isNodeActive
                                ? "bg-[#6D7CFF] text-[#08090D]"
                                : "bg-[#161A26] text-[#555E70]"
                            }`}
                          >
                            {node.step}
                          </span>
                          <div>
                            <div
                              className={`text-xs font-semibold ${
                                isNodeActive ? "text-[#F5F7FB]" : "text-[#8992A4]"
                              }`}
                            >
                              {node.name}
                            </div>
                            <div className="text-[10px] text-[#555E70] truncate max-w-[220px] sm:max-w-[320px]">
                              {node.desc}
                            </div>
                          </div>
                        </div>

                        {isNodeActive ? (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            PROCESSING
                          </span>
                        ) : (
                          <span className="text-xs text-[#555E70]">↓</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* SHINRA: AUTOMATED CONTENT PIPELINE */}
              {project.id === "shinra" && (
                <div className="space-y-3 font-mono text-xs">
                  {[
                    { step: "01", name: "MARKET DISCOVERY", desc: "Crawls real-time trends & keyword search volumes" },
                    { step: "02", name: "STRUCTURED LLM", desc: "Generates high-ranking SEO titles, specs, & tags" },
                    { step: "03", name: "MOCKUP COMPOSITOR", desc: "Renders multi-angle mockups & dynamic artwork" },
                    { step: "04", name: "STOREFRONT DEPLOY", desc: "Pushes verified product payloads to MongoDB & S3" },
                  ].map((node, i) => {
                    const isNodeActive = activeStep === i;
                    return (
                      <div
                        key={node.step}
                        className={`p-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                          isNodeActive
                            ? "bg-[#141A28] border-[#6D7CFF] shadow-[0_0_20px_rgba(109,124,255,0.2)]"
                            : "bg-[#0D1017] border-[#202532] text-[#8992A4]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                              isNodeActive
                                ? "bg-[#6D7CFF] text-[#08090D]"
                                : "bg-[#161A26] text-[#555E70]"
                            }`}
                          >
                            {node.step}
                          </span>
                          <div>
                            <div
                              className={`text-xs font-semibold ${
                                isNodeActive ? "text-[#F5F7FB]" : "text-[#8992A4]"
                              }`}
                            >
                              {node.name}
                            </div>
                            <div className="text-[10px] text-[#555E70] truncate max-w-[220px] sm:max-w-[320px]">
                              {node.desc}
                            </div>
                          </div>
                        </div>

                        {isNodeActive ? (
                          <span className="text-[10px] font-mono text-[#6D7CFF] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF] animate-pulse" />
                            DEPLOYED
                          </span>
                        ) : (
                          <span className="text-xs text-[#555E70]">↓</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Bottom Visual Telemetry */}
              <div className="mt-6 pt-4 border-t border-[#202532]/70 flex items-center justify-between text-[11px] font-mono text-[#555E70]">
                <span>ARCHITECTURE: PRODUCTION</span>
                <span className="text-[#8992A4]">{project.technologies.slice(0, 3).join(" · ")}</span>
              </div>
            </div>
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
