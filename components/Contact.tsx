"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "gauravrawatop@gmail.com";
  const githubUrl = "https://github.com/gaurav21-05";
  const linkedinUrl = "https://www.linkedin.com/in/gaurav-rawat-41293928b/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Construct mailto link with prefilled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || "Engineering Colleague"}`);
    const body = encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#6D7CFF]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Contact Links */}
        <div className="lg:col-span-6">
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-4">
            06 / GET IN TOUCH
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F7FB] font-sans leading-[0.95] mb-8 uppercase">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FB] via-[#F5F7FB] to-[#6D7CFF]">
              INTELLIGENT.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8992A4] max-w-lg mb-10 leading-relaxed font-sans">
            Open to full-time roles, freelance projects, and interesting collaborations.
            Based in New Delhi — working with teams globally.
          </p>

          {/* Quick Contact Cards */}
          <div className="space-y-3 font-mono text-xs">
            {/* Copyable Email Card */}
            <div className="p-4 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#141A28] border border-[#202532] text-[#6D7CFF]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#555E70] uppercase">Direct Email</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-[#F5F7FB] hover:text-[#6D7CFF] transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161B26] hover:bg-[#202532] border border-[#202532] text-xs text-[#8992A4] hover:text-[#F5F7FB] transition-colors cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social / Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#8992A4] group-hover:text-[#6D7CFF]" />
                  <span className="text-xs font-semibold text-[#F5F7FB]">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555E70] group-hover:text-[#6D7CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#8992A4] group-hover:text-[#6D7CFF]" />
                  <span className="text-xs font-semibold text-[#F5F7FB]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555E70] group-hover:text-[#6D7CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-6">
          <div className="p-8 md:p-10 rounded-xl bg-[#0D1017] border border-[#202532]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#202532]">
              <div className="font-mono text-xs uppercase tracking-wider text-[#F5F7FB] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#6D7CFF]" />
                <span>START A CONVERSATION</span>
              </div>
              <span className="text-[10px] font-mono text-[#555E70]">RESPONSE &lt; 24H</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#8992A4] mb-1.5 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090D] border border-[#202532] focus:border-[#6D7CFF] text-sm text-[#F5F7FB] placeholder:text-[#555E70] font-sans focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8992A4] mb-1.5 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090D] border border-[#202532] focus:border-[#6D7CFF] text-sm text-[#F5F7FB] placeholder:text-[#555E70] font-sans focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8992A4] mb-1.5 uppercase">
                  Message / Project Scope
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about what you are looking to build or discuss..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090D] border border-[#202532] focus:border-[#6D7CFF] text-sm text-[#F5F7FB] placeholder:text-[#555E70] font-sans focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#6D7CFF] hover:bg-[#828EFF] text-[#08090D] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-[#6D7CFF]/20 group"
              >
                <span>Let&apos;s talk →</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
