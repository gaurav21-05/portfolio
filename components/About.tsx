"use client";

import React from "react";
import { Terminal, CheckCircle2, ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Label */}
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-4">
            03 / ABOUT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans leading-[1.05]">
            Built for the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FB] to-[#8992A4]">
              messy middle.
            </span>
          </h2>

          <div className="mt-8 p-4 rounded-lg bg-[#0D1017] border border-[#202532] font-mono text-xs text-[#8992A4] space-y-2">
            <div className="flex items-center justify-between text-[#F5F7FB] pb-2 border-b border-[#202532]">
              <span>PHILOSOPHY</span>
              <span className="text-[#6D7CFF]">SYSTEMS-FIRST</span>
            </div>
            <p className="leading-relaxed">
              Models are stochastic. Products must be deterministic. The engineering layer
              makes the difference.
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Body & Stack Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          <div className="space-y-6 text-lg sm:text-xl text-[#8992A4] leading-relaxed font-normal">
            <p className="text-[#F5F7FB] font-medium">
              &ldquo;I work across the boundary between AI experimentation and production software.
              That means designing the model workflow, the API, the database, the deployment and
              the product experience as one system.&rdquo;
            </p>

            <p>
              &ldquo;My current stack spans Python, FastAPI, Node.js, Next.js, PostgreSQL, MongoDB,
              AWS and Docker, with a focus on agent orchestration, tool calling, structured
              extraction, memory, evaluation and automation.&rdquo;
            </p>
          </div>

          {/* Core Principles Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#202532]">
            <div className="p-4 rounded-lg bg-[#0D1017] border border-[#202532]">
              <div className="font-mono text-xs text-[#6D7CFF] mb-1">01 / BOUNDED AGENTS</div>
              <div className="text-sm font-semibold text-[#F5F7FB] mb-1">
                Deterministic State Machines
              </div>
              <p className="text-xs text-[#8992A4] leading-relaxed">
                Replacing chaotic conversational loops with verified DAG execution, static
                acceptance criteria, and atomic rollbacks.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0D1017] border border-[#202532]">
              <div className="font-mono text-xs text-[#6D7CFF] mb-1">02 / END-TO-END OWNERSHIP</div>
              <div className="text-sm font-semibold text-[#F5F7FB] mb-1">
                From Prompt to Production Edge
              </div>
              <p className="text-xs text-[#8992A4] leading-relaxed">
                Owning database migrations, async queues, WebSocket telemetry, and containerized
                cloud deployments directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
