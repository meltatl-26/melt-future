# Version B (Handcrafted) — Visual Spec

Inspiration: Accordion.net.au

## Global Look

- Near-black (#0A0A0A) backgrounds, minimal color
- Monochrome-to-color image system
- Massive typography (25vw+ for hero)
- Framer Motion page transitions (AnimatePresence)
- Cinematic scroll-driven reveals

## Hero

- "EXECUTION" at `clamp(6rem, 25vw, 20rem)` — must be 25vw minimum
- GSAP character animation: SplitType chars, each from `{ opacity:0, y:'100%', rotation:8 }` -> `{ opacity:1, y:0, rotation:0, stagger:0.05 }`
- Triple text-shadow animation
- Tagline: GSAP fromTo with delay after chars complete
- NOT CSS @keyframes

## Execution Iceberg

- GSAP ScrollTrigger pinned section
- Waterline scrolls down revealing below-water content
- Above-water 10% fades first, then below-water 90% items stagger in
- `scrub: true`

## Client Marquee

- GSAP `xPercent` tween (NOT CSS @keyframes hcMarquee)
- Same GSAP marquee pattern as Capes version

## Page Transitions

- Framer Motion `AnimatePresence`
- Exit: fade out + slide up
- Enter: fade in + slide up from bottom
- Easing: `[0.42, 0, 0.04, 1]`

## Monochrome-to-Color System

- Default: ALL images `filter: grayscale(100%) brightness(0.7)`
- Hover: GSAP animates filter to full color over 0.6s
- Scroll into view: hero/featured images auto-reveal to color

## Sub-pages

- Work: stagger card reveals, monochrome-to-color on hover
- Case Study: scroll-driven parallax hero, sticky sidebar
- Services: GSAP-animated massive background numbers
- About: cinematic scroll-driven acts
- Contact: character-level "LET'S TALK" reveal
- Insights: stagger grid reveals
- Scoper: Framer Motion step transitions
