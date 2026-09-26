import React from "react";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Capabilities } from "@/components/Capabilities";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { GithubProjects } from "@/components/GithubProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 overflow-x-hidden">
      {/* Interactive Animated Digital Surface Background */}
      <InteractiveBackground />

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col flex-1 w-full">
        {/* Top Floating Pill Navigation & Scroll Progress Indicator */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* 01 / Selected Work (Case Studies) */}
        <SelectedWork />

        {/* 02 / What I Build (Capabilities) */}
        <Capabilities />

        {/* Technical Stack */}
        <Stack />

        {/* 03 / About (Philosophy & Approach) */}
        <About />

        {/* 04 / Experience (WTI Cabs AI Engineer Intern) */}
        <Experience />

        {/* 05 / Achievements & Recognition */}
        <Achievements />

        {/* Open Source / Curated Repositories */}
        <GithubProjects />

        {/* 06 / Contact (Let's Build Something Intelligent) */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating Grounded AI Portfolio Assistant */}
      <AIChat />
    </main>
  );
}
