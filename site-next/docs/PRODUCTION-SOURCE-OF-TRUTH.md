# PRODUCTION SOURCE OF TRUTH
**Last updated:** 2026-02-19
**Version:** v0.5.x (Next.js Dual-Site)

---

## 1. Strategic Foundation

### Core Message
> "Great ideas aren't anything without great execution."

### Supporting Message
> "AI can dream it. We deliver it."

### Tagline
> "We execute what others only imagine."

### What Melt Is
Melt is an experiential marketing agency. 26+ years of building large-scale brand activations, sports properties, concert experiences, and fan engagement programs. Not a design shop. Not an ad agency. An execution powerhouse.

### Target Audience
- Mid-market brands and sports properties
- Budget range: $100,000 – $500,000 per project
- Decision makers: Brand managers, CMOs, marketing directors, sports partnership managers
- Pain point: They have ideas but can't trust vendors to execute at scale without hand-holding

### Proof Points (use these — do not invent others)
- 26+ years in business
- 10,000+ events produced
- 18 Final Four activations
- 22-year Coca-Cola relationship
- $300M arena activation experience
- 2,563% ROI documented case study
- Coca-Cola, Aflac, Chick-fil-A, Topgolf, Mercedes-Benz — anchor clients

### Objection Handling
1. "Too expensive" → ROI framing: 2,563% return documented
2. "Can you handle our scale?" → 10K+ events, 18 Final Fours
3. "We might go in-house" → 26 years of specialized execution networks
4. "We're not sure you understand our brand" → 22-year Coca-Cola relationship

---

## 2. Site Architecture

### URL
Production Vercel: `james-projects-babaee31/site` (see CLAUDE.md for full URL)

### Tech Stack
- Next.js 16, App Router, Turbopack
- GSAP 3.14 + ScrollTrigger
- Lenis 1.3 smooth scroll
- SplitType
- Framer Motion (HC transitions)
- CSS Custom Properties (globals.css)

### Dual-Site Architecture
Single deployment. `VersionContext` (localStorage) controls which version renders.
- Version A = "capes" — Capes design (dark navy, GSAP, enterprise)
- Version B = "handcrafted" — Accordion.net.au-inspired (monochrome, massive type)
- `VersionToggle` component persists choice
- Default: version A (capes)

---

## 3. Version A (Capes) — Homepage Section Order

```
1. CapesLetterboxScroll   — hero, pinned scroll, 3 messages, SplitType chars, client logo marquee at bottom
2. CapesServicesWheel     — dark bg, service list
3. CapesStats             — dark bg, 4 counters (26yr / 10K events / 18 Final Fours / 22yr Coca-Cola)
4. CapesFeaturedWork      — white bg, asymmetric 12-col grid, ImageReveal
5. CapesWhyMelt           — off-white bg, staggered cards
6. CapesTestimonials      — dark bg, auto-rotate, dot nav
7. CapesContactCTA        — royal blue bg, form wired to API
```

**NOTE:** NO CapesClientLogos on homepage. Logo marquee is integrated into LetterboxScroll hero bottom bar.

### Capes Sub-Pages
| Route | Page |
|-------|------|
| /work | Filterable grid, monochrome cards, Capes theme |
| /work/:slug | Case study, full-bleed hero, gallery lightbox |
| /services/:slug | Service detail, related work |
| /about | Team, values, timeline |
| /contact | Mailchimp form |
| /industry-insights | Article grid, gating |
| /industry-insights/:slug | Long-form article |
| /scope-your-project | Multi-step estimator |

---

## 4. Version B (Handcrafted) — Homepage Section Order

Based on accordion.net.au structure 1:1, adapted with Melt content and colors.

```
1. HC Hero          — Full-screen cycling background images + "EXECUTION" at 25vw minimum, animated entry
2. HC Stats Bar     — "26+ Years" | "10K+ Events" | "18 Final Fours" | "22yr Coca-Cola"
3. HC Introduction  — Tag line ( Introduction ), body copy, marquee of BTS event images
4. HC Work Slider   — "### ACTIVATIONS" heading, Swiper.js slides with featured projects, CTA "all work →"
5. HC About         — Mission text interlude, one image, "about us →" link
6. HC Work Grid     — "### BRAND ### ING" or similar, 4 project cards, monochrome-to-color, CTA "all work →"
7. HC Mission       — "Great ideas aren't anything without great execution." full-width statement
8. HC Team Roster   — "### TEAM", team members list, CTA "our work →"
```

### HC Sub-Pages
Same routes as Capes but all pages styled per accordion.net.au patterns:
- Work: filter bar (inactive 0.25 opacity, active 1.0 + bullet), list/grid toggle, monochrome grid
- About: image collage hero, sticky tabs (ABOUT / TEAM / APPROACH / VALUES), 4 content panels, CTA marquee
- All pages: near-black background, monochrome-to-color images, massive typography

---

## 5. Design Tokens

All tokens defined in `src/styles/shared/globals.css`.

### Correct Token Names (NEVER use --color-* prefix)
```
--black: #000000          --white: #FFFFFF
--royal-blue: #3356FF     --navy: #0A0A6B
--lime-green: #D4FF00     --coral: #FF4040
--gray-900: #1A1A1A       --gray-300: #949292      --gray-100: #E8E8EA
--container: 1280px       --container-wide: 1440px
--gutter: 20px (40px @768px+)
--space-xs: 8px  --space-sm: 16px  --space-md: 24px  --space-lg: 48px
--space-xl: 80px --space-2xl: 120px  --space-3xl: 160px
```

### NEVER USE (broken tokens — undefined in globals.css)
```
--color-black  --color-white  --color-royal-blue  --color-gray-*
--container-max  --grid-gutter  --space-4xl  --duration-normal
--duration-fast  --duration-slow  --ease-default
```

---

## 6. API Routes — NEVER TOUCH

These routes are live and handle form submissions. Do not modify, delete, or reorganize.

```
/api/contact       — Contact form → Mailchimp
/api/subscribe     — Newsletter subscribe → Mailchimp
/api/gate          — Content gate for insights articles
/api/scoper        — Scoper tool submission → Mailchimp
```

---

## 7. Commit Rules

1. NEVER commit without user typing "rocket" or `/rocket` in the chat
2. NEVER mark anything "done" until user personally confirms in browser
3. Before every commit/deploy verify:
   - `gh auth status` → must show `meltatl-26`
   - `vercel whoami` → must show `meltatl-26`
   - `git config user.email` → must show `chrisatmelt@gmail.com`

---

## 8. Content Sources

| Content | Source |
|---------|--------|
| Project data | `src/data/projects.ts` — 22 projects (18 Capes + 4 legacy) |
| Services | `src/data/services.ts` — 6 services |
| Clients | `src/data/clients.ts` — logo images |
| Insights | `src/data/insights.ts` — 5 articles |
| Team | `src/data/team.ts` (or campaigns.ts) |
| Images | `public/images/work/`, `public/images/hero/`, `public/images/clients/`, `public/images/team/` |
