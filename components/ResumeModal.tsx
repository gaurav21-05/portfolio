"use client";

import React, { useEffect } from "react";
import {
  X,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Code2,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gaurav Rawat Resume"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D1017] border border-[#202532] rounded-2xl shadow-2xl p-6 sm:p-10 my-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="sticky -top-6 -mt-4 -mx-6 sm:-top-10 sm:-mt-8 sm:-mx-10 px-6 sm:px-10 py-4 bg-[#0D1017]/95 backdrop-blur-md border-b border-[#202532] flex items-center justify-between z-30 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-[#F5F7FB] tracking-wider uppercase">
              GAURAV RAWAT — RESUME
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Gaurav_Rawat_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#6D7CFF] hover:bg-[#5C6CEB] text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-[#8992A4] hover:text-[#F5F7FB] hover:bg-[#202532] transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#8992A4] hover:text-[#F5F7FB] hover:bg-[#202532] transition-colors"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 font-sans text-[#8992A4]">
          {/* Header Identity & Contact */}
          <div className="pb-6 border-b border-[#202532]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F7FB] font-sans tracking-tight">
                Gaurav Rawat
              </h2>
              <span className="font-mono text-sm font-semibold text-[#6D7CFF]">
                Full-Stack AI Engineer
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#8992A4]">
              <a
                href="mailto:gauravrawatop@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#6D7CFF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#6D7CFF]" />
                <span>gauravrawatop@gmail.com</span>
              </a>

              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#6D7CFF]" />
                <span>+91-9667756590</span>
              </span>

              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8992A4]" />
                <span>New Delhi, India</span>
              </span>

              <a
                href="https://github.com/gaurav21-05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#6D7CFF] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#6D7CFF]" />
                <span>github.com/gaurav21-05</span>
              </a>

              <a
                href="https://leetcode.com/u/gauravrawatop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#6D7CFF] transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-[#6D7CFF]" />
                <span>leetcode.com/u/gauravrawatop</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-mono text-xs font-semibold text-[#6D7CFF] tracking-wider uppercase mb-2">
              Summary
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#F5F7FB]/90">
              AI-focused software developer building LLM-powered features, agentic AI systems, tool-calling
              workflows, and document-intelligence automation. Shipped AI pipelines processing{" "}
              <strong className="text-[#F5F7FB] font-semibold">3,000–5,000 emails/day</strong>, agent
              orchestration with deterministic evaluation and rollback, persistent memory for AI agents, and a
              live AI-powered e-commerce platform serving thousands of monthly visitors. Strong in Python,
              FastAPI, Node.js, PostgreSQL, AWS, Docker, prompt engineering, and AI workflow automation.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#6D7CFF] tracking-wider uppercase mb-4">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </div>

            <div className="p-5 rounded-xl bg-[#08090D] border border-[#202532] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="text-base font-bold text-[#F5F7FB]">WTI Cabs</h4>
                  <div className="text-xs font-mono text-[#6D7CFF]">AI Engineer Intern</div>
                </div>
                <div className="text-xs font-mono text-[#8992A4]">
                  July 2026 – September 2026 • New Delhi, India
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm leading-relaxed list-disc list-inside text-[#8992A4]">
                <li>
                  Built an AI-powered reservation automation pipeline processing{" "}
                  <strong className="text-[#F5F7FB]">3,000–5,000 emails/day</strong>, extracting booking
                  requirements and auto-creating reservations in an existing .NET backend.
                </li>
                <li>
                  Designed a five-stage pipeline —{" "}
                  <code className="text-[#6D7CFF] font-mono text-xs">
                    ingestion → AI extraction → validation → corporate-rule evaluation → execution
                  </code>{" "}
                  — with configurable rules and structured outputs.
                </li>
                <li>
                  Persisted email, reservation, decision, and feedback data in PostgreSQL; containerized with
                  Docker and deployed on AWS for production-scale processing.
                </li>
              </ul>
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#6D7CFF] tracking-wider uppercase mb-4">
              <Terminal className="w-4 h-4" />
              <span>Key Projects</span>
            </div>

            <div className="space-y-4">
              {/* Shinra */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#08090D] border border-[#202532] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-[#F5F7FB]">Shinra</h4>
                    <span className="text-xs text-[#8992A4]">— AI E-commerce & Content Automation</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold">
                      Live
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#8992A4]">Jan 2026 – Present</span>
                </div>
                <div className="font-mono text-xs text-[#6D7CFF]">
                  Next.js, NestJS, Node.js, MongoDB, TypeORM, AWS
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm leading-relaxed list-disc list-inside text-[#8992A4]">
                  <li>
                    Built and operate a live production e-commerce platform serving thousands of monthly visitors,
                    with AI-driven product and content automation.
                  </li>
                  <li>
                    Automated weekly market research, SEO-rich product content, dynamic product generation, and
                    AI-assisted poster mockup generation.
                  </li>
                  <li>
                    Developed REST APIs and optimized queries for{" "}
                    <strong className="text-[#F5F7FB]">10,000+ product records</strong>; implemented automated CI/CD
                    deployment and production infrastructure.
                  </li>
                </ul>
              </div>

              {/* Apex AI */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#08090D] border border-[#202532] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-[#F5F7FB]">Apex AI</h4>
                    <span className="text-xs text-[#8992A4]">— Agentic AI Coding Orchestration</span>
                  </div>
                  <span className="text-xs font-mono text-[#8992A4]">24–26 Jul 2026</span>
                </div>
                <div className="font-mono text-xs text-[#6D7CFF]">
                  Python, FastAPI, LLMs, React Flow, Docker
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm leading-relaxed list-disc list-inside text-[#8992A4]">
                  <li>
                    Built a bounded Criteria → Planning → Execution → Validation agent workflow for autonomous
                    coding tasks, with state management, retries, human approval gates, and guardrails.
                  </li>
                  <li>
                    Implemented deterministic evaluation using test exit codes instead of LLM judgment, plus rollback
                    and post-rollback verification.
                  </li>
                  <li>
                    Built FastAPI REST APIs and background execution with workflow visualization; added{" "}
                    <strong className="text-[#F5F7FB]">49 automated tests</strong> covering orchestration and APIs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#6D7CFF] tracking-wider uppercase mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="p-5 rounded-xl bg-[#08090D] border border-[#202532]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-base font-bold text-[#F5F7FB]">
                  Guru Gobind Singh Indraprastha University (GGSIPU)
                </h4>
                <span className="text-xs font-mono text-[#8992A4]">New Delhi, India</span>
              </div>
              <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm text-[#F5F7FB] font-medium">
                  B.Tech. — Industrial IoT (IIoT)
                </span>
                <span className="text-xs font-mono text-[#6D7CFF]">Sept 2023 – July 2027</span>
              </div>
              <p className="mt-2 text-xs font-mono text-[#8992A4]">
                Coursework: Data Structures & Algorithms, DBMS, Cloud Computing, IoT Systems
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#6D7CFF] tracking-wider uppercase mb-4">
              <Layers className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]">
                <span className="text-[#6D7CFF] font-semibold block mb-1">AI / LLMs</span>
                <span className="text-[#8992A4] leading-relaxed">
                  Prompt Engineering, Agentic AI, Agent Orchestration, Tool/Function Calling, Memory & Context
                  Management, Structured Extraction, Guardrails, LLM Evaluation, AI Automation
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]">
                <span className="text-[#6D7CFF] font-semibold block mb-1">Backend</span>
                <span className="text-[#8992A4] leading-relaxed">
                  Python, FastAPI, Node.js, Express.js, NestJS, REST APIs, Authentication, Pagination, Rate Limiting
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]">
                <span className="text-[#6D7CFF] font-semibold block mb-1">Databases</span>
                <span className="text-[#8992A4] leading-relaxed">
                  PostgreSQL, MongoDB, MySQL, SQLite, Qdrant, Neo4j, FalkorDB, TypeORM
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]">
                <span className="text-[#6D7CFF] font-semibold block mb-1">Cloud / DevOps</span>
                <span className="text-[#8992A4] leading-relaxed">
                  AWS (EC2, S3, Lambda), Docker, OCI, CI/CD, GitHub Actions
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]">
                <span className="text-[#6D7CFF] font-semibold block mb-1">Frameworks & Tools</span>
                <span className="text-[#8992A4] leading-relaxed">
                  React, Next.js, React Flow, MCP, RAG, n8n, Amazon Bedrock, Async Workflows, Git, Postman
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#08090D] border border-[#202532]">
                <span className="text-[#6D7CFF] font-semibold block mb-1">Concepts</span>
                <span className="text-[#8992A4] leading-relaxed">
                  System Design, Event-Driven Architecture, Testing, Observability, Error Handling, Retries, Scaling
                </span>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#6D7CFF] tracking-wider uppercase mb-4">
              <Award className="w-4 h-4" />
              <span>Achievements & Certifications</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-[#8992A4]">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08090D] border border-[#202532]">
                <CheckCircle2 className="w-4 h-4 text-[#6D7CFF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F7FB]">Deutsche Telekom & Cursor Hackathon:</strong> Built Apex AI,
                  an agentic AI coding orchestration platform with planning, execution, validation, rollback, and human approval.
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08090D] border border-[#202532]">
                <CheckCircle2 className="w-4 h-4 text-[#6D7CFF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F7FB]">Snap AR Hackathon Winner (2025):</strong> India’s First Snapchat
                  AR Hackathon — built an AR lens using face tracking, computer vision, and real-time 3D rendering.
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08090D] border border-[#202532]">
                <CheckCircle2 className="w-4 h-4 text-[#6D7CFF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F7FB]">Hugging Face Agents Course:</strong> Fundamentals of Agents (2026).
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08090D] border border-[#202532]">
                <CheckCircle2 className="w-4 h-4 text-[#6D7CFF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F7FB]">Oracle Cloud Infrastructure 2025 Certified Foundations Associate (2025).</strong>
                </span>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#08090D] border border-[#202532]">
                <CheckCircle2 className="w-4 h-4 text-[#6D7CFF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F7FB]">freeCodeCamp:</strong> JavaScript Algorithms and Data Structures (2023).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 pt-6 border-t border-[#202532] flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#555E70]">
            Available for AI Engineering Roles (2026)
          </span>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Gaurav_Rawat_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#F5F7FB] hover:bg-[#FFFFFF] text-[#08090D] font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-md group"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
