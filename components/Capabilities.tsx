"use client";

import React from "react";
import { Cpu, Terminal, Layers, Cloud, ArrowRight, ShieldCheck, Database, GitBranch } from "lucide-react";

export function Capabilities() {
  const capabilities = [
    {
      number: "01",
      title: "AI APPLICATIONS",
      tagline: "LLM-powered products, structured extraction, RAG, memory and workflow automation.",
      icon: Cpu,
      details: [
        "Structured schema enforcement with Pydantic and JSON mode",
        "Hybrid RAG with dense & sparse vector retrieval (Qdrant)",
        "Context window optimization & long-horizon memory management",
        "Deterministic evaluation frameworks & benchmark testing",
      ],
      stackSample: "Pydantic · Qdrant · Bedrock · RAG Triad",
    },
    {
      number: "02",
      title: "AGENTIC SYSTEMS",
      tagline: "Planning, tool calling, orchestration, validation, guardrails and human approval.",
      icon: Terminal,
      details: [
        "Bounded DAG orchestration with state machine guarantees",
        "Secure tool execution sandboxed in containerized runtimes",
        "Deterministic guardrails & automated AST code validation",
        "Human-in-the-loop checkpoints with atomic rollback states",
      ],
      stackSample: "FastAPI · React Flow · Docker · Guardrails",
    },
    {
      number: "03",
      title: "FULL-STACK SYSTEMS",
      tagline: "Next.js, React, Node.js, FastAPI, REST APIs and production databases.",
      icon: Layers,
      details: [
        "High-performance App Router with server actions & ISR",
        "Asynchronous backend architectures with FastAPI & NestJS",
        "Multi-model databases: PostgreSQL, MongoDB, Neo4j, Redis",
        "Type-safe client-server contracts with end-to-end schemas",
      ],
      stackSample: "Next.js · NestJS · PostgreSQL · MongoDB",
    },
    {
      number: "04",
      title: "CLOUD & INFRASTRUCTURE",
      tagline: "AWS, Docker, CI/CD, testing, observability and scalable deployments.",
      icon: Cloud,
      details: [
        "Containerization and ephemeral sandbox lifecycle management",
        "AWS cloud deployments: S3, CloudFront CDN, EC2, Bedrock",
        "Automated CI/CD pipelines with GitHub Actions test gates",
        "Production telemetry, audit logging & error tracing",
      ],
      stackSample: "AWS · Docker · OCI · GitHub Actions",
    },
  ];

  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            02 / WHAT I BUILD
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans leading-tight">
            AI is the layer.
            <br />
            <span className="text-[#8992A4]">Engineering is the foundation.</span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-[#8992A4] max-w-md font-mono">
          Bridging the gap between raw research models and mission-critical production software.
        </p>
      </div>

      {/* Four Large Capability Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.number}
              className="relative p-8 md:p-10 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Block Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl md:text-2xl font-bold text-[#6D7CFF]">
                    {cap.number}
                  </span>
                  <div className="p-2.5 rounded-lg bg-[#141A28] border border-[#202532] text-[#8992A4] group-hover:text-[#6D7CFF] group-hover:border-[#6D7CFF]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-mono text-[#F5F7FB] tracking-tight mb-3">
                  {cap.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm md:text-base text-[#8992A4] leading-relaxed mb-6">
                  &ldquo;{cap.tagline}&rdquo;
                </p>

                {/* Detailed Architectural Points */}
                <ul className="space-y-2.5 pt-4 border-t border-[#202532]/70 text-xs md:text-sm text-[#8992A4] mb-8 font-sans">
                  {cap.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#6D7CFF] font-mono text-xs mt-0.5">✦</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Stack Badge */}
              <div className="pt-4 border-t border-[#202532]/50 flex items-center justify-between text-xs font-mono text-[#555E70]">
                <span>TECH PRIMER</span>
                <span className="text-[#8992A4]">{cap.stackSample}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
