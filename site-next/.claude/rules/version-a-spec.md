# Version A (Capes) — Visual Spec

Reference: Vite site at `site/src/`

## Global Look

- Dark theme: Navy (#0A0A6B) and Black (#000000) backgrounds
- White text on dark backgrounds
- Lime green (#D4FF00) accents (highlights, CTAs, scrollbar, focus rings)
- Grain overlay (`.grain::after`) on all dark sections
- `data-section-theme="dark"` or `"light"` on every section
- Header detects theme via IntersectionObserver, changes colors

## Header (`site/src/components/layout/Header.jsx` + `.css`)

- Fixed, 60px height, BLACK background
- 3 theme states: `transparent` (top) | `solid` (black) | `inverted` (white text over dark sections)
- IntersectionObserver on `[data-section-theme]`, `rootMargin: '-20% 0px -80% 0px'`
- Logo: MeltLogo (white) left
- Nav: 5 links centered (Work, Services dropdown, About, Contact, Insights)
- Actions: Instagram, LinkedIn, "Start a Project" CTA right
- Mobile: hamburger -> full-screen navy overlay
- Dropdown: white bg, rounded, shadow, service numbers colored

## Footer (`site/src/components/layout/Footer.jsx` + `.css`)

- Navy bg, white text, `grain` class, `data-section-theme="dark"`
- CTA section: "Let's talk about what you need built." + button, centered
- 4-column grid: Logo+details | Company | Services | Connect
- Column titles: lime green, uppercase, letter-spacing 0.1em
- Links: gray-300, hover white
- Bottom: copyright + privacy link, border-top

## LetterboxScroll Hero (`site/src/components/sections/LetterboxScroll.jsx` + `.css`)

- Navy bg, `data-section-theme="dark"`, 100vh height
- GSAP ScrollTrigger: `pin: true`, `end: '+=200%'`, `scrub: 1`
- 3 messages: SplitType chars, hero-display class, white text, lime-green highlights
- Message rotation: chars fade out (opacity 0, y -20, stagger 0.01) -> next slides in (yPercent 100->0) -> chars fade in (stagger 0.015)
- Letterbox bands: top/bottom black bars, 7.5vh each
- Client logos bar at bottom: black bg, white logos via `filter: brightness(0) invert(1)`

## Stats

- Navy bg, grain, `data-section-theme="dark"`
- Eyebrow "EXECUTING" golden yellow
- Heading "By The Numbers" with `useCharacterReveal`
- 4 stats: Counter + label
- GSAP stagger: `gsap.from(items, { opacity:0, y:40, stagger:0.15, scrollTrigger: once })`

## FeaturedWork

- White bg, `data-section-theme="light"`
- Eyebrow "SELECTED WORK", heading "Proof." with `useWordReveal`
- ASYMMETRIC 12-column grid (NOT carousel)
- Cards span different columns/rows
- Each card: `ImageReveal` (clip-path + scale)
- Info overlay: navy gradient bottom

## WhyMelt

- Off-white bg, `data-section-theme="light"`
- 2-column cards with staggered `marginTop: (i % 3) * 20px`
- GSAP stagger entrance

## ClientLogos

- Off-white bg, `data-section-theme="light"`
- GSAP marquee: `gsap.to(track, { xPercent: -50, duration: 30, ease: 'linear', repeat: -1 })`
- Double array for seamless loop. Pause on hover.

## Testimonials

- Navy bg, grain, `data-section-theme="dark"`
- Auto-rotate 5s, dot nav `role="tablist"`

## ContactCTA

- Royal blue bg (#3356FF), `data-section-theme="dark"`
- Existing form logic (wired to API, DO NOT TOUCH)

## Homepage Section Order

```
LetterboxScroll -> ServicesWheel -> Stats -> FeaturedWork -> WhyMelt -> ClientLogos -> Testimonials -> ContactCTA
```

NO CapesAwards on homepage.
