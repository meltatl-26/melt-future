# Animation Patterns — GSAP / Lenis / SplitType

## GSAP Registration (REQUIRED at top of every file using ScrollTrigger)

```tsx
'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

## Character Reveal (useCharacterReveal)

```tsx
const ref = useCharacterReveal({ triggerStart: 'top 80%', stagger: 0.03 });
return <h2 ref={ref}>Heading Text</h2>;
```

SplitType splits into chars -> GSAP animates from `{ opacity:0, y:20, rotationX:-90 }` to visible.

## Word Reveal (useWordReveal)

Same pattern, splits into words. `stagger: 0.08`, `duration: 0.8`. From `{ opacity:0, y:30, scale:0.9 }`.

## Line Reveal (useLineReveal)

Splits into lines, wraps each in overflow:hidden div. Animates `yPercent: 100 -> 0`.

## ScrollTrigger Pinned Section (LetterboxScroll pattern)

```tsx
gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: 1,
  }
});
```

## Stagger Entrance

```tsx
gsap.from(items, {
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: { trigger: container, start: 'top 80%', once: true }
});
```

## Image Reveal (ImageReveal component)

```tsx
// Clip-path reveal + scale
gsap.from(el, {
  clipPath: 'inset(100% 0 0 0)',
  scale: 1.15,
  duration: 1.2,
  ease: 'power4.out',
  scrollTrigger: { trigger: el, start: 'top 85%', once: true }
});
```

## GSAP Marquee (ClientLogos pattern)

```tsx
gsap.to(track, {
  xPercent: -50,
  duration: 30,
  ease: 'linear',
  repeat: -1,
});
// Pause on mouseenter, resume on mouseleave
```

## Lenis Smooth Scroll

```tsx
// Already exists at hooks/useLenis.ts
// Syncs with GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000))
// Must call ScrollTrigger.update() on lenis scroll event
```

## Cleanup Pattern (CRITICAL)

Every useEffect with GSAP MUST return cleanup:

```tsx
return () => {
  if (splitRef.current) splitRef.current.revert();
  ScrollTrigger.getAll().forEach(st => st.kill());
  // or kill specific triggers stored in refs
};
```

## Reduced Motion

Every animated component must check:

```tsx
const prefersReduced = useReducedMotion();
if (prefersReduced) return; // skip animations
```

## Rules

1. Entrance animations: ALWAYS use GSAP (never CSS @keyframes)
2. CSS @keyframes: ONLY for infinite loops (loading spinners)
3. All values must use CSS custom properties from design-system.md
4. SplitType: always `.revert()` in cleanup
5. ScrollTrigger: always `.kill()` in cleanup
