# PRD — Version A (Capes)

## Overview

Version A presents MELT as a full-capability experiential marketing agency. Design matches the existing Vite site at `site/` — dark theme, bold typography, GSAP-driven animations.

## Design Principles

1. **Dark & Bold** — Navy/black backgrounds, high contrast, lime green accents
2. **Motion-Rich** — GSAP ScrollTrigger pinned sections, character reveals, image clip-path reveals
3. **Data-Driven** — Animated counters, proof metrics, client logos
4. **Professional** — Clean grid layouts, proper section theming, grain texture on dark sections

## Target User

Brand managers and marketing directors evaluating MELT for large-scale experiential campaigns.

## Pages

| Page | Route | Key Interaction |
|------|-------|----------------|
| Home | `/` | LetterboxScroll hero (pinned, 3 rotating messages), ServicesWheel, Stats counters, Asymmetric work grid |
| Work | `/work` | Filterable grid, ImageReveal on cards |
| Case Study | `/work/:slug` | Full-bleed hero, metrics bar, gallery lightbox |
| Services | `/services/:slug` | Service detail with related work |
| About | `/about` | Team section, values, history |
| Contact | `/contact` | Mailchimp-connected form (API route) |
| Insights | `/industry-insights` | Article grid with gating |
| Article | `/industry-insights/:slug` | Long-form with gated content |
| Scoper | `/scoper` | Multi-step project estimator (API route) |

## Technical Requirements

- All sections must have `data-section-theme="dark"` or `"light"`
- Header responds to section themes via IntersectionObserver
- All entrance animations use GSAP (no CSS @keyframes)
- Grain overlay on all dark sections
- Lenis smooth scroll
- Images lazy-loaded, proper alt text
- Forms connected to existing Mailchimp API routes
- `useReducedMotion` check in every animated component
