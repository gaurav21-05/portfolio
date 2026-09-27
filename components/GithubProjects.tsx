"use client";

import React, { useState, useEffect } from "react";
import { CURATED_REPOS, GitHubProject } from "@/data/github-repos";
import { ExternalLink, Code2, Sparkles, Filter } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function GithubProjects() {
  const [repos, setRepos] = useState<GitHubProject[]>(CURATED_REPOS);
  const [filter, setFilter] = useState<string>("ALL");
  const [loading, setLoading] = useState(false);

  // Optional dynamic fetch enhancement with graceful fallback
  useEffect(() => {
    async function fetchLiveRepos() {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users/gaurav21-05/repos?per_page=30", {
          headers: { Accept: "application/vnd.github.v3+json" },
        });
        if (!res.ok) throw new Error("Rate limit or network error");
        const data = await res.json();
        if (Array.isArray(data)) {
          // Merge live star counts or metadata into curated repos
          const updated = CURATED_REPOS.map((curated) => {
            const live = data.find((r) => r.name.toLowerCase() === curated.name.toLowerCase());
            return live
              ? {
                  ...curated,
                  stars: live.stargazers_count,
                  description: live.description && live.description.length > 10 ? live.description : curated.description,
                  language: live.language || curated.language,
                }
              : curated;
          });
          setRepos(updated);
        }
      } catch {
        // Graceful fallback to vetted list
        setRepos(CURATED_REPOS);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveRepos();
  }, []);

  const categories = [
    "ALL",
    "Agentic AI",
    "AI Applications",
    "IoT / IIoT",
    "Automation & Tooling",
  ];

  const filteredRepos =
    filter === "ALL"
      ? repos
      : repos.filter((r) => r.category === filter);

  return (
    <section id="github" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#202532]">
        <div>
          <div className="font-mono text-xs text-[#6D7CFF] uppercase tracking-wider mb-3">
            04 / OPEN SOURCE & REPOSITORIES
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FB] font-sans">
            GitHub builds.
          </h2>
        </div>

        <a
          href="https://github.com/gaurav21-05"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0D1017] hover:bg-[#141A28] border border-[#202532] text-xs font-mono text-[#F5F7FB] hover:border-[#6D7CFF]/50 transition-colors group"
        >
          <GithubIcon className="w-3.5 h-3.5 text-[#8992A4] group-hover:text-[#6D7CFF]" />
          <span>github.com/gaurav21-05</span>
          <ExternalLink className="w-3 h-3 text-[#555E70] group-hover:text-[#6D7CFF]" />
        </a>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full font-mono text-xs transition-colors cursor-pointer ${
              filter === cat
                ? "bg-[#6D7CFF] text-[#08090D] font-semibold"
                : "bg-[#0D1017] text-[#8992A4] hover:text-[#F5F7FB] border border-[#202532]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[#0D1017] border border-[#202532] hover:border-[#6D7CFF]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#6D7CFF] font-semibold">
                  {repo.category}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#555E70] group-hover:text-[#6D7CFF] transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-mono text-base font-bold text-[#F5F7FB] group-hover:text-[#6D7CFF] transition-colors mb-2 truncate">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#8992A4] line-clamp-3 leading-relaxed mb-6">
                {repo.description}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#202532]/70 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#8992A4]">
                <span className="w-2 h-2 rounded-full bg-[#6D7CFF]" />
                {repo.language}
              </span>

              {repo.highlight && (
                <span className="text-[10px] text-[#555E70] truncate max-w-[150px]">
                  {repo.highlight}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
