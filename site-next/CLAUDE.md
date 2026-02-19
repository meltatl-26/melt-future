# MELT Future — Next.js Dual-Site (v0.5.0)

**Stack:** Next.js 16 (App Router, Turbopack), GSAP 3.14, Lenis 1.3, SplitType, Three.js, Framer Motion
**Deploy:** Vercel (`james-projects-babaee31/site`)

---

## MANDATORY SESSION PROTOCOL — DO THIS EVERY SESSION, IN ORDER

1. **READ** `docs/PRODUCTION-COMPACTION-HANDOFF.md` FIRST — before touching any code
2. **CREATE/UPDATE** `docs/plans/YYYY-MM-DD-session.md` — log every file you read AND every change you make
3. **USE TaskCreate** for every task before starting it
4. **UPDATE** `docs/PRODUCTION-COMPACTION-HANDOFF.md` BEFORE session ends
5. **NEVER** commit without user typing "rocket" or `/rocket` in chat
6. **NEVER** mark anything "done" until user personally confirms in browser

---

## Governance Docs

| Doc | Purpose |
|-----|---------|
| `docs/PRODUCTION-SOURCE-OF-TRUTH.md` | Strategy, section orders, token rules, API routes |
| `docs/production-decisions.yaml` | Machine contract: non-negotiable behaviors |
| `docs/PRODUCTION-FEATURE-SCORECARD.md` | Every feature scored 0–10 |
| `docs/PRODUCTION-10-10-PLAN.md` | What 10/10 looks like for each feature |
| `docs/PRODUCTION-COMPACTION-HANDOFF.md` | Crash recovery — read first, update last |
| `docs/feature-prds/` | Feature PRDs (F-001, F-002, F-003...) |
| `docs/plans/` | Session logs (YYYY-MM-DD-session.md) |

---

## Commands

```bash
npm run dev          # Local dev (Turbopack)
npx next build       # Production build check
```

## Architecture

```
src/
  app/                    # Next.js App Router pages
    (capes)/              # Version A route group
    (handcrafted)/        # Version B route group
    api/                  # 4 Mailchimp routes (contact, subscribe, gate, scoper) — DO NOT TOUCH
  components/
    shared/               # VersionLayout, VersionToggle, Counter, Lightbox, AccordionItem, WebGLErrorBoundary
                          # + TextReveal, ImageReveal, TransitionLink, ScrollProgress, BackToTop,
                          #   MeltLogo, Preloader, CustomCursor, PageTransition
    capes/                # Version A components (dark theme, GSAP ScrollTrigger)
    handcrafted/          # Version B components (monochrome, Framer Motion)
  hooks/                  # useGsap, useLenis, useInView, useReducedMotion, useSplitText,
                          # useCharacterReveal, useFirstVisit, useTransition, usePageReveal
  data/                   # projects, services, clients, campaigns, insights
  lib/                    # gating.ts (progressive profiling)
  styles/
    shared/globals.css    # Design tokens, reset, grain, scrollbar
    shared/typography.css # Fluid type scale
```

## Key Rules

- @.claude/rules/design-system.md — Correct tokens (from Vite `site/src/styles/`)
- @.claude/rules/version-a-spec.md — Capes visual spec per section
- @.claude/rules/version-b-spec.md — Handcrafted visual spec
- @.claude/rules/animation-patterns.md — GSAP/Lenis/SplitType conventions
- @.claude/rules/component-map.md — Every component status + reference file

## Version Routing

`useVersion()` hook returns `'capes' | 'handcrafted'`. `VersionLayout` renders version-specific header/footer. `VersionToggle` persists choice to localStorage.

## Design Philosophy

- **Version A (Capes):** Must match existing Vite site at `site/`. Dark navy/black theme, GSAP ScrollTrigger animations, LetterboxScroll hero, grain overlays, lime-green accents.
- **Version B (Handcrafted):** Accordion.net.au structure 1:1 with Melt colors/branding. Monochrome-to-color images, massive typography (25vw+), scroll-driven reveals, GSAP + Framer Motion.

## Commit Rules

1. NEVER commit/push without user typing "rocket" or `/rocket`
2. Always verify: `gh auth status` (meltatl-26), `vercel whoami` (meltatl-26), `git config user.email` (chrisatmelt@gmail.com)
3. Local-first: `npm run dev` must work before any deploy
4. User confirms completion — nothing is "done" until user says so
