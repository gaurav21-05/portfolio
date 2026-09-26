"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * TUNABLE CONFIGURATION
 * Adjust these values to fine-tune particle density, cursor dynamics,
 * shatter strength, line visibility, and physics behavior.
 */
export const BACKGROUND_CONFIG = {
  // Particle density scaling based on viewport width
  desktopParticles: 130, // Screens >= 1024px
  laptopParticles: 90,   // Screens >= 768px
  mobileParticles: 45,   // Screens < 768px

  // Cursor field dynamics
  cursorRadius: 155,       // Interaction radius in pixels (120-180px)
  cursorLag: 0.12,         // Smooth interpolation factor (0.05 = heavy lag, 0.3 = fast)
  repulsionStrength: 4.2,  // Force pushing particles away from cursor
  shatterBurstFactor: 2.1, // Burst multiplier when cursor moves quickly
  burstSpeedThreshold: 22, // Cursor speed needed to trigger micro-burst
  burstDurationMs: 360,    // Duration of burst in milliseconds

  // Spring physics
  springReturnForce: 0.034,// Force pulling particles back to origin
  friction: 0.89,          // Velocity damping (0.85 = high friction, 0.95 = bouncy)
  naturalDriftSpeed: 0.22, // Subtle ambient wander speed when idle

  // Connecting lines
  connectionDistance: 105, // Max distance to draw network lines between particles
  baseLineOpacity: 0.05,   // Idle line opacity (subtle)
  activeLineOpacity: 0.20, // Max line opacity when excited by cursor
  particleBaseRadius: 1.4, // Dot radius in pixels

  // Theme Colors
  dark: {
    particleNormal: "rgba(225, 235, 255, 0.15)",
    particleActive: "rgba(109, 124, 255, 0.65)",
    lineColorRgb: "109, 124, 255", // Accent indigo RGB
    radialGlow: "rgba(109, 124, 255, 0.07)",
  },
  light: {
    // Cream light mode
    particleNormal: "rgba(35, 30, 25, 0.16)",
    particleActive: "rgba(72, 86, 223, 0.60)",
    lineColorRgb: "72, 86, 223", // Cobalt RGB
    radialGlow: "rgba(72, 86, 223, 0.05)",
  },
};

interface Particle {
  originX: number;
  originY: number;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  noiseAngle: number;
  noiseSpeed: number;
  rotation: number;
  activeAlpha: number;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOnly = window.matchMedia("(pointer: coarse)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking via refs
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      lastX: -1000,
      lastY: -1000,
      speed: 0,
      isOver: false,
      burstEndTime: 0,
    };

    // Scroll tracking
    let scrollY = window.scrollY || 0;

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    // Pointer move listener with speed tracking
    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dx = e.clientX - mouse.lastX;
      const dy = e.clientY - mouse.lastY;
      mouse.speed = Math.hypot(dx, dy);

      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
      mouse.isOver = true;

