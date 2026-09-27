export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: "Hackathon" | "Certification" | "Course";
  description: string;
  highlight?: string;
  iconName: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "leetcode-597",
    title: "LeetCode 597+ Solved",
    issuer: "LeetCode (@gauravrawatop)",
    year: "Active",
    type: "Certification",
    description: "Solved 597+ problems: 170 Easy / 319 Medium / 108 Hard. Rank 145,641 globally with 11 technical badges.",
    highlight: "108 Hard Solved · 11 Badges",
    iconName: "Code2",
  },
  {
    id: "telekom-cursor",
    title: "Deutsche Telekom & Cursor Hackathon",
    issuer: "Deutsche Telekom × Cursor",
    year: "2026",
    type: "Hackathon",
    description: "Built Apex AI, an agentic AI coding orchestration platform featuring bounded DAG workflows, sandboxed execution, and automated verification.",
    highlight: "Featured Project: Apex AI",
    iconName: "Terminal",
  },
  {
    id: "snap-ar",
    title: "Snap AR Hackathon Winner",
    issuer: "Snap Inc.",
    year: "2025",
    type: "Hackathon",
    description: "Winner at India's First Snapchat AR Hackathon (2025), creating real-time interactive computer vision and augmented reality experiences.",
    highlight: "Winner · National Level",
    iconName: "Trophy",
  },
  {
    id: "hf-agents",
    title: "Hugging Face Agents Course",
    issuer: "Hugging Face",
    year: "2026",
    type: "Course",
    description: "Fundamentals of Agents: In-depth certification covering autonomous agent architectures, tool use, reasoning traces, and multi-agent coordination.",
    highlight: "Fundamentals of Agents",
    iconName: "Cpu",
  },
  {
    id: "oci-foundations",
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    type: "Certification",
    description: "Certified proficiency in cloud computing architectures, security, identity management, compute, virtual cloud networks, and storage infrastructure.",
    highlight: "Cloud Architecture",
    iconName: "Cloud",
  },
  {
    id: "fcc-dsa",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    type: "Certification",
    description: "Comprehensive verification of algorithmic complexity, data structures, functional programming, and object-oriented design in JavaScript.",
    highlight: "Core Computer Science",
    iconName: "Code2",
  },
];
