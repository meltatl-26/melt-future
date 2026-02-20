# 03 — Sprint 2: Version A (Capes)

**Date:** February 18, 2026
**Version:** v0.2.0

---

## What We Were Doing

Sprint 2 built out the complete Version A (Capes) experience — every section of the homepage, all sub-pages, and the shared components that power the Capes visual language. The reference for every design decision was the existing Vite prototype at `site/src/`. The goal: make the Next.js build match the Vite site visually and functionally, section by section.

---

## Design Language: Version A (Capes)

- **Audience**: Brand managers, procurement, CMO-level decision-makers
- **Tone**: Professional, data-forward, proof-first
- **Colors**: Navy (`#0A0A6B`), Black (`#000000`), White, Lime Green (`#D4FF00`) accent
- **Typography**: Industry (headlines, uppercase, tight) + Satoshi (body)
- **Animations**: GSAP ScrollTrigger, SplitType character reveals, pinned scroll sections
- **Grain overlays**: All dark sections use `::after` pseudo-element noise texture
- **Section theming**: `data-section-theme="dark"` | `"light"` on every section — drives header color changes via IntersectionObserver

---

## Key Components Built

### CapesLetterboxScroll (Hero)
The most technically complex component. A GSAP `pin: true, scrub: 1` ScrollTrigger that cycles through 3 messages using SplitType character animations. Black letterbox bands top and bottom. Logo marquee integrated at the bottom using `gsap.to(xPercent: -50, repeat: -1)`. Replaces the simpler `CapesHero` from the placeholder phase.

### CapesHeader
Fixed 60px black header with 3 IntersectionObserver-driven theme states: transparent (top of page) → solid black (on scroll) → inverted (over light sections). Services dropdown. Instagram + LinkedIn + "Start a Project" CTA. Mobile hamburger → full-screen navy overlay.

### CapesServicesWheel
360° SVG wheel with 6 Melt service categories. Scrollable detail panel (`max-height: 80vh, overflow-y: auto`). GSAP stagger on wedge entrance. `useCharacterReveal` on heading. `data-section-theme="dark"`, navy bg, grain.

### CapesFeaturedWork
Asymmetric 12-column CSS grid (NOT a carousel). Each card spans different columns/rows. `ImageReveal` component (GSAP clip-path + scale) on every card. `useWordReveal` on "Proof." heading.

### CapesClientLogos
GSAP marquee (`xPercent: -50, duration: 30, repeat: -1`). Doubled array for seamless loop. Pause on mouseenter.

### CapesStats
4 animated counters (`Counter` component). `useCharacterReveal` on "By The Numbers". GSAP stagger on stat items. Golden yellow eyebrow.

### CapesTestimonials
Auto-rotate every 5 seconds. Dot navigation with `role="tablist"`. 3 real quotes from Kasia Horner (NCAA), Dansby Swanson, Bobby Oliver (Ghirardelli).

### CapesContactCTA
Royal blue (`#3356FF`) background. Multi-path: contact form + Scoper link + newsletter signup. Already wired to Mailchimp from Sprint 1.

---

## Sub-pages Built

All 9 content pages built with full Capes styling:

| Page | Notable Features |
|------|-----------------|
| Work | Capability filter, ImageReveal on cards, GSAP stagger |
| Case Study | Tiered layout (flagship narrative vs. light), expandable metrics, Lightbox gallery |
| Service (×6) | Problem statement hero, capabilities grid, proof points, related work |
| About | Three stories (26 years, small team, execution moat), Vince + David featured |
| Contact | Form → Mailchimp, sidebar with company info |
| Insights | Featured + grid, tier indicators (free/locked) |
| Article | Full gated content, 4-tier progressive profiling overlay |
| Scoper | 3-step intake (project type → contact → details), Mailchimp submission |
| Privacy | Standard legal page |

---

## Shared Components Ported (from Vite prototype)

| Component | Source | Key Detail |
|-----------|--------|------------|
| TextReveal | `site/src/components/ui/TextReveal.jsx` | SplitType lines, GSAP yPercent |
| ImageReveal | `site/src/components/ui/ImageReveal.jsx` | clip-path inset + scale |
| TransitionLink | `site/src/components/ui/TransitionLink.jsx` | Adapted: useNavigate → useRouter |
| ScrollProgress | `site/src/components/ui/ScrollProgress.jsx` | Lime-green fixed-top bar |
| BackToTop | `site/src/components/ui/BackToTop.jsx` | Lenis scroll-to-top |
| MeltLogo | `site/src/components/ui/MeltLogo.jsx` | White + default variants |
| Preloader | `site/src/components/layout/Preloader.jsx` | First-visit navy overlay |
| CustomCursor | `site/src/components/layout/CustomCursor.jsx` | Lime circle, desktop only |
| PageTransition | `site/src/components/layout/PageTransition.jsx` | GSAP clip-path overlay |

---

## Files Touched

```
src/components/capes/
  CapesHeader.tsx + CapesHeader.css
  CapesFooter.tsx + CapesFooter.css
  CapesLetterboxScroll.tsx + CapesLetterboxScroll.css
  CapesServicesWheel.tsx + CapesServicesWheel.css
  CapesStats.tsx + CapesStats.css
  CapesFeaturedWork.tsx + CapesFeaturedWork.css
  CapesWhyMelt.tsx + CapesWhyMelt.css
  CapesClientLogos.tsx + CapesClientLogos.css
  CapesTestimonials.tsx + CapesTestimonials.css
  CapesContactCTA.tsx + CapesContactCTA.css

src/components/shared/
  TextReveal.tsx, ImageReveal.tsx, TransitionLink.tsx
  ScrollProgress.tsx + .css, BackToTop.tsx + .css
  MeltLogo.tsx + .css, Preloader.tsx + .css
  CustomCursor.tsx + .css, PageTransition.tsx + .css

src/hooks/
  useCharacterReveal.ts  (useCharacterReveal, useWordReveal, useLineReveal)
  useFirstVisit.ts
  useTransition.tsx
  usePageReveal.ts

src/styles/shared/
  globals.css  (full rewrite with correct tokens)
  typography.css  (fluid type scale)

src/app/
  page.tsx  (Capes homepage section order)
  work/page.tsx
  work/[slug]/page.tsx
  services/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  scope-your-project/page.tsx
  privacy/page.tsx
```

---

## Outcome

Version A (Capes) complete. All 9 sub-pages built. GSAP animations active on all sections. Clean build — 14/14 routes, 0 errors. Ready for Version B build in Sprint 3.
