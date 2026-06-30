# Jie Sheng — Resume / Portfolio

A small Next.js site presenting my resume and selected projects. Deployed on Vercel.

**Live:** https://jiesheng.vercel.app (also https://resume-delta-ashen.vercel.app)

## Editing

All content lives in [`lib/resume.ts`](lib/resume.ts) — profile, skills and projects.
It is the single source of truth and mirrors `wiki/personal/resume.md` in the
`llm_traders_wiki` repo.

To update:

```bash
# edit lib/resume.ts
npm run build                                                   # verify it compiles
npx vercel deploy --prod --yes --scope jieshengs-projects-ab264446
# re-pin the clean alias to the new production deployment:
npx vercel alias set <new-prod-url> jiesheng.vercel.app --scope jieshengs-projects-ab264446
```

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
```

## Stack

Next.js (App Router) · React 19 · TypeScript · plain CSS (print-friendly — use
the **Save as PDF** button or the browser print dialog to export).
