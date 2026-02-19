# Sprint Tracker — v0.5.0 Rebuild

Plan: `~/.claude/plans/steady-strolling-canyon.md`

## Phase 0: Documentation Infrastructure — COMPLETE

| Task | Status |
|------|--------|
| Rewrite site-next/CLAUDE.md (<2.5k tokens) | DONE |
| Create .claude/rules/design-system.md | DONE |
| Create .claude/rules/version-a-spec.md | DONE |
| Create .claude/rules/version-b-spec.md | DONE |
| Create .claude/rules/animation-patterns.md | DONE |
| Create .claude/rules/component-map.md | DONE |
| Create docs/drift-checklist.md | DONE |
| Create docs/sprint-tracker.md | DONE |
| Update memory files | DONE |

## Phase 1: Foundation — COMPLETE

| Task | Status |
|------|--------|
| Rewrite globals.css with correct tokens | DONE |
| Create typography.css | DONE |
| Port useCharacterReveal.ts | DONE |
| Port useFirstVisit.ts | DONE |
| Port useTransition.ts | DONE |
| Port usePageReveal.ts | DONE |
| Port TextReveal, ImageReveal, TransitionLink | DONE |
| Port ScrollProgress, BackToTop, MeltLogo | DONE |
| Port Preloader, CustomCursor, PageTransition | DONE |
| Integrate Lenis into VersionLayout | DONE |
| Verify: npm run build | DONE — 14/14 routes, 0 errors |

## Phase 2: Capes Header + Footer + Hero — COMPLETE

| Task | Status |
|------|--------|
| Rewrite CapesHeader (dark, 3-state) | DONE |
| Rewrite CapesFooter (CTA + 4-col + grain) | DONE |
| Create CapesLetterboxScroll (replaced CapesHero) | DONE |
| Update page.tsx section order | DONE |

## Phase 3: Capes Homepage Sections — COMPLETE

| Task | Status |
|------|--------|
| Update CapesServicesWheel (dark bg, grain, scrollable) | DONE |
| Rewrite CapesStats (dark, grain, GSAP stagger) | DONE |
| Rewrite CapesFeaturedWork (asymmetric grid) | DONE |
| Update CapesWhyMelt (stagger cards) | DONE |
| Rewrite CapesClientLogos (GSAP marquee) | DONE |
| Update CapesTestimonials (auto-rotate, dots) | DONE |
| Update CapesContactCTA (royal blue bg) | DONE |
| Remove CapesAwards from homepage | DONE |

## Phase 4: Capes Sub-pages + HC Hero — COMPLETE

| Task | Status |
|------|--------|
| Capes sub-pages animation pass (9 pages) | DONE |
| Rewrite HC hero (25vw+ GSAP chars) | DONE |
| Scroll-driven Execution Iceberg | DONE |
| Framer Motion page transitions for HC | DONE |
| GSAP client marquee for HC | DONE |

## Phase 5: HC Sub-pages + Final Polish — COMPLETE

| Task | Status |
|------|--------|
| HC Work + CaseStudy + Services animations | DONE — monochrome-to-color, massive bg numbers |
| HC About + Contact + Insights + Article + Scoper + Privacy animations | DONE — character reveals, Framer Motion steps |
| Monochrome-to-color CSS system in globals.css | DONE |
| Documentation updates | DONE |

## Remaining

| Task | Status |
|------|--------|
| Performance + accessibility audit (Lighthouse > 90) | PENDING — User review first |
| Final drift-checklist verification | PENDING — User review first |
| User visual review (`npm run dev`) | AWAITING USER |
