# Pre-Deploy Visual Drift Checklist

Run `npm run dev` and verify each item visually before any deploy.

## Capes Homepage

- [ ] LetterboxScroll: Navy bg (#0A0A6B), black bands (7.5vh), GSAP pinned (`+=200%`), chars animate on scroll (scrub)
- [ ] ServicesWheel: Navy bg, grain overlay, 360 wheel interactive, detail panel scrollable (overflow-y: auto)
- [ ] Stats: Navy bg, grain, golden yellow eyebrow, Counter numbers, GSAP stagger entrance
- [ ] FeaturedWork: White bg, asymmetric 12-col grid (NOT carousel), ImageReveal clip-path
- [ ] WhyMelt: Off-white bg, 2-col staggered cards (marginTop offset), GSAP entrance
- [ ] ClientLogos: Off-white bg, GSAP marquee xPercent (NOT CSS @keyframes), pause on hover
- [ ] Testimonials: Navy bg, grain, auto-rotate 5s, dot nav with role="tablist"
- [ ] ContactCTA: Royal blue bg (#3356FF), centered form, data-section-theme="dark"
- [ ] NO CapesAwards section on homepage

## Capes Header

- [ ] Fixed, 60px height, BLACK background
- [ ] 3-state theming: transparent (scroll < 100px) -> solid (black) -> inverted (over dark sections)
- [ ] IntersectionObserver on [data-section-theme], rootMargin '-20% 0px -80% 0px'
- [ ] Logo left, 5 nav links centered, social + CTA right
- [ ] Services dropdown: white bg, rounded, shadow
- [ ] Mobile: hamburger -> navy overlay

## Capes Footer

- [ ] Navy bg, white text, grain overlay
- [ ] CTA: "Let's talk about what you need built." centered
- [ ] 4-column grid: Logo+details | Company | Services | Connect
- [ ] Column titles: lime green, uppercase
- [ ] Bottom bar: copyright + privacy

## HC Hero

- [ ] "EXECUTION" at 25vw+ minimum (`clamp(6rem, 25vw, 20rem)`)
- [ ] GSAP character animation (SplitType chars, NOT CSS @keyframes)
- [ ] Triple text-shadow

## HC Iceberg

- [ ] GSAP ScrollTrigger pinned section
- [ ] Waterline scrolls down, content reveals below
- [ ] scrub: true

## Global

- [ ] Lenis smooth scroll active
- [ ] CustomCursor visible on desktop (lime circle)
- [ ] ScrollProgress bar (lime green, fixed top)
- [ ] Preloader on first visit (navy overlay, GSAP lime dot)
- [ ] Grain overlay on ALL dark sections
- [ ] Correct tokens in DevTools (container: 1280px, spacing xs:8px, etc.)
- [ ] No hardcoded px/color values in components (all must use var(--token))
- [ ] No CSS @keyframes for entrance animations (GSAP only)

## Token Verification Commands

```bash
# Check for hardcoded colors (should return 0 matches in components)
grep -r '#0A0A6B\|#3356FF\|#D4FF00' site-next/src/components/ --include="*.tsx"

# Check for CSS @keyframes in components (should return 0 for entrance animations)
grep -r '@keyframes' site-next/src/components/ --include="*.css"

# Check for wrong container values
grep -r '1200px' site-next/src/styles/ --include="*.css"
```
