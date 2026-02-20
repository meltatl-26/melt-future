# 02 — Sprint 1: Foundation

**Date:** February 18, 2026
**Version:** v0.1.0

---

## What We Were Doing

Sprint 1 built the entire structural foundation: Next.js 16 scaffolded from scratch, the dual-version switching system wired up, all data types defined, API routes implemented, and shared hooks ported. Nothing visible to a user — pure infrastructure. The goal was to get to a state where any component could be dropped in and immediately have access to data, routing, version state, smooth scroll, and animation utilities.

---

## Key Decisions Made

- **VersionProvider as React Context** — Persists to localStorage, SSR-safe (defaults to 'capes' on server, hydrates on client). No flash of wrong version on load.
- **All 4 Mailchimp routes implemented day 1** — Forms are a critical path item. Getting API routes done first means component builds don't block on integration.
- **Shared hooks first** — `useGsap`, `useLenis`, `useInView`, `useReducedMotion`, `useSplitText` all ported from Vite prototype before any component work. Components can reference these immediately.
- **TypeScript strict** — All data interfaces typed from day one. `Project`, `Client`, `Service`, `Insight` interfaces defined before any data is populated.
- **22 projects scaffolded** — Even placeholder entries in `projects.ts` so dynamic routes `[slug]` render immediately without 404s.

---

## What Shipped

- Next.js 16 App Router project initialized
- `VersionProvider` + `VersionToggle` + `VersionLayout`
- Capes and Handcrafted header/footer (placeholder structure)
- Data layer: `projects.ts` (22 projects), `services.ts` (6 categories), `clients.ts` (22 clients), `campaigns.ts`, `insights.ts` (5 articles)
- Mailchimp API routes: `/api/mailchimp/contact`, `/api/mailchimp/subscribe`, `/api/mailchimp/gate`, `/api/mailchimp/scoper`
- `lib/gating.ts` — 4-tier progressive profiling + localStorage
- `lib/mailchimp.ts` — Mailchimp API wrapper
- Shared hooks: `useGsap`, `useLenis`, `useInView`, `useReducedMotion`, `useSplitText`
- Shared components: `Counter`, `Lightbox`, `AccordionItem`, `WebGLErrorBoundary`
- Global styles: `globals.css` (tokens, reset, utilities), scaffold `typography.css`
- 14 routes scaffolded (10 pages + 4 API)

---

## Files Touched

```
site-next/
  next.config.ts
  package.json
  src/
    app/
      layout.tsx
      page.tsx
      about/page.tsx
      contact/page.tsx
      insights/page.tsx
      insights/[slug]/page.tsx
      work/page.tsx
      work/[slug]/page.tsx
      services/[slug]/page.tsx
      scope-your-project/page.tsx
      privacy/page.tsx
      api/mailchimp/contact/route.ts
      api/mailchimp/subscribe/route.ts
      api/mailchimp/gate/route.ts
      api/mailchimp/scoper/route.ts
    lib/
      version-context.tsx
      gating.ts
      mailchimp.ts
    data/
      projects.ts
      clients.ts
      services.ts
      insights.ts
      campaigns.ts
    hooks/
      useGsap.ts
      useLenis.ts
      useInView.ts
      useReducedMotion.ts
      useSplitText.ts
    components/
      shared/
        VersionLayout.tsx
        VersionToggle.tsx
        Counter.tsx
        Lightbox.tsx
        AccordionItem.tsx
        WebGLErrorBoundary.tsx
      capes/
        CapesHeader.tsx  (placeholder)
        CapesFooter.tsx  (placeholder)
      handcrafted/
        HandcraftedHeader.tsx  (placeholder)
        HandcraftedFooter.tsx  (placeholder)
    styles/
      shared/globals.css
```

---

## Outcome

Clean `next build` — 14/14 routes, 0 errors. Foundation complete. Sprint 2 can begin on any component with full data access, routing, and hook support.
