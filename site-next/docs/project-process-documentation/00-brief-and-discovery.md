# 00 — Brief & Discovery

**Date:** December 2025
**Phase:** Pre-production

---

## What We Were Doing

Melt Atlanta — a 26-year experiential marketing agency — needed a new website that could serve two distinctly different audiences simultaneously: procurement-minded brand managers who want proof (ROI, case studies, scale) and creative decision-makers who respond to editorial storytelling and aesthetic credibility. The challenge was building one site that could be both without compromising either.

---

## The Client

**Melt Atlanta** is a full-service experiential marketing and sponsorship agency founded in ~2000, headquartered in Atlanta, Georgia. Their work spans NCAA Final Four activations, multi-city sampling tours, content production (including Emmy-winning broadcast), NIL/influencer campaigns, and stadium buildouts for the Atlanta Braves, Houston Astros, and Washington Nationals.

Notable credentials:
- 26+ years in business
- 5,000+ activations executed
- 22-year Coca-Cola partnership
- 20+ year NCAA relationship
- Emmy-winning production team
- Clients include Aflac, ESPN, Bath & Body Works, Comfort Colors, Ghirardelli, and 100+ brands

---

## Key Decisions Made

- **Dual-version architecture** — One URL, one codebase, two complete visual identities. Users toggle between "Capes" (dark, data-forward, GSAP-animated) and "Handcrafted" (monochrome editorial, accordion.net.au-inspired). Chosen over two separate sites because it demonstrates technical range in one deploy and keeps SEO consolidated.
- **Next.js 16 App Router** — Chosen for SSG/SSR flexibility, built-in image optimization, and Vercel deployment simplicity. The previous site was a React + Vite SPA which had no SSR or route-level code splitting.
- **Single Vercel deploy** — Both versions share routing, data, and API. No duplication of infrastructure.
- **Content-first data layer** — All project, client, and service data centralized in TypeScript files (`projects.ts`, `clients.ts`, `services.ts`) so the UI can be iterated without touching content, and vice versa.
- **Mailchimp as CRM backend** — Contact forms, newsletter signup, gated content, and the project scoper all pipe into Mailchimp lists/tags. No separate CRM needed for launch.

---

## Competitive Research

Key competitors and references reviewed:
- **Momentum Worldwide** — Large agency, corporate, low personality. Benchmark for what to avoid.
- **Accord.net.au** — Accordion-inspired brutalist design. Became the direct reference for Version B (Handcrafted).
- **Previous meltatl.com** — WordPress site, generic agency template, no proof, weak case studies.
- **Vite SPA reference site** (`site/`) — Internal prototype with GSAP animations, LetterboxScroll hero, and Navy/Lime-green design system. Became the direct reference for Version A (Capes).

---

## Goals Defined

1. Surface Melt's 26-year proof record (stats, case studies, named clients)
2. Demonstrate creative range — same agency, two completely different aesthetic registers
3. Capture leads via Scoper tool, contact form, and gated Insights content
4. Build on Next.js so content can be updated without developer involvement (future headless CMS migration path)
5. Ship by early Q1 2026 for a client review milestone

---

## Files Touched

- None yet — discovery phase
- Reference: `site/src/` (Vite prototype, read-only reference)
- Reference: `/old-recaps-data/WEBSITE-DATA-REFERENCE.md`

---

## Outcome

Clear brief established. Dual-site architecture selected. Vite prototype confirmed as Version A visual reference. Accordion.net.au confirmed as Version B structural reference. Development kick-off scheduled for February 2026.
