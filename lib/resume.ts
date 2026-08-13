// Canonical resume content. This file is the single source of truth for the
// live site. Keep it in sync with wiki/personal/resume.md in the jie_wiki repo.
// Update here, run `npm run build`, then redeploy.

export const PROFILE = {
  name: "Jie Sheng",
  title: "AI Engineer - LLM systems in production, on data infrastructure I build and operate",
  avatar: "/headshot.png",
  location: "Malaysia",
  email: "jiesheng2697@gmail.com",
  github: "https://github.com/js9726",
  summary:
    "AI engineer who ships LLM systems into production and owns the data infrastructure underneath them. Five years building and operating a multi-channel e-commerce analytics platform - Linnworks -> BigQuery pipelines spanning 7 sales channels, 40,000+ SKUs and 200+ orders per day, gross-profit modelling, and a React/Express operations dashboard on Google Cloud Run - then layering AI on top of it: multi-agent orchestration, retrieval-grounded analysis, multimodal vision-to-structured-data extraction, MCP tooling, live data integrations, and macro / Apps Script / VBA automation. I practise eval-driven development - a Postgres-backed harness scores agent outputs against golden expectations and a CI gate blocks regressions below 80%, and live data paths fail closed rather than degrade silently. Civil-engineering trained (UTAR), self-taught into software through Excel VBA macros and e-commerce analytics; comfortable owning the full lifecycle - ingestion, APIs, auth, CI/CD and deployment.",
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Walplus",
    role: "Data & AI Engineering (formal title: E-Commerce Key Account Manager & Data Analyst)",
    period: "Aug 2021 - Present",
    location: "Kuala Lumpur, Malaysia",
    bullets: [
      "Designed, built and operate the company's analytics platform end-to-end - Linnworks -> Google BigQuery ingestion pipelines feeding a containerised React/Express operations dashboard on Google Cloud Run. Spans 7 sales channels (Amazon, eBay, Wayfair, Etsy, Shopify and Mirakl-based marketplaces including The Range), 40,000+ SKUs and 200+ orders per day. Sole engineer on the system: architecture, deployment and ongoing operation.",
      "Built the gross-profit model that drives pricing across the marketplace estate, plus automated repricing to target-GP thresholds accounting for marketplace fee, shipping and incident allowances.",
      "Built FBA replenishment forecasting that converts historical sell-through, current FBA stock, pack size and MOQ into shipment quantities.",
      "Automated the reporting layer years before the warehouse existed: Excel VBA and Google Sheets macro / Apps Script tooling that pulled, cleaned and reformatted channel order and stock exports into recurring reports, and drove the pricing, gross-profit and replenishment workbooks - later formalised into the BigQuery pipelines and dashboard above.",
      "Own marketplace P&L across the channel estate - PPC, pricing and conversion optimisation - the commercial context that informs every model above.",
    ],
  },
  {
    company: "G&P Geotechnics Sdn Bhd",
    role: "Geotechnical Engineer (prior: Intern)",
    period: "Feb 2021 - Aug 2021",
    location: "Malaysia",
    bullets: [
      "Strip-raft foundation design for an elevated water tank using SAFE analysis.",
      "Slope stability analysis (Slope/W) for pushback slope design.",
    ],
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    school: "Universiti Tunku Abdul Rahman (UTAR)",
    degree: "Bachelor of Civil Engineering (Honours) - Merit",
    period: "2016 - 2020",
    details: [
      "Dean's List; Silver Award - International UTM Bridge Model Competition 2019 (ranked 13/78).",
      "Student member: Institution of Engineers Malaysia (IEM) & ICE Student Chapter.",
    ],
  },
];

export const CERTIFICATIONS: string[] = [
  "CompTIA Cloud Essentials+",
];

