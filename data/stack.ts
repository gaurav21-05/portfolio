export interface StackCategory {
  title: string;
  badge: string;
  description: string;
  items: string[];
}

export const ENGINEERING_STACK: StackCategory[] = [
  {
    title: "AI / LLM",
    badge: "Intelligence Layer",
    description: "Architecting autonomous agents, structured inference pipelines, and deterministic guardrails.",
    items: [
      "Prompt Engineering",
      "Agentic AI",
      "Agent Orchestration",
      "Tool / Function Calling",
      "Memory & Context Management",
      "Structured Extraction",
      "RAG",
      "Guardrails",
      "LLM Evaluation",
    ],
  },
  {
    title: "Backend",
    badge: "Core Systems",
    description: "High-throughput asynchronous services, distributed workers, and robust API design.",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    badge: "Data & Storage",
    description: "Relational integrity, document flexibility, vector search, and graph topologies.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Qdrant",
      "Neo4j",
      "FalkorDB",
      "TypeORM",
    ],
  },
  {
    title: "Cloud / DevOps",
    badge: "Infrastructure",
    description: "Containerized runtimes, continuous pipelines, and observable cloud environments.",
    items: [
      "AWS",
      "Docker",
      "OCI",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Frontend",
    badge: "Product UI",
    description: "Production web applications, accessible design systems, and fast client-side runtimes.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Flow",
    ],
  },
  {
    title: "Architecture",
    badge: "System Design",
    description: "Proven patterns for resilient, bounded, and deterministic production software.",
    items: [
      "Bounded DAG Orchestration",
      "Sandboxed Runtimes",
      "Async Worker Queues",
      "Event-Driven Pipelines",
      "Idempotent API Design",
      "Human-in-the-Loop Gates",
    ],
  },
];
