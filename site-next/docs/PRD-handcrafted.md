# PRD — Version B (Handcrafted)

## Overview

Version B presents MELT as a craft-focused, detail-oriented creative studio. Inspired by Accordion.net.au — monochrome imagery, massive typography, cinematic scroll reveals.

## Design Principles

1. **Monochrome-to-Color** — All images start grayscale, reveal to color on hover/scroll
2. **Massive Typography** — Hero text at 25vw+, condensed uppercase
3. **Cinematic** — Scroll-driven reveals, pinned sections, parallax
4. **Minimal** — Black backgrounds, restrained palette, focused content

## Target User

Creative directors and brand owners who value craft and attention to detail.

## Pages

Same routes as Capes (shared via VersionLayout routing), different visual treatment.

## Key Differentiators from Version A

| Aspect | Capes | Handcrafted |
|--------|-------|-------------|
| Theme | Navy + lime green | Near-black + white |
| Hero | LetterboxScroll (3 messages) | EXECUTION chars (25vw+) |
| Images | Full color | Monochrome -> color |
| Animations | GSAP ScrollTrigger | GSAP + Framer Motion |
| Transitions | GSAP clip-path overlay | Framer Motion fade/slide |
| Typography | Bold but contained | Massive, cinematic |

## Technical Requirements

- Framer Motion AnimatePresence for page transitions
- GSAP for scroll-driven animations (Iceberg, reveals)
- CSS `filter: grayscale(100%) brightness(0.7)` default on images
- GSAP filter animation to full color on hover (0.6s)
- ScrollTrigger auto-reveal on hero/featured images
- Same API routes and form logic as Capes
- `useReducedMotion` check in every animated component
