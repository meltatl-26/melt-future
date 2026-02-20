# 08 — Design Decisions

**Date:** February 2026
**Phase:** Ongoing

---

## What We Were Doing

Documenting the reasoning behind major visual and UX design decisions across both versions — so the logic is preserved when revisiting components months later or handing off to another developer.

---

## The Dual-Version Concept

The single most distinctive design decision in this project. Rather than building one agency website and hoping it speaks to everyone, we built two complete visual identities behind one toggle.

**Why it works:**
- Brand managers buying experiential marketing services respond to proof — ROI, case studies, named clients, scale. Version A (Capes) is built for them: dark, authoritative, data-forward.
- Creative directors and CMOs respond to aesthetic credibility — if an agency's own site is cookie-cutter, they won't trust that agency with their brand. Version B (Handcrafted) is built for them: editorial, confident, immersive.
- The toggle itself is a conversation piece in sales meetings. "We built two completely different sites. Which one do you want to see?" is a stronger opening than any slide deck.

---

## Version A (Capes): Design Rationale

### Navy + Black + Lime Green

Navy (`#0A0A6B`) is authoritative without being cold. Black sections add weight and contrast. Lime green (`#D4FF00`) is unconventional for B2B — it signals creative agency without sacrificing professionalism. Every competitor uses blue + gray. We don't.

### LetterboxScroll Hero

The hero is the most opinionated choice. Instead of a hero image or video, the hero is a 200vh GSAP-pinned scroll section with cycling character-animated messages. It immediately communicates that this site is technically different — and forces the user to engage with the content rather than skim past a stock photo.

### Asymmetric Grid for Featured Work

Every agency site uses the same card carousel. We used a true asymmetric CSS grid — cards span different columns and rows, creating visual hierarchy without JavaScript. It's harder to build but communicates more about the work's relative importance.

### Grain Overlays

All dark sections use a CSS `::after` pseudo-element with a noise SVG overlay. It adds tactile texture that keeps flat dark backgrounds from feeling like presentation decks. Borrowed from print design tradition.

### Section Theme Detection

The header changes color automatically as you scroll through light and dark sections — using IntersectionObserver on `[data-section-theme]` elements. Users never see a transparent header over white content or a black header crashing into a dark section. Invisible UX that takes real work to implement.

---

## Version B (Handcrafted): Design Rationale

### accordion.net.au as Reference

Accordion is the structural reference — not because we copied it, but because it solved the same problem: how do you make an agency site feel editorial and immersive without becoming a portfolio slideshow? The answer is massive type, monochrome images, and white space used aggressively.

### 25vw+ Typography

"EXECUTION" at `clamp(6rem, 25vw, 20rem)` is confrontational. It doesn't fit comfortably on screen — you have to look up at it. That's intentional. Melt's whole positioning is about confidence and scale of execution. The typography should feel the same way.

### Monochrome-to-Color System

All images start at `grayscale(100%) brightness(0.7)`. They reveal to full color on hover (instant GSAP filter animation) or scroll (ScrollTrigger for hero/featured). This does two things:
1. Creates a cohesive visual rhythm — the page doesn't feel chaotic with 20 different colorful thumbnails competing
2. Makes user interaction feel rewarding — you're unlocking the color

### No Navigation Links in Hero

The HC homepage starts with a full-bleed image and "EXECUTION" — no nav, no tagline, no CTA above the fold. The user has to scroll. This is a deliberate trust exercise: we're confident enough in the content to not panic-sell in the first 100px.

---

## Shared Design Decisions

### GSAP Over CSS for Entrance Animations

CSS `@keyframes` are fine for infinite loops (loading spinners, marquees fallback). Entrance animations must use GSAP because:
- GSAP respects `prefers-reduced-motion` via `useReducedMotion` hook
- GSAP animations can be killed, reversed, and cleaned up in `useEffect` returns — CSS animations can't
- GSAP ScrollTrigger gives precise control over when animations fire vs. CSS which fires on class toggle

### SplitType for Text Animation

SplitType splits DOM text into `<span>` per char/word/line and wraps them, allowing GSAP to animate each individually. The cleanup pattern (`split.revert()` in useEffect return) is critical — without it, hot reloads accumulate duplicate span wrappers and break layout.

### CSS Custom Properties Over Hardcoded Values

Every color, spacing value, radius, easing, and z-index is a CSS variable defined in `globals.css`. Components reference `var(--navy)` not `#0A0A6B`. This means:
- Design tokens can be updated globally without grep-replacing hex codes
- Dark/light section variants can swap tokens without component changes
- Future theming (client whitelabel, dark-mode override) requires only token changes

---

## Typography System

Fluid type scale using `clamp()` throughout:

```css
--display-hero: clamp(4rem, 12vw, 8rem);
--display-massive: clamp(3rem, 10vw, 6.5rem);
--h1: clamp(2.5rem, 5vw + 1rem, 5rem);
--body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
```

This means type scales continuously with viewport width — no breakpoint jumps, no awkward medium-screen sizes where headlines look either too large or too small.

---

## What We'd Do Differently

See `09-lessons-learned.md`.