      // Detect quick motion for subtle shatter burst
      if (mouse.speed > BACKGROUND_CONFIG.burstSpeedThreshold) {
        mouse.burstEndTime = now + BACKGROUND_CONFIG.burstDurationMs;
      }
    };

    const handlePointerLeave = () => {
      mouse.isOver = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || 0;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize particles
    let particles: Particle[] = [];

    const getParticleCount = () => {
      if (width < 768) return BACKGROUND_CONFIG.mobileParticles;
      if (width < 1024) return BACKGROUND_CONFIG.laptopParticles;
      return BACKGROUND_CONFIG.desktopParticles;
    };

    const initParticles = () => {
      const count = getParticleCount();
      particles = [];

      // Organize loosely on a soft Poisson / jittered grid
      const cols = Math.ceil(Math.sqrt(count * (width / height)));
      const rows = Math.ceil(count / cols);
      const cellW = width / cols;
      const cellH = height / rows;

      for (let i = 0; i < count; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);

        // Grid center with organic jitter
        const jitterX = (Math.random() - 0.5) * cellW * 0.75;
        const jitterY = (Math.random() - 0.5) * cellH * 0.75;
        const ox = (col + 0.5) * cellW + jitterX;
        const oy = (row + 0.5) * cellH + jitterY;

        particles.push({
          originX: ox,
          originY: oy,
          baseX: ox,
          baseY: oy,
          x: ox,
          y: oy,
          vx: 0,
          vy: 0,
          size: BACKGROUND_CONFIG.particleBaseRadius * (0.8 + Math.random() * 0.5),
          noiseAngle: Math.random() * Math.PI * 2,
          noiseSpeed: 0.005 + Math.random() * 0.008,
          rotation: 0,
          activeAlpha: 0,
        });
      }
    };

    initParticles();

    // Render loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Current theme color profile
      const isLightTheme = document.documentElement.classList.contains("light") ||
        document.documentElement.getAttribute("data-theme") === "light";
      const colors = isLightTheme ? BACKGROUND_CONFIG.light : BACKGROUND_CONFIG.dark;

      // Calculate scroll intensity factor
      // Top (Hero) = 1.0, Projects (~800px) = 0.55, Bottom = 0.32
      const heroHeight = 850;
      const scrollFactor = Math.max(
        0.32,
        Math.min(1.0, 1.0 - (scrollY / heroHeight) * 0.55)
      );

      // Interpolate cursor with smooth lag
      mouse.x += (mouse.targetX - mouse.x) * BACKGROUND_CONFIG.cursorLag;
      mouse.y += (mouse.targetY - mouse.y) * BACKGROUND_CONFIG.cursorLag;

      // Check if burst is currently active
      const isBursting = time < mouse.burstEndTime;
      const burstProgress = isBursting
        ? (mouse.burstEndTime - time) / BACKGROUND_CONFIG.burstDurationMs
        : 0;
      const currentBurstFactor = 1.0 + burstProgress * (BACKGROUND_CONFIG.shatterBurstFactor - 1.0);

      const effectiveRadius = BACKGROUND_CONFIG.cursorRadius * (isBursting ? 1.25 : 1.0);
      const effectiveRepulsion =
        BACKGROUND_CONFIG.repulsionStrength * currentBurstFactor * scrollFactor;

      // Draw subtle hero ambient glow if in hero section
      if (scrollY < heroHeight && !prefersReducedMotion) {
        const glowOpacity = Math.max(0, 1 - scrollY / heroHeight);
        const glowX = mouse.isOver && !isTouchOnly ? mouse.x : width * 0.5;
        const glowY = mouse.isOver && !isTouchOnly ? mouse.y : height * 0.35;
        const radGlow = ctx.createRadialGradient(glowX, glowY, 10, glowX, glowY, 320);
        radGlow.addColorStop(0, colors.radialGlow);
        radGlow.addColorStop(1, "transparent");
        ctx.fillStyle = radGlow;
        ctx.globalAlpha = glowOpacity;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1.0;
      }

      // Physics update & draw
      const numParticles = particles.length;

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // 1. Natural idle Brownian drift around original anchor
          p.noiseAngle += p.noiseSpeed;
          p.baseX = p.originX + Math.cos(p.noiseAngle) * (cellRadius(width) * 0.35);
          p.baseY = p.originY + Math.sin(p.noiseAngle * 1.3) * (cellRadius(height) * 0.35);

          // 2. Cursor proximity & shatter dispersion
          if (mouse.isOver && !isTouchOnly) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < effectiveRadius && dist > 0.01) {
              const normalDist = dist / effectiveRadius;
              // Non-linear ease-out curve for sudden crisp shatter impulse
              const force = Math.pow(1 - normalDist, 2) * effectiveRepulsion;
              const angle = Math.atan2(dy, dx);

              p.vx += Math.cos(angle) * force;
              p.vy += Math.sin(angle) * force;

              // Micro-rotation during shatter
              p.rotation += (Math.random() - 0.5) * 0.15 * (1 - normalDist);

              // Energize particle
              p.activeAlpha = Math.min(1.0, p.activeAlpha + (1 - normalDist) * 0.7);
            }
          }

          // 3. Spring restoration force returning to baseX, baseY
          const returnDx = p.baseX - p.x;
          const returnDy = p.baseY - p.y;
          p.vx += returnDx * BACKGROUND_CONFIG.springReturnForce;
          p.vy += returnDy * BACKGROUND_CONFIG.springReturnForce;

          // 4. Friction damping
          p.vx *= BACKGROUND_CONFIG.friction;
          p.vy *= BACKGROUND_CONFIG.friction;

          // 5. Update position
          p.x += p.vx;
          p.y += p.vy;

          // 6. Slowly recover rotation and active excitation
          p.rotation *= 0.92;
          p.activeAlpha *= 0.94;
        }

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        if (p.rotation !== 0) ctx.rotate(p.rotation);

        // Blend between normal color and active accent color
        if (p.activeAlpha > 0.05) {
          ctx.fillStyle = colors.particleActive;
          ctx.shadowColor = `rgba(${colors.lineColorRgb}, ${p.activeAlpha * 0.4})`;
          ctx.shadowBlur = 6 * p.activeAlpha;
        } else {
          ctx.fillStyle = colors.particleNormal;
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        // Tiny geometric square or circle for technical aesthetic
        ctx.arc(0, 0, p.size * (1 + p.activeAlpha * 0.4), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw dynamic connecting lines
      const maxDist = BACKGROUND_CONFIG.connectionDistance;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < numParticles; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < numParticles; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            // Distance ratio: 1 when close, 0 at limit
            const proximityRatio = 1 - dist / maxDist;

            // Excitation boost if either node is repelled/active
            const excitement = Math.max(p1.activeAlpha, p2.activeAlpha);
            const lineOpacity = Math.max(
              BACKGROUND_CONFIG.baseLineOpacity * proximityRatio,
              excitement * BACKGROUND_CONFIG.activeLineOpacity * proximityRatio
            );

            if (lineOpacity > 0.01) {
              ctx.strokeStyle = `rgba(${colors.lineColorRgb}, ${lineOpacity * scrollFactor})`;
              ctx.lineWidth = 0.65;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-90 transition-opacity duration-700"
      />
    </div>
  );
}

function cellRadius(dim: number): number {
  return Math.min(24, Math.max(12, dim * 0.015));
}
