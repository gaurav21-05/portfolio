"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#161B26] hover:bg-[#202532] border border-[#202532] text-xs font-mono transition-all duration-200 cursor-pointer ${className}`}
      aria-label={`Switch to ${isLight ? "Dark" : "Cream"} mode`}
      title={`Switch to ${isLight ? "Dark" : "Cream"} mode`}
    >
      <span className="relative flex items-center justify-center w-3.5 h-3.5">
        {isLight ? (
          <Sun className="w-3.5 h-3.5 text-amber-500 transition-transform rotate-0 scale-100" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#8992A4] hover:text-[#6D7CFF] transition-transform -rotate-12 scale-100" />
        )}
      </span>
      <span className="text-[11px] font-mono text-[#8992A4] uppercase tracking-wider hidden sm:inline">
        {isLight ? "Cream" : "Dark"}
      </span>
    </button>
  );
}
