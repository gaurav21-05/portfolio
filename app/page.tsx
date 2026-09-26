import React from "react";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EngineeringProof } from "@/components/EngineeringProof";
import { SelectedWork } from "@/components/SelectedWork";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { GithubProjects } from "@/components/GithubProjects";
import { Achievements } from "@/components/Achievements";
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

        {/* 1. HERO */}
        <Hero />

        {/* 2. ENGINEERING PROOF */}
        <EngineeringProof />

        {/* 3. SELECTED WORK */}
        <SelectedWork />

        {/* 4. EXPERIENCE */}
        <Experience />

        {/* 5. ENGINEERING STACK */}
        <Stack />

        {/* 6. GITHUB BUILDS */}
        <GithubProjects />

        {/* 7. ACHIEVEMENTS */}
        <Achievements />

        {/* 8. CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </div>

      {/* Floating Grounded AI Portfolio Assistant */}
      <AIChat />
    </main>
  );
}
