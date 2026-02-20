# 01 — Architecture Decisions

**Date:** January 2026
**Phase:** Technical planning

---

## What We Were Doing

Before writing a single component, we made the foundational decisions that would shape the entire build: how to serve two radically different visual identities from one codebase, how to structure the data layer, what animation stack to use, and how to avoid the content/code coupling problem that plagues most agency sites.

---

## Key Decisions Made

### Dual-Version Architecture

The central innovation of this build. A single URL (`meltatl.com`) serves two complete visual identities:

- **Version A — "Capes"**: Dark navy/black theme, GSAP ScrollTrigger animations, LetterboxScroll hero, lime-green accents, grain overlays. Targets procurement and brand managers. Proof-forward.
- **Version B — "Handcrafted"**: Near-black monochrome, massive typography (25vw+), editorial layout, scroll-driven reveals. Targets creative directors and CMOs. Story-forward.

Implementation: `VersionProvider` (React Context + localStorage) persists the user's choice. `VersionLayout` renders the correct header/footer. Every page component detects version via `useVersion()` hook and renders accordingly.

### Why Not Two Separate Sites

- One Vercel deploy = one SSL cert, one domain, consolidated analytics, one codebase to maintain
- Version toggle is itself a UX differentiator — shows the agency's range in a single interaction
- SEO: all content indexed under one domain

### Animation Stack

After evaluating options:

| Library | Decision | Reason |
|---------|----------|--------|
| GSAP 3.14 | **Keep** | ScrollTrigger, marquees, SplitType integration, battle-tested |
| Lenis 1.3 | **Keep** | Smooth scroll synced to GSAP ticker |
| SplitType | **Keep** | Lightweight, GSAP-compatible char/word splitting |
| Framer Motion | **Removed** | Only used in 2 places, 140KB gzipped, replaced with GSAP |
| Three.js | **Removed** | Never actually imported anywhere, 600KB dead weight |

### Data Layer

All content lives in TypeScript files, not hardcoded in components:

```
src/data/
  projects.ts    — 26+ projects, typed Project interface
  services.ts    — 6 service categories
  clients.ts     — 22+ clients with logo paths
  insights.ts    — 5 articles with full body content
  campaigns.ts   — Campaign types reference data
```

This creates a clean separation: content editors touch data files, developers touch components. Future migration path to headless CMS (Sanity, Contentful) requires only swapping the data source, not rewriting UI.

### API Routes (Mailchimp Integration)

4 Next.js API routes handle all form submissions server-side:

| Route | Purpose |
|-------|---------|
| `/api/mailchimp/contact` | Contact form → Mailchimp audience |
| `/api/mailchimp/subscribe` | Newsletter CTA → Mailchimp audience |
| `/api/mailchimp/gate` | Gated content unlock → audience + tags |
| `/api/mailchimp/scoper` | Project Scoper → audience + project-type tags |

No third-party form services needed. All submission logic in `src/lib/mailchimp.ts`.

### Gated Content System

4-tier progressive profiling system in `src/lib/gating.ts`:
- Tier 1: Open (no gate)
- Tier 2: Email only
- Tier 3: Email + company
- Tier 4: Full profile (name, email, company, role)

localStorage tracks unlock state per article. Each unlock syncs to Mailchimp.

### CSS Architecture

- **Global tokens**: `src/styles/shared/globals.css` — colors, spacing, type scale, z-index, easing
- **Typography**: `src/styles/shared/typography.css` — fluid type scale with `clamp()`
- **BEM naming**: `capes-*` prefix (Version A), `hc-*` prefix (Version B)
- **File separation**: `Component.css` (Capes styles) + `Component-hc.css` (Handcrafted styles), both imported in the same component file
- No Tailwind — bespoke design system requires full CSS control

### Routing

Next.js 15 App Router with flat route structure (no route groups). All pages version-aware via `useVersion()`:

```
app/
  page.tsx              — Homepage (version-switches)
  work/page.tsx         — Work grid
  work/[slug]/page.tsx  — Case study
  services/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  scope-your-project/page.tsx
  privacy/page.tsx
  api/mailchimp/...
```

---

## Files Touched

- `next.config.ts` — Turbopack root config
- `src/lib/version-context.tsx` — VersionProvider + useVersion hook
- `src/lib/gating.ts` — 4-tier progressive profiling
- `src/lib/mailchimp.ts` — Mailchimp API wrapper
- `src/data/*.ts` — Data layer files (scaffolded)

---

## Outcome

Architecture locked. Data layer designed. Animation stack finalized. Ready for component build phase.
