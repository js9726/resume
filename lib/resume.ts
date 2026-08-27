// Canonical resume content. This file is the single source of truth for the
// live site. Keep it in sync with wiki/personal/resume.md in the jie_wiki repo.
// Update here, run `npm run build`, then redeploy.

export const PROFILE = {
  name: "Jie Sheng",
  title: "AI Engineer | Production LLM Systems, Data Platforms & Cloud Delivery",
  avatar: "/headshot.png",
  location: "Malaysia",
  email: "jiesheng2697@gmail.com",
  github: "https://github.com/js9726",
  summary:
    "AI and data engineer with five years of hands-on ownership of production data, analytics and automation systems inside a multi-channel e-commerce business. Designed and operate Linnworks-to-BigQuery pipelines covering 7 sales channels, 40,000+ SKUs and 200+ orders per day, plus versioned APIs and a private operations dashboard on Google Cloud Run. Build LLM-assisted systems with structured context, tool calling, multimodal extraction, deterministic evaluation and fail-closed data controls across Python, TypeScript, Next.js, PostgreSQL and GCP. Civil-engineering trained and commercially accountable, with experience translating operational requirements into secure, documented systems from ingestion through deployment and monitoring.",
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  printLimit?: number;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Walplus",
    role: "E-Commerce Key Account Manager & Data Analyst | Applied Data & AI Engineering",
    period: "Aug 2021 - Present",
    location: "Kuala Lumpur, Malaysia",
    bullets: [
      "Combine ongoing e-commerce key-account and commercial-analytics ownership with end-to-end engineering responsibility as the sole human engineer for the company's internal data and decision-support systems.",
      "Designed, built and operate Linnworks-to-BigQuery ingestion pipelines spanning 7 sales channels, 40,000+ SKUs and 200+ orders per day, with scheduled validation and source-freshness checks.",
      "Built and deployed a private React/TypeScript and Express operations dashboard with versioned APIs for performance, profitability, storage, incidents, data quality and deterministic CSV exports; responses carry trace IDs, data-through dates, freshness and completeness.",
      "Owned secure Google Cloud delivery using containerised Cloud Run services, IAP organisation access, dedicated service accounts, Secret Manager references, staged zero-traffic revisions, rollback targets and post-release log/read-back verification.",
      "Built the gross-profit model and automated target-GP repricing logic across the marketplace estate, accounting for channel fees, shipping and incident allowances.",
      "Built FBA replenishment forecasting from sell-through, live stock, pack size and MOQ, and used Vertex AI as decision support for pricing signals based on demand, competitor movement and seasonality.",
      "Translated marketplace, finance, stock, storage, returns and fulfilment questions into reconciled data contracts and operator tools while retaining P&L responsibility for PPC, pricing and conversion; live commercial changes remain human-approved.",
      "Progressed the reporting stack from Excel VBA and Google Apps Script automation to Python/SQL pipelines and cloud APIs; reduced GCP cost through VM scheduling and right-sizing and configured AWS budget controls.",
    ],
  },
  {
    company: "G&P Geotechnics Sdn Bhd",
    role: "Geotechnical Engineer",
    period: "Feb 2021 - Aug 2021",
    location: "Malaysia",
    printLimit: 3,
    bullets: [
      "Designed a strip-raft foundation for an elevated water tank using SAFE and performed pushback-slope stability analysis in GeoStudio Slope/W.",
      "Participated in subsurface investigations for East Coast Rail Link Section C and interpreted site-investigation data for multiple projects.",
      "Developed VBA-enabled site-investigation and monitoring spreadsheets to standardise engineering calculations and progress tracking.",
      "Analysed Mackintosh probe results for reinforced-soil and reinforced-concrete walls and ran sensitivity studies for Class 3 slopes.",
      "Monitored soil-nail installation and pull-out tests and managed rock excavation, slope strengthening and retaining-wall construction for a luxury residential project.",
    ],
  },
  {
    company: "G&P Geotechnics Sdn Bhd",
    role: "Geotechnical Engineering Intern",
    period: "Oct 2019 - Dec 2019",
    location: "Malaysia",
    printLimit: 1,
    bullets: [
      "Interpreted subsurface field and laboratory tests and high-strain dynamic pile-load-test results; checked pile eccentricity and overstressed pile groups using engineering spreadsheets and SAFE.",
      "Used Piglet and GeoStudio Slope/W circular and wedge analyses to review pile loads and slope stability, supporting pile-reinforcement and design revisions.",
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
      "Agent workflows and tool calling",
      "Context orchestration (instructions, retrieval, structured inputs, durable handoffs)",
      "Knowledge-grounded LLM systems",
      "MCP tool workflows",
      "Deterministic and golden-case evaluation",
      "Multimodal vision -> structured JSON",
      "DeepSeek and Gemini APIs",
      "Claude Code and Codex subscription workflows",
      "Human approval gates and fail-closed controls",
    ],
  },
  { group: "Languages", items: ["TypeScript", "Python", "JavaScript", "SQL"] },
  {
    group: "Backend & Data",
    items: [
      "Node / Express",
      "REST APIs and versioned contracts",
      "PostgreSQL (Prisma, Neon)",
      "Supabase Postgres/Auth/RLS",
      "Google BigQuery",
      "Google Cloud Storage",
      "Django",
      "Flask",
    ],
  },
  {
    group: "Cloud & Delivery",
    items: [
      "Google Cloud Run",
      "Vercel",
      "Docker",
      "GitHub Actions CI/CD",
      "GCP IAP / service accounts / Secret Manager",
      "OAuth / NextAuth v5",
      "Serverless and scheduled workers",
    ],
  },
  {
    group: "Reliability & Governance",
    items: [
      "Structured logs and trace IDs",
      "Freshness and completeness monitoring",
      "CI quality gates",
      "Staged releases and rollback verification",
      "Role-based access and secret isolation",
      "Source provenance and approval boundaries",
    ],
  },
  {
    group: "Frontend & Automation",
    items: [
      "Next.js / React / TypeScript",
      "Tailwind and responsive data visualisation",
      "ETL pipelines",
      "Google Apps Script (Sheets + Docs)",
      "Excel VBA",
      "Selenium browser automation",
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
  priority: number;
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
    priority: 1,
    stack: ["Next.js 15.5", "TypeScript", "Python", "Neon Postgres", "Prisma", "Vercel"],
    tags: ["AI / LLM", "Full-stack", "SaaS", "Eval harness"],
    blurb:
      "Private-beta SaaS that turns live market and broker data into AI-generated trade analysis.",
    highlights: [
      "Built a role-based analysis pipeline combining deterministic data/risk checks, wiki-grounded context and LLM-generated structured outputs to produce a weighted Conviction Score and daily morning brief.",
      "Added a Neon export path for reviewing real A-list rows plus a deterministic CI gate that scores versioned evaluation results against an 80% quality threshold.",
      "Engineered a Python ingestion pipeline (yfinance, Finviz, market breadth) feeding a Next.js App Router front-end; a Mon-Fri GitHub Actions refresh auto-redeploys to Vercel.",
      "Integrated live brokerage feeds (moomoo OpenD + IBKR bridges) with a fail-closed freshness guard that halts analysis on stale or missing data.",
      "Persisted briefs, analyses and journal outputs through typed API contracts; implemented NextAuth v5, Prisma and PostgreSQL with role-based access and middleware protection.",
    ],
    note: "Private beta - live walkthrough available on request.",
    links: [
      { label: "Eval harness explainer", href: "/ai-eval-harness-explainer.html" },
    ],
  },
  {
    name: "MacroSnap - Photo-to-Macros AI Food Tracker (Telegram Bot + PWA)",
    role: "Solo build - 2026",
    priority: 4,
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
    priority: 5,
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
    priority: 2,
    stack: ["React", "TypeScript", "Express", "Google Cloud Run", "BigQuery"],
    tags: ["Data platform", "Enterprise delivery", "Cloud Run", "Observability"],
    blurb:
      "Internal operations dashboard aggregating multi-channel sales, gross-profit and replenishment analytics.",
    highlights: [
      "Aggregates marketplace, FBA and dropship channels into a BigQuery warehouse with automated daily ingestion from the order-management system.",
      "Exposes versioned, read-only APIs for performance, profitability, storage lineage, incidents and data quality with trace IDs, freshness/completeness status and deterministic exports.",
      "Reconciles source semantics rather than averaging or silently filling missing values, allowing operators to audit calculations back to order and stock evidence.",
      "Runs as a private containerised Cloud Run service protected by IAP, scoped runtime identities and Secret Manager, released through staged revisions with explicit rollback and live read-back checks.",
    ],
    note: "Production data is NDA-protected - the linked demo runs entirely on synthetic data.",
    links: [
      { label: "Live demo (synthetic data)", href: "https://ecommerce-ops-demo.vercel.app" },
    ],
  },
  {
    name: "FIFA World Cup 2026 Sweepstake - Invite-Only Pool App",
    role: "Solo build - 2026",
    priority: 7,
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
    name: "Multi-Agent Knowledge & Workflow Control Plane",
    role: "Solo build - 2026",
    priority: 3,
    stack: ["Claude Code", "Codex", "Python", "TypeScript", "Git"],
    tags: ["AI / LLM", "Agent orchestration", "Context engineering", "Governance"],
    blurb:
      "A shared knowledge and execution layer that lets Claude Code and Codex work from one maintained source without silently overwriting each other.",
    highlights: [
      "Designed atomic runtime claims, durable task records and handoffs, one-writer/reviewer gates, failure learning and session validation for multi-agent work across repositories.",
      "Maintains canonical wiki knowledge and shared skill parity across both runtimes, with generated dependency/audit views and validation gates for stale or contradictory context.",
      "Built wiki-grounded trading workflows that combine maintained doctrine, live OpenD broker data and structured journaling persisted back to the dashboard.",
      "Uses scheduled workflows and explicit approval boundaries so analysis can automate while broker orders, deployments and publication remain operator-controlled.",
    ],
    links: [],
  },
  {
    name: "Malaysia Auction Property Rental-Yield Screener",
    role: "Personal research tool",
    priority: 8,
    stack: ["Python", "Selenium", "Web data extraction", "Spreadsheet analysis"],
    tags: ["Automation", "Data", "Property research"],
    blurb:
      "A browser-automation research workflow for comparing Malaysian auction properties with online rental listings.",
    highlights: [
      "Collected comparable rental-listing evidence with Selenium and normalised it for property-level analysis.",
      "Estimated gross rental yield and surfaced candidates above a 7% screening threshold for manual investment review.",
      "Kept the result as a research shortlist rather than an automated investment decision.",
    ],
    note: "Private research workflow; listing data and investment decisions are not published.",
    links: [],
  },
  {
    name: "Trade Journal Pro - AI-Integrated Spreadsheet & Docs Automation",
    role: "Solo build - 2025-2026",
    priority: 6,
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

export const LAST_UPDATED = "2026-08-27";
