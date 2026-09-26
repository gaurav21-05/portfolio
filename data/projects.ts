export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  proofPoint: string;
  proofLabel: string;
  website?: string;
  github: string;
  workflow?: {
    type: 'agentic' | 'pipeline';
    steps: {
      name: string;
      desc: string;
      status?: string;
    }[];
  };
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    aiWorkflow: string;
    engineeringDecisions: string[];
    challenges: string[];
    results: string[];
    metrics: { label: string; value: string }[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "shinra",
    number: "01",
    title: "SHINRA",
    category: "AI E-COMMERCE & CONTENT AUTOMATION",
    description:
      "A live production e-commerce platform with AI-driven market research, SEO-rich product content, dynamic product generation and AI-assisted poster mockups.",
    technologies: ["Next.js", "NestJS", "Node.js", "MongoDB", "AWS"],
    proofPoint: "10,000+ product records",
    proofLabel: "Production Catalog Scale",
    website: "https://shinra.in",
    github: "https://github.com/gaurav21-05",
    workflow: {
      type: "pipeline",
      steps: [
        { name: "Market Ingestion", desc: "Crawls real-time trends & keyword search volumes" },
        { name: "Structured LLM", desc: "Generates high-ranking SEO titles, specs, & tags" },
        { name: "Visual Compositor", desc: "Renders multi-angle mockups & dynamic artwork" },
        { name: "Catalog Deploy", desc: "Pushes verified product payloads to MongoDB & S3" },
      ],
    },
    caseStudy: {
      overview:
        "Shinra is an active production e-commerce platform built to solve the massive content bottleneck in retail merchandising. By orchestrating automated market intelligence with high-fidelity generation pipelines, Shinra automates catalog expansion while maintaining top-tier SEO performance.",
      problem:
        "Scaling a modern design and print merchandise catalog traditionally demands hundreds of hours of manual copy generation, keyword research, mockups rendering, and database population. Standard AI demos fail when attempting to handle batch production consistency, database schema constraints, and asset CDN propagation.",
      solution:
        "Architected an end-to-end autonomous publishing pipeline that couples market trend discovery with structured LLM generation, dynamic image compositing, and a high-performance Next.js/NestJS storefront backed by AWS infrastructure.",
      architecture:
        "Next.js App Router frontend with Incremental Static Regeneration (ISR) and edge caching; NestJS modular microservice cluster for business logic; MongoDB replica set for flexible catalog storage; AWS S3 + CloudFront CDN for instantaneous global asset delivery.",
      aiWorkflow:
        "Trend Ingestion Queue → Structured LLM Prompting with Pydantic-like Schema Guarantees → Automated Tagging & Vector Categorization → High-Res Mockup Rendering Engine → Automated Quality Gate → Live Catalog Publish.",
      engineeringDecisions: [
        "Decoupled heavy generation jobs into asynchronous worker queues to eliminate latency on consumer-facing APIs.",
        "Implemented strict schema validation layers to prevent LLM hallucinations from corrupting production database records.",
        "Engineered intelligent caching layers across CloudFront and Redis to achieve sub-100ms catalog response times.",
      ],
      challenges: [
        "Maintaining typographic and visual fidelity across dynamic poster mockups without server overhead.",
        "Mitigating upstream LLM rate limits and API timeouts during large batch catalog ingestion cycles.",
      ],
      results: [
        "10,000+ active, structured product records in live production.",
        "Sub-100ms average time-to-first-byte (TTFB) across global storefront traffic.",
        "Automated 90%+ of the time required to research, generate, and publish new SKUs.",
      ],
      metrics: [
        { label: "Live Catalog Records", value: "10,000+" },
        { label: "Storefront Response", value: "<100ms" },
        { label: "Pipeline Reliability", value: "99.8%" },
        { label: "Content Automation", value: "90%+" },
      ],
    },
  },
  {
    id: "apex-ai",
    number: "02",
    title: "APEX AI",
    category: "AGENTIC AI CODING ORCHESTRATION",
    description:
      "A bounded Criteria → Planning → Execution → Validation workflow for autonomous coding tasks, with state management, retries, human approval, guardrails and rollback verification.",
    technologies: ["Python", "FastAPI", "LLMs", "React Flow", "Docker"],
    proofPoint: "49 automated tests",
    proofLabel: "Deterministic Test Suite",
    github: "https://github.com/gaurav21-05/apex-ai",
    workflow: {
      type: "agentic",
      steps: [
        { name: "Criteria", desc: "Rigid acceptance criteria and dependency boundaries definition", status: "Active" },
        { name: "Planning", desc: "DAG task breakdown with dependency resolution and guardrails", status: "Validated" },
        { name: "Execution", desc: "Isolated Docker container sandbox code synthesis", status: "Monitored" },
        { name: "Validation", desc: "Static analysis, AST parsing, and automated test execution", status: "49 Tests" },
        { name: "Approval / Rollback", desc: "Human approval checkpoint with atomic git rollback guarantee", status: "Protected" },
      ],
    },
    caseStudy: {
      overview:
        "Apex AI is an agentic coding orchestration platform designed to replace unconstrained, hallucination-prone LLM code generators with a deterministic, verified state machine workflow. Built for the Deutsche Telekom & Cursor Hackathon.",
      problem:
        "Most AI coding assistants rely on naive conversational loops. When given complex, multi-file software engineering tasks, they wander, mutate files unpredictably, produce syntax errors, and lack state rollback mechanisms when unit tests fail.",
      solution:
        "Built a bounded state graph orchestration framework where every coding objective is decomposed into explicit acceptance criteria, validated against sandboxed execution environments, and gated by automated test suites and human approvals before touching the workspace.",
      architecture:
        "Python FastAPI asynchronous backend with WebSocket streaming; Docker container manager for secure, ephemeral execution sandboxes; React Flow canvas for real-time visual DAG execution telemetry; Pydantic state machine for deterministic transitions.",
      aiWorkflow:
        "Criteria Ingestion → Formal Goal Formulation → DAG Task Planning → Sandboxed File-Level Mutation → Automated Linting & Test Runner Execution → Verification Checkpoint → Atomic Commit or Clean Rollback.",
      engineeringDecisions: [
        "Enforced bounded state transitions rather than continuous autonomous looping to eliminate runaway token expenditure.",
        "Implemented containerized execution sandboxes to guarantee code generated by LLMs cannot perform unsafe system calls.",
        "Structured validation as a first-class citizen: the agent cannot mark a task complete until all 49 test suites pass.",
      ],
      challenges: [
        "Constructing a reliable AST-aware patch engine capable of modifying large codebases without syntax degradation.",
        "Minimizing container boot latency while preserving complete environment isolation.",
      ],
      results: [
        "49 comprehensive automated test suites verifying end-to-end orchestration determinism.",
        "Selected and recognized at the Deutsche Telekom & Cursor Hackathon.",
        "Zero uncontrolled workspace mutations via atomic rollback architecture.",
      ],
      metrics: [
        { label: "Automated Tests", value: "49 Passed" },
        { label: "Orchestration Model", value: "Bounded DAG" },
        { label: "Sandbox Isolation", value: "Docker Engine" },
        { label: "Failure Recovery", value: "Atomic Rollback" },
      ],
    },
  },
  {
    id: "wti-cabs",
    number: "03",
    title: "WTI CABS",
    category: "AI RESERVATION AUTOMATION",
    description:
      "A production AI pipeline that extracts booking requirements from incoming emails, validates them against configurable rules and creates reservations through an existing .NET backend.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    proofPoint: "3,000–5,000 emails/day",
    proofLabel: "Daily Production Throughput",
    github: "https://github.com/gaurav21-05",
    workflow: {
      type: "pipeline",
      steps: [
        { name: "Email Ingestion", desc: "Corporate stream listener via IMAP & webhook queues" },
        { name: "AI Extraction", desc: "Structured parsing of multi-leg trips, dates, & passenger lists" },
        { name: "Validation", desc: "Syntax checks, geo-normalization & schema compliance" },
        { name: "Rule Evaluation", desc: "Corporate policy matching, budget codes & SLA enforcement" },
        { name: "Execution", desc: "Direct payload ingestion into enterprise .NET backend" },
      ],
    },
    caseStudy: {
      overview:
        "WTI Cabs is a premier enterprise transportation provider handling thousands of corporate reservations daily. This production pipeline automates the high-volume ingestion and translation of messy corporate email requests into strict enterprise booking transactions.",
      problem:
        "Enterprise travel coordinators send bookings via unstructured emails filled with diverse phrasing, flight updates, messy tables, and corporate billing requirements. Processing thousands of emails manually caused booking bottlenecks, human data-entry mistakes, and delayed confirmations.",
      solution:
        "Engineered an enterprise-grade AI extraction and policy validation engine that ingests thousands of daily emails, extracts multi-parameter reservations with high confidence, enforces corporate business rules, and interfaces with the core .NET reservation platform.",
      architecture:
        "Scalable Python/FastAPI microservices deployed in Docker on AWS; PostgreSQL database for transaction persistence and audit logging; Celery worker pools for queue management; resilient HTTP client for .NET legacy backend integration.",
      aiWorkflow:
        "Raw Email Ingestion → Preprocessing & De-noising → Few-Shot LLM Extraction with Strict JSON Schemas → Geographic Coordinate Normalization → Corporate Policy & Blackout Rule Engine → .NET API Transaction Dispatch → Confirmation Dispatch.",
      engineeringDecisions: [
        "Engineered confidence scoring thresholds: requests above 98% confidence execute automatically, while borderline cases route directly to a human verification dashboard.",
        "Maintained complete enterprise data privacy and confidentiality standards with strict data sanitization before model inference.",
        "Implemented idempotency keys based on email thread message IDs to guarantee zero duplicate reservations.",
      ],
      challenges: [
        "Handling complex forwarded email chains with conflicting dates, flight delays, and multi-passenger hierarchies.",
        "Achieving zero regression during real-time synchronization with an established legacy .NET enterprise backend.",
      ],
      results: [
        "Processes 3,000 to 5,000 corporate booking emails daily with high precision.",
        "Reduced reservation creation turnaround from 30+ minutes of human handling to sub-3 seconds.",
        "Zero duplicate bookings across enterprise accounts via cryptographic idempotency checking.",
      ],
      metrics: [
        { label: "Daily Throughput", value: "3K - 5K Emails" },
        { label: "Execution Latency", value: "< 3 Seconds" },
        { label: "Duplication Rate", value: "0.0%" },
        { label: "Backend Integration", value: ".NET Core" },
      ],
    },
  },
];
