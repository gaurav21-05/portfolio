"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Terminal, Cpu, Layers } from "lucide-react";

/**
 * TUNABLE AVATAR CONFIGURATION
 * Adjust these values to easily modify parallax depth, floating duration,
 * and badge appearance.
 */
export const AVATAR_CONFIG = {
  // Parallax displacement on cursor movement (in pixels, 5-12px recommended)
  parallaxStrength: 9,

  // Maximum tilt angle (in degrees, 1-3 deg recommended)
  maxTiltAngle: 2.2,

  // Floating idle animation speed (seconds for full cycle, 4-6s recommended)
  floatCycleDuration: 5.2,

  // Floating vertical amplitude (in pixels, 4-8px recommended)
  floatAmplitude: 6,

  // Smoothness of cursor follow (0.05 = heavier lag, 0.15 = snappier)
  damping: 0.08,
};

export function Avatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Parallax transform state stored in ref for 60fps performance
  const transformRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    currentRotate: 0,
    targetRotate: 0,
  });

  const avatarWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }

    let animationFrameId: number;

    // Window mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Normalized coordinates from center (-1 to 1)
      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      // Subtle opposite parallax displacement
      transformRef.current.targetX = -normX * AVATAR_CONFIG.parallaxStrength;
      transformRef.current.targetY = -normY * (AVATAR_CONFIG.parallaxStrength * 0.7);
      transformRef.current.targetRotate = -normX * AVATAR_CONFIG.maxTiltAngle;
    };

    const handleMouseLeave = () => {
      transformRef.current.targetX = 0;
      transformRef.current.targetY = 0;
      transformRef.current.targetRotate = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // 60FPS Spring-like animation loop for parallax
    const updateMotion = () => {
      const state = transformRef.current;

      state.currentX += (state.targetX - state.currentX) * AVATAR_CONFIG.damping;
      state.currentY += (state.targetY - state.currentY) * AVATAR_CONFIG.damping;
      state.currentRotate +=
        (state.targetRotate - state.currentRotate) * AVATAR_CONFIG.damping;

      if (avatarWrapperRef.current) {
        avatarWrapperRef.current.style.transform = `translate3d(${state.currentX.toFixed(
          2
        )}px, ${state.currentY.toFixed(2)}px, 0) rotate(${state.currentRotate.toFixed(
          2
        )}deg)`;
      }

      animationFrameId = requestAnimationFrame(updateMotion);
    };

    animationFrameId = requestAnimationFrame(updateMotion);

    return () => {
      cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] mx-auto select-none pointer-events-none"
    >
      {/* Soft Dual Accent Glow Behind Avatar */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(109, 124, 255, 0.28) 0%, rgba(245, 158, 11, 0.12) 40%, transparent 70%)",
        }}
      />

      {/* Floating Wrapper (Idle organic bobbing) */}
      <div
        className={`relative w-full ${
          !prefersReducedMotion ? "animate-subtle-float" : ""
        }`}
        style={{
          animationDuration: `${AVATAR_CONFIG.floatCycleDuration}s`,
        }}
      >
        {/* Parallax Wrapper (Cursor response) */}
        <div
          ref={avatarWrapperRef}
          className="relative w-full aspect-[4/5] max-w-[310px] sm:max-w-[370px] lg:max-w-[420px] mx-auto will-change-transform"
        >
          {/* Ambient card aura & border frame */}
          <div className="relative w-full h-full rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-[#6D7CFF]/30 to-amber-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(109,124,255,0.18)] backdrop-blur-sm group">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0D1017] border border-[#202532]/70 shadow-inner">
              <Image
                src="/avatar.jpg"
                alt="Gaurav Rawat Avatar"
                fill
                priority
                sizes="(max-width: 640px) 310px, (max-width: 1024px) 370px, 420px"
                className="object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle cinematic gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/75 via-transparent to-transparent pointer-events-none" />
              {/* Subtle glass reflection highlight on top-left */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Optional Subtle Tech Badges around Avatar */}
          {/* Badge 1: Top-Left (Shoulder Height) */}
          <div
            className="absolute top-10 -left-2 sm:top-14 sm:-left-4 z-20 pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0D1017]/90 backdrop-blur-md border border-[#202532] shadow-lg text-[10px] font-mono text-[#8992A4] hover:text-[#F5F7FB] hover:border-[#6D7CFF]/50 transition-all duration-300"
            style={{
              animation: !prefersReducedMotion
                ? `subtle-badge-float ${AVATAR_CONFIG.floatCycleDuration * 1.1}s ease-in-out infinite alternate`
                : "none",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D7CFF] animate-pulse" />
            <Cpu className="w-3 h-3 text-[#6D7CFF]" />
            <span className="font-semibold text-[#F5F7FB] tracking-wider">AI SYSTEMS</span>
          </div>

          {/* Badge 2: Top-Right (Shoulder Height) */}
          <div
            className="absolute top-16 -right-2 sm:top-22 sm:-right-4 z-20 pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0D1017]/90 backdrop-blur-md border border-[#202532] shadow-lg text-[10px] font-mono text-[#8992A4] hover:text-[#F5F7FB] hover:border-[#6D7CFF]/50 transition-all duration-300"
            style={{
              animation: !prefersReducedMotion
                ? `subtle-badge-float ${AVATAR_CONFIG.floatCycleDuration * 0.9}s ease-in-out infinite alternate-reverse`
                : "none",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="font-semibold text-[#F5F7FB] tracking-wider">AGENTIC AI</span>
          </div>

          {/* Badge 3: Bottom-Right */}
          <div
            className="absolute bottom-6 -right-1 sm:bottom-8 sm:-right-3 z-20 pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0D1017]/90 backdrop-blur-md border border-[#202532] shadow-lg text-[10px] font-mono text-[#8992A4] hover:text-[#F5F7FB] hover:border-[#6D7CFF]/50 transition-all duration-300"
            style={{
              animation: !prefersReducedMotion
                ? `subtle-badge-float ${AVATAR_CONFIG.floatCycleDuration * 1.25}s ease-in-out infinite alternate`
                : "none",
            }}
          >
            <Layers className="w-3 h-3 text-[#6D7CFF]" />
            <span className="tracking-wider text-[#8992A4]">FULL-STACK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
