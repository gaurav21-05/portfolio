export interface PresetPrompt {
  label: string;
  query: string;
}

export const PRESET_PROMPTS: PresetPrompt[] = [
  { label: "AI Projects", query: "What AI projects has Gaurav built?" },
  { label: "WTI Cabs", query: "What did he build at WTI Cabs?" },
  { label: "Agentic AI", query: "Which project demonstrates agentic AI?" },
  { label: "Tech Stack", query: "What technologies does he use?" },
  { label: "AWS & Cloud", query: "Does he have AWS experience?" },
  { label: "Full-Stack", query: "Show me his full-stack projects." },
];

export function answerPortfolioQuery(query: string): string {
  const q = query.toLowerCase().trim();

  // Agentic AI query
  if (
    q.includes("agentic") ||
    q.includes("apex") ||
    q.includes("orchestrat") ||
    q.includes("dag") ||
    q.includes("telekom") ||
    q.includes("cursor")
  ) {
    return `Apex AI is Gaurav's flagship agentic project, built for the Deutsche Telekom & Cursor Hackathon. It implements a bounded DAG orchestration workflow: Criteria → Planning → Execution → Validation → Rollback/Approval. Rather than unconstrained loops, it runs tasks inside isolated Docker sandboxes and enforces human approval alongside 49 automated test suites.`;
  }

  // WTI Cabs query
  if (
    q.includes("wti") ||
    q.includes("cabs") ||
    q.includes("intern") ||
    q.includes("email") ||
    q.includes("reservation") ||
    q.includes("booking")
  ) {
    return `At WTI Cabs (July–Sept 2026), Gaurav served as an AI Engineer Intern. He engineered a production AI pipeline that processes 3,000–5,000 corporate booking emails daily. The system ingests emails, performs structured LLM extraction for passenger and itinerary data, verifies corporate travel policies, and commits reservations directly into an enterprise .NET backend with sub-3 second latency.`;
  }

  // Shinra / E-commerce query
  if (
    q.includes("shinra") ||
    q.includes("ecommerce") ||
    q.includes("e-commerce") ||
    q.includes("poster") ||
    q.includes("mockup") ||
    q.includes("catalog")
  ) {
    return `Shinra (https://shinra.in) is Gaurav's live production e-commerce platform with over 10,000+ structured product records. It combines automated market research, structured SEO product generation, and AI-assisted poster mockups with a high-speed Next.js frontend, NestJS backend microservices, and AWS S3/CloudFront delivery.`;
  }

  // AWS / Cloud / DevOps query
  if (
    q.includes("aws") ||
    q.includes("cloud") ||
    q.includes("docker") ||
    q.includes("oci") ||
    q.includes("devops") ||
    q.includes("deploy")
  ) {
    return `Yes! Gaurav has hands-on production cloud and infrastructure experience:
• AWS: S3, CloudFront CDN, EC2 deployments, and Amazon Bedrock.
• Docker: Containerized sandboxes for Apex AI and production microservices for WTI Cabs.
• OCI: Certified Oracle Cloud Infrastructure Foundations Associate.
• CI/CD: Automated GitHub Actions pipelines with testing and linting gates.`;
  }

  // Full-Stack query
  if (
    q.includes("full-stack") ||
    q.includes("fullstack") ||
    q.includes("frontend") ||
    q.includes("backend")
  ) {
    return `Gaurav designs both the intelligence layer and the application foundation:
• Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS, React Flow.
• Backend: Python (FastAPI), Node.js, Express.js, NestJS.
• Databases: PostgreSQL, MongoDB, Qdrant (vector), Neo4j, FalkorDB.
His project Shinra is a prime example: a full-stack Next.js + NestJS + MongoDB system handling 10,000+ products.`;
  }

  // All AI projects query
  if (
    q.includes("project") ||
    q.includes("build") ||
    q.includes("ai projects") ||
    q.includes("things")
  ) {
    return `Gaurav has built several notable production AI systems:
1. Apex AI — Bounded agentic coding orchestration with 49 automated tests.
2. WTI Cabs Pipeline — High-throughput email reservation automation (3k–5k emails/day) to .NET backend.
3. Shinra (shinra.in) — Live production AI-driven e-commerce platform with 10k+ records.
4. Federated Predictive Maintenance — IIoT physics-grounded digital twin with federated learning.
5. Podcastify — Multilingual podcast audio generator from blog posts.
6. Shadow AI Detector — Security auditing tool for unauthorized AI API usage.`;
  }

  // Tech stack / languages query
  if (
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("skill") ||
    q.includes("language") ||
    q.includes("python") ||
    q.includes("framework")
  ) {
    return `Gaurav's production engineering stack spans:
• AI & Agents: Agent Orchestration, Tool Calling, Structured Extraction, RAG, Guardrails, LLM Evaluation.
• Backend: Python, FastAPI, Node.js, Express, NestJS, REST APIs.
• Databases: PostgreSQL, MongoDB, Qdrant (Vector), MySQL, SQLite, Neo4j, FalkorDB.
• Cloud: AWS, Docker, OCI, CI/CD, GitHub Actions.
• Frontend: Next.js, React, TypeScript, Tailwind CSS, React Flow.`;
  }

  // Achievements / Hackathons query
  if (
    q.includes("achievement") ||
    q.includes("hackathon") ||
    q.includes("winner") ||
    q.includes("certif") ||
    q.includes("award")
  ) {
    return `Gaurav's verified achievements include:
• Deutsche Telekom & Cursor Hackathon — Built Apex AI.
• Snap AR Hackathon Winner — India's First Snapchat AR Hackathon (2025).
• Hugging Face Agents Course — Fundamentals of Agents (2026).
• Oracle Cloud Infrastructure Certified Foundations Associate.
• JavaScript Algorithms & Data Structures — freeCodeCamp.`;
  }

  // Contact / Hire query
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("linkedin") ||
    q.includes("github")
  ) {
    return `You can reach Gaurav directly:
• Email: gauravrawatop@gmail.com
• GitHub: https://github.com/gaurav21-05
• LinkedIn: https://www.linkedin.com/in/gaurav-rawat-41293928b/
He is open to discussing full-stack AI engineering, agentic systems, and high-throughput automation architectures.`;
  }

  // Default fallback grounded answer
  return `I can answer any question about Gaurav Rawat's engineering background, including his production AI projects (Shinra, Apex AI, WTI Cabs), his tech stack (Python, FastAPI, Next.js, Docker, AWS), agentic orchestration workflows, or his experience. What would you like to explore?`;
}
