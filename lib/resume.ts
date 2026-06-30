// Canonical resume content. This file is the single source of truth for the
// live site — keep it in sync with wiki/personal/resume.md in the
// llm_traders_wiki repo. Update here, run `npm run build`, then redeploy.

export const PROFILE = {
  name: "Jie Sheng",
  title: "Full-Stack & AI Engineer",
  location: "Malaysia",
  email: "jiesheng2697@gmail.com",
  github: "https://github.com/js9726",
  summary:
    "Full-stack and AI engineer who ships production web apps end-to-end — from Python data pipelines and BigQuery warehouses to Next.js front-ends on Vercel and Google Cloud Run. I specialise in LLM and agent systems: multi-agent orchestration, retrieval-grounded analysis, MCP tooling, and live data integrations. Comfortable owning the full lifecycle — ingestion, APIs, auth, CI/CD and deployment.",
};

export interface SkillGroup {
  group: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { group: "Languages", items: ["TypeScript", "Python", "JavaScript", "SQL"] },
  {
    group: "Frontend",
    items: ["Next.js (App Router)", "React 19", "Tailwind", "SVG data-viz"],
  },
  {
    group: "Backend & Data",
    items: [
      "Node / Express",
      "PostgreSQL (Prisma, Neon)",
      "Google BigQuery",
      "Google Cloud Storage",
      "REST APIs",
    ],
  },
  {
    group: "AI / LLM",
    items: [
      "Multi-agent orchestration",
      "RAG",
      "MCP servers",
      "Prompt caching",
      "Claude / Gemini / DeepSeek APIs",
    ],
  },
  {
    group: "Infra / DevOps",
    items: [
      "Vercel",
      "Google Cloud Run",
      "GitHub Actions CI/CD",
      "OAuth / NextAuth v5",
      "Docker",
    ],
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  role: string;
  stack: string[];
  tags: string[];
  blurb: string;
  highlights: string[];
  note?: string;
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    name: "AI Market Dashboard — Multi-Agent Trading SaaS",
    role: "Solo build · 2026",
    stack: ["Next.js 15.5", "TypeScript", "Python", "PostgreSQL", "Prisma", "Vercel"],
    tags: ["AI / LLM", "Full-stack", "SaaS"],
    blurb:
      "Private-beta SaaS that turns live market and broker data into AI-generated trade analysis.",
    highlights: [
      "Built a multi-agent analysis engine (fundamental + technical agents over a shared state) producing a weighted Conviction Score and an LLM-authored daily morning brief.",
      "Engineered a Python ingestion pipeline (yfinance, Finviz, market breadth) feeding a Next.js App Router front-end; a Mon–Fri GitHub Actions refresh auto-redeploys to Vercel.",
      "Integrated live brokerage feeds (moomoo OpenD + IBKR bridges) with a fail-closed freshness guard that halts analysis on stale or missing data.",
      "Implemented NextAuth v5 (Google OAuth) + Prisma + PostgreSQL with role-based access and middleware route protection.",
    ],
    note: "Private beta — live walkthrough available on request.",
    links: [],
  },
  {
    name: "Multi-Channel E-Commerce Operations Dashboard",
    role: "Client work (under NDA) · 2025–2026",
    stack: ["React", "Express", "Google Cloud Run", "BigQuery"],
    tags: ["Data", "E-commerce", "Cloud Run"],
    blurb:
      "Internal operations dashboard aggregating multi-channel sales, gross-profit and replenishment analytics.",
    highlights: [
      "Aggregates marketplace, FBA and dropship channels into a BigQuery warehouse with automated daily ingestion from the order-management system.",
      "Surfaces channel revenue, gross-profit modelling, AI performance insights and FBA replenishment recommendations.",
      "Roadmap features: Amazon SP-API listing optimisation and live Buy-Box pricing checks.",
      "Containerised React + Express app deployed on Google Cloud Run.",
    ],
    note: "Production data is NDA-protected — the linked demo runs entirely on synthetic data.",
    links: [
      { label: "Live demo (synthetic data)", href: "https://ecommerce-ops-demo.vercel.app" },
    ],
  },
  {
    name: "FIFA World Cup 2026 Sweepstake — Invite-Only Pool App",
    role: "Solo build · 2026",
    stack: ["Next.js", "Neon Postgres", "Vercel"],
    tags: ["Full-stack", "Next.js"],
    blurb:
      "Full-stack sweepstake platform with invite-link authentication and group-scoped pools.",
    highlights: [
      "Built a country-claim draw system enforcing per-group uniqueness, with persistent results in Postgres.",
      "Added an admin interface for multi-user pool management and oversight.",
    ],
    links: [
      { label: "Live", href: "https://fifa-worldcup-2026-sweepstake.vercel.app" },
    ],
  },
  {
    name: "Trading Assistant Skill Suite — Wiki-Grounded AI Agents",
    role: "Solo build · 2026",
    stack: ["Claude Agent SDK", "MCP", "Python", "TypeScript"],
    tags: ["AI / LLM", "Agents", "MCP"],
    blurb:
      "A curated knowledge base plus global assistant skills that score trades against a maintained trading wiki.",
    highlights: [
      "Wiki-grounded trade-analyser skill (RAG over a living knowledge base) scoring setups with a Conviction model.",
      "MCP + broker (OpenD) integration for live positions and quotes, with auto-journaling back to the dashboard.",
      "Dual-agent design portable across Claude Code and Codex from one authoring source.",
    ],
    links: [],
  },
];

export const LAST_UPDATED = "2026-06-30";