export interface SkillGroup {
  group: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    group: "AI / LLM",
    items: [
      "Multi-agent orchestration",
      "RAG",
      "MCP servers",
      "Eval-driven development (golden-set harness + CI regression gate)",
      "Prompt caching",
      "Vision -> structured JSON extraction",
      "Claude / Gemini / DeepSeek APIs",
      "Telegram Bot API interfaces",
    ],
  },
  { group: "Languages", items: ["TypeScript", "Python", "JavaScript", "SQL"] },
  {
    group: "Frontend",
    items: ["Next.js (App Router)", "React 19", "Tailwind", "Expo / React Native", "SVG data-viz"],
  },
  {
    group: "Backend & Data",
    items: [
      "Node / Express",
      "PostgreSQL (Prisma, Neon)",
      "Supabase Postgres/Auth/RLS",
      "Google BigQuery",
      "Google Cloud Storage",
      "REST APIs",
      "Google Apps Script",
    ],
  },
  {
    group: "Spreadsheet & Office Automation",
    items: [
      "Google Apps Script (Sheets + Docs)",
      "Custom menus, triggers & UrlFetchApp API sync",
      "Google Sheets macros & custom functions",
      "Excel VBA macros",
      "AI-integrated spreadsheet systems (Sheets + Apps Script + LLM pipelines)",
    ],
  },
  {
    group: "Automation",
    items: ["ETL pipelines", "GitHub Actions", "Scheduled cron workers"],
  },
  {
    group: "Infra / DevOps",
    items: [
      "Vercel",
      "Google Cloud Run",
      "Serverless functions",
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

export interface ProjectImage {
  /** Path under /public, e.g. "/shots/macrosnap-today.png". */
  src: string;
  /** Shown as the caption under the shot, and used as alt text. */
  caption: string;
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
  /** Optional app screenshots. Omit or leave empty to render no gallery. */
  images?: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    name: "AI Market Dashboard - Multi-Agent Trading SaaS",
    role: "Solo build - 2026",
    stack: ["Next.js 15.5", "TypeScript", "Python", "Neon Postgres", "Prisma", "Vercel"],
    tags: ["AI / LLM", "Full-stack", "SaaS", "Eval harness"],
    blurb:
      "Private-beta SaaS that turns live market and broker data into AI-generated trade analysis.",
    highlights: [
      "Built a multi-agent analysis engine (fundamental + technical agents over a shared state) producing a weighted Conviction Score and an LLM-authored daily morning brief.",
      "Added a Neon-backed eval harness that exports real A-list rows, checks AI verdicts against golden expectations, and gates regressions with an 80% quality threshold.",
      "Engineered a Python ingestion pipeline (yfinance, Finviz, market breadth) feeding a Next.js App Router front-end; a Mon-Fri GitHub Actions refresh auto-redeploys to Vercel.",
      "Integrated live brokerage feeds (moomoo OpenD + IBKR bridges) with a fail-closed freshness guard that halts analysis on stale or missing data.",
      "Implemented NextAuth v5 (Google OAuth) + Prisma + PostgreSQL with role-based access and middleware route protection.",
    ],
    note: "Private beta - live walkthrough available on request.",
    links: [
      { label: "Eval harness explainer", href: "/ai-eval-harness-explainer.html" },
    ],
  },
  {
    name: "MacroSnap - Photo-to-Macros AI Food Tracker (Telegram Bot + PWA)",
    role: "Solo build - 2026",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Telegram Bot API",
      "Gemini 2.5 Flash vision",
      "Neon Postgres",
      "Prisma",
      "Vercel",
    ],
    tags: ["AI / LLM", "Multimodal", "Full-stack", "Mobile / PWA"],
    blurb:
      "A nutrition tracker whose capture surface is a chat message: send a meal photo to a Telegram bot and get calories, protein, carbs and fat back in seconds.",
    highlights: [
      "Built a vision-to-structured-JSON pipeline - Gemini 2.5 Flash reads the meal photo directly (caption optional) and returns per-item macros.",
      "Added a provider-agnostic safety layer that re-checks the 4/4/9 kcal energy identity against the returned macros and downgrades the confidence label when they disagree; swapping model providers is a one-file change (the build has run on both Gemini vision and a text-only DeepSeek estimator).",
      "Shipped a Telegram command surface (/log, /today, /weight, /settings, /undo) plus a Next.js PWA for review and item-by-item portion correction - the corrected meal becomes the saved source of truth.",
      "Wrote an adaptive TDEE engine that derives real maintenance from 14-day intake versus weight change, falling back to Katch-McArdle / Mifflin-St Jeor formula targets until enough logged days exist.",
      "Integrated the Hevy training API for week-over-week volume and per-exercise working-set deltas as a muscle-retention signal - deliberately excluded from the calorie budget because lifting burn is small and badly estimated.",
      "Locked the app to a single account: Telegram Web-App auth + Next.js middleware, allowed-chat-ID gate and webhook secret; Neon pooled/unpooled connection split so the production build never touches the database.",
    ],
    note: "Private single-user app (personal health data) - walkthrough available on request. Bodyweight readings are redacted in the screenshots.",
    links: [],
    images: [
      {
        src: "/shots/macrosnap-meal.png",
        caption:
          "Meal review: the model's own confidence flag, stated assumptions, and a per-item portion slider that rewrites the macros.",
      },
      {
        src: "/shots/macrosnap-today.png",
        caption:
          "Daily view and capture surface - photo in, calories/protein/carbs/fat out, caption optional.",
      },
      {
        src: "/shots/macrosnap-trends.png",
        caption:
          "Adaptive TDEE and the Hevy training feed, used together as a muscle-retention signal.",
      },
    ],
  },
  {
    name: "Malaysia SME E-Invoicing Sandbox - Mobile-First Compliance App",
    role: "Solo build - 2026",
    stack: ["TypeScript", "React", "vinext/Next.js", "LHDN MyInvois API design", "Supabase architecture"],
    tags: ["Mobile UX", "Compliance tech", "Full-stack", "SaaS"],
    blurb:
      "Mobile-first e-invoicing sandbox for Malaysian micro-SMEs such as Grab drivers, hawkers, rental hosts and small service sellers.",
    highlights: [
      "Designed a non-technical user flow that starts from plain-language templates (service, goods, Grab job, hawker food, rental, refund) instead of accounting fields.",
      "Built local MyInvois-style payload generation with readiness checks, JSON export, draft save/load and sandbox boundaries that avoid live LHDN submission.",
      "Handled Malaysian edge cases: personal seller mode for users without SSM registration, walk-in/general-public customer mode, and plain-English TIN/BRN guidance.",
      "Planned the production mobile stack around Expo/React Native, Supabase Postgres/Auth/RLS, tenant isolation and server-side MyInvois submission functions for an initial 10-client rollout.",
    ],
    note: "Sandbox prototype - no live tax submission or credentials.",
    links: [
      { label: "GitHub", href: "https://github.com/js9726/sme-e-invoicing-sandbox" },
    ],
  },
  {
    name: "Multi-Channel E-Commerce Operations Dashboard",
    role: "Client work (under NDA) - 2025-2026",
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
    note: "Production data is NDA-protected - the linked demo runs entirely on synthetic data.",
    links: [
      { label: "Live demo (synthetic data)", href: "https://ecommerce-ops-demo.vercel.app" },
    ],
  },
  {
    name: "FIFA World Cup 2026 Sweepstake - Invite-Only Pool App",
    role: "Solo build - 2026",
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
    name: "Trading Assistant Skill Suite - Wiki-Grounded AI Agents",
    role: "Solo build - 2026",
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
  {
    name: "Trade Journal Pro - AI-Integrated Spreadsheet & Docs Automation",
    role: "Solo build - 2025-2026",
    stack: [
      "Google Apps Script",
      "Google Sheets",
      "Google Docs",
      "Yahoo Finance API",
      "LLM agents",
    ],
    tags: ["Automation", "AI / LLM", "Spreadsheets", "Macros"],
    blurb:
      "A fully automated trading journal in Google Sheets that doubles as the data source for an AI analysis pipeline, plus a Docs renderer that syncs the reviewed journal back out of a live API.",
    highlights: [
      "~1,200 lines of Apps Script across two bound projects (a Sheets journal generator and a Docs renderer).",
      "56-column journal generated by macro: ~20 manual inputs, everything else computed - R-multiples, position sizing, risk/reward, exposure flags.",
      "Live market data pulled in-sheet: ATR and 50-day MA auto-fetched from Yahoo Finance, real-time pricing via Google Finance.",
      "Built-in risk guardrails: earnings-proximity, stop-distance vs ATR, extension vs 50MA and quantity-deviation warnings, colour-coded per cell.",
      "Docs renderer pulls canonical sessions and trading rules from the dashboard API over UrlFetchApp, backs up the existing document, rebuilds its tabs, then PATCHes a sync receipt back - all driven from a custom onOpen menu.",
      "Credentials handled through Apps Script PropertiesService script properties, so no secret ever lands in the script source.",
      "Feeds a downstream AI agent that reads each journal row, scores the trade against a curated strategy wiki, and writes structured reviews back to a journal doc and live dashboard.",
    ],
    note: "Private workbook (personal trading data) - demo walkthrough available on request.",
    links: [],
  },
];

export const LAST_UPDATED = "2026-08-07";
