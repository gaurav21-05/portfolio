export interface GitHubProject {
  name: string;
  description: string;
  language: string;
  category: "Agentic AI" | "AI Applications" | "IoT / IIoT" | "Automation & Tooling" | "Backend";
  url: string;
  stars?: number;
  highlight?: string;
}

export const CURATED_REPOS: GitHubProject[] = [
  {
    name: "apex-ai",
    description: "Bounded Criteria → Planning → Execution → Validation workflow for autonomous coding tasks with state management, retries, and rollback verification.",
    language: "Python",
    category: "Agentic AI",
    url: "https://github.com/gaurav21-05/apex-ai",
    highlight: "Deutsche Telekom & Cursor Hackathon",
  },
  {
    name: "federated-predictive-maintenance",
    description: "Privacy-Preserving Federated Predictive Maintenance & Physics-Grounded Digital Twin for Industrial IoT.",
    language: "Python",
    category: "IoT / IIoT",
    url: "https://github.com/gaurav21-05/federated-predictive-maintenance",
    highlight: "Federated Learning & Industrial IoT",
  },
  {
    name: "podcastify",
    description: "Modern web application that transforms blog posts into multilingual podcast audio files with scraping, chaptering, translation, and neural audio synthesis.",
    language: "TypeScript",
    category: "AI Applications",
    url: "https://github.com/gaurav21-05/podcastify",
    highlight: "Audio Synthesis & Multi-Agent Scraping",
  },
  {
    name: "shadow-AI-Detector",
    description: "Detection, audit, and governance tooling to discover unauthorized shadow AI integrations and unmonitored API calls in organizational codebases.",
    language: "TypeScript",
    category: "Automation & Tooling",
    url: "https://github.com/gaurav21-05/shadow-AI-Detector",
    highlight: "AI Governance & Telemetry",
  },
  {
    name: "legal-ai-judgment",
    description: "Structured NLP and LLM pipeline for legal text analysis, statutory retrieval, and judgment reasoning synthesis.",
    language: "Python",
    category: "AI Applications",
    url: "https://github.com/gaurav21-05/legal-ai-judgment",
    highlight: "Structured Extraction & Legal NLP",
  },
  {
    name: "mnemon",
    description: "Contextual memory engine and structured state manager for autonomous AI agent conversations and long-horizon tasks.",
    language: "Python",
    category: "Agentic AI",
    url: "https://github.com/gaurav21-05/mnemon",
    highlight: "Agent Memory & State Machines",
  },
  {
    name: "gap-iot",
    description: "Industrial telemetry ingestion, time-series data handling, and device monitoring platform for connected IoT deployments.",
    language: "TypeScript",
    category: "IoT / IIoT",
    url: "https://github.com/gaurav21-05/gap-iot",
    highlight: "Time-series & Telemetry Pipeline",
  },
  {
    name: "github-portfolio-analyzer",
    description: "Automated analysis tool that scans repositories to extract architecture patterns, language breakdown, and technical depth metrics.",
    language: "JavaScript",
    category: "Automation & Tooling",
    url: "https://github.com/gaurav21-05/github-portfolio-analyzer",
    highlight: "Codebase Analysis",
  },
];
