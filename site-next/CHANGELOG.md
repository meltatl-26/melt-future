# MELT Future (site-next) — Changelog

## v0.4.0 — 2026-02-18 (Sprint 4: Content Integration + Polish)

Final integration sprint — real images, enriched content, form bug fixes, accessibility, performance.

### Fixed
- **Contact form field mismatch** — Both Capes and HC contact forms sent `name` but API expected `firstName`, causing all submissions to fail with 400. Fixed field mapping in both versions.
- **Scoper form field mismatch** — Same `name` → `firstName` mapping bug. Fixed in both Capes and HC scoper submit handlers.
- **Newsletter CTA was a noop** — `CapesContactCTA` had a placeholder handler that never submitted. Wired to `/api/mailchimp/subscribe` with proper async flow and success state.
- **Turbopack root warning** — Set absolute path via `path.resolve(__dirname)` in next.config.ts.
- **OG image resolution** — Added `metadataBase: new URL("https://meltatl.com")` to root layout metadata.

### Added
- **Real project images** — Replaced all placeholder `<div>` elements with actual `<img>` tags across 4 component files (CapesFeaturedWork, Work grid, Case Study, Service pages) and 8 CSS files.
- **Lightbox integration** — Case study gallery images are now clickable, opening the accessible Lightbox modal with keyboard nav and touch swipe.
- **HC monochrome → color on images** — Work grid and case study images default to `grayscale(100%) brightness(0.7)`, transitioning to full color on hover.
- **22 project thumbnails** + per-project gallery directories in `public/images/work/`
- **28 client logos** in `public/images/clients/`
- **OG image** and favicon in `public/`
- **5 insight articles** with full body content (850–1200 words each)
- **Enriched case study data** — All 22 projects have complete challenge/approach/results narratives, real metrics, and gallery paths

### Verified
- Clean `next build` — 14/14 routes, 0 errors, 0 warnings
- All 4 API routes functional (contact, subscribe, gate, scoper)
- All form submissions correctly map fields to API expectations
- Gated content progressive profiling works across all 4 tiers
- Version toggle preserves route across all pages
- No TODO/FIXME/placeholder content remaining
- WCAG 2.1 AA: semantic HTML, ARIA labels, keyboard navigation, focus management

---

## v0.3.0 — 2026-02-18 (Sprint 3: Handcrafted Full Site)

Complete Version B (Handcrafted) — Accordion-inspired, immersive brutalist design.

### Added
- **HandcraftedHero** — "EXECUTION" character-level animation with triple-shadow echo, Execution Iceberg (scroll-driven 10%/90% reveal), cinematic statement, stats strip, client logos marquee (desaturated → color), contact CTA
- **HC Work page** — Sidebar filters by capability/client, desaturated → saturated hover states, dark card grid
- **HC Case Study** — Full-bleed dark hero, split layout (narrative left / sticky sidebar right), editorial magazine feel, expandable full metrics
- **HC Service pages** (6) — Massive background number hero, dramatic pull-quote problem statement, minimal text grid capabilities, horizontal proof points
- **HC About page** — Three cinematic narrative "acts" with giant numbers, leadership cards, stats strip
- **HC Contact page** — "LET'S TALK" massive hero, centered dark form (bottom-border-only inputs), success state
- **HC Insights** — Editorial magazine layout, featured article card, 2-column dark grid, lock/tier indicators for gated content
- **HC Insight Article** — Dark editorial with gate overlay (progressive profiling), related insights grid
- **HC Scoper** — Conversational 5-step flow (one question at a time), progress dots, visual option selection
- Version-aware 404 page (Capes light / Handcrafted dark)
- Version-aware Privacy page (shared SECTIONS data, different rendering)
- Enhanced SEO metadata in root layout (title template, keywords, OpenGraph, Twitter, robots)
- 8 new HC CSS files (work-hc, case-study-hc, service-hc, about-hc, contact-hc, insights-hc, article-hc, scoper-hc)

### Design System (Handcrafted)
- Background: `--color-black` (#0A0A0A)
- Text: White at opacity levels (0.06 ghost, 0.25-0.45 body, 1.0 headings)
- Accent: `--color-royal-blue` (#3356FF)
- Typography: Industry font uppercase headings, tight letter-spacing
- Borders: `rgba(255,255,255,0.06-0.08)`, brighten on hover
- Easing: `cubic-bezier(0.42, 0, 0.04, 1)`
- Monochrome → color on interaction

---

## v0.2.0 — 2026-02-18 (Sprint 2: Capes Full Site)

Complete Version A (Capes) — professional, polished, data-forward, problem-first.

### Added
- **CapesHero** — Pain-point headline rotation with counters
- **CapesServicesWheel** — 6 Capes categories, fixed-size wheel + scrollable panel
- **CapesStats** — 26 yrs, 10K+ events, proof points
- **CapesFeaturedWork** — Dynamic rotating carousel
- **CapesWhyMelt** — Execution-specific Q&A accordion cards
- **CapesAwards** — Award highlights section
- **CapesClientLogos** — Infinite marquee
- **CapesTestimonials** — Real quotes (Kasia Horner/NCAA, Dansby Swanson, Bobby Oliver/Ghirardelli)
- **CapesContactCTA** — Multi-path CTA (form + scoper + newsletter)
- **Work page** — Capability-driven grid with category filtering
- **Case Study template** — Tiered (flagship narrative + light treatment), expandable metrics
- **Service pages** (6) — Problem statement, capabilities, proof points, related work, CTA, cross-nav
- **About page** — Three stories (26 years + small team + execution moat), Vince + David featured
- **Contact page** — Form → Mailchimp API, sidebar with company info
- **Insights listing** — Featured + grid with tier indicators
- **Insight Article** — Full gated content with 4-tier progressive profiling
- **Scoper tool** — 3-step structured intake (project type → contact info → details), Mailchimp submission
- **Insights data** — 5 articles with Insight interface and helpers
- 8 Capes page CSS files + 14 component files (7 TSX + 7 CSS)

---

## v0.1.0 — 2026-02-18 (Sprint 1: Foundation)

Next.js 16 project initialized with dual-site architecture.

### Added
- Next.js App Router project scaffolded
- VersionProvider (React Context + localStorage persistence, SSR-safe)
- VersionToggle component
- VersionLayout (switches Header/Footer per version)
- Capes Header + Footer
- Handcrafted Header + Footer
- Data layer: projects.ts (22 projects), services.ts (6 categories), clients.ts, campaigns.ts
- Shared hooks: useGsap, useLenis, useSplitText, useInView, useReducedMotion
- Shared components: Lightbox, Counter, AccordionItem, WebGLErrorBoundary
- Shared styles: globals.css (CSS variables, reset, utilities)
- Mailchimp API routes: contact, subscribe, gate, scoper
- Gating library: lib/gating.ts (4-tier progressive profiling + localStorage)
- Mailchimp integration: lib/mailchimp.ts
- 14 routes scaffolded (10 pages + 4 API)

### Architecture
- Single URL, single Vercel deploy
- Version toggle in header switches between Capes and Handcrafted
- Both versions share data layer, hooks, API routes
- CSS separated: `*.css` (Capes) and `*-hc.css` (Handcrafted)
- BEM naming: `capes-*` and `hc-*` prefixes
