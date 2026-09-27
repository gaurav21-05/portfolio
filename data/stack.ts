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
      "Summarization",
      "Guardrails",
      "LLM Evaluation",
      "AI Automation",
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
      "Authentication",
      "Pagination",
      "Rate Limiting",
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
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "OCI",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Frameworks & Tools",
    badge: "Ecosystem",
    description: "Agent tooling protocols, workflow automation, interface graphs, and developer tooling.",
    items: [
      "React",
      "Next.js",
      "React Flow",
      "MCP",
      "RAG",
      "n8n",
      "Amazon Bedrock",
      "Async Workflows",
      "Git",
      "Postman",
    ],
  },
  {
    title: "Concepts",
    badge: "System Design",
    description: "Proven patterns for resilient, bounded, and deterministic production software.",
    items: [
      "System Design",
      "Event-Driven Architecture",
      "Testing",
      "Observability",
      "Error Handling",
      "Retries",
      "Scaling",
    ],
  },
];
