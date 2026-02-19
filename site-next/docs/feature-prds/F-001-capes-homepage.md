# F-001 — Capes Homepage
**Status:** In Progress
**Score:** 7/10
**Last updated:** 2026-02-19

---

## What This Feature Is

Version A homepage. Dark navy/black theme. GSAP-driven. Proves Melt executes at scale.
Reference: existing Vite site at `melt-future/site/src/components/sections/`

---

## Section Spec

### Section 1: LetterboxScroll
**Component:** `src/components/capes/CapesLetterboxScroll.tsx`
**Status:** Built — logo marquee fixed 2026-02-19

- 100vh, navy bg, `data-section-theme="dark"`
- Pinned with GSAP ScrollTrigger: `start: 'top top'`, `end: '+=200%'`, `scrub: 1`
- 3 messages, each split into chars with SplitType
- Messages cycle: chars fade out (yPercent + opacity) → next slides in → chars fade in
- Highlighted text (lime green): "great execution", "big events", "people, brands, and communities"
- Letterbox bands: top + bottom, 7.5vh, `--black` background
- Client logos bar: `position: absolute; bottom: 0;` black bg
  - GSAP marquee: `xPercent: -50, duration: 25, ease: 'linear', repeat: -1`
  - Doubled array `[...clients, ...clients]`
  - Pause on mouseenter, resume on mouseleave
  - Single row, `width: max-content`, `overflow: hidden` on bar

**Known issue 2026-02-19:** Verify marquee renders correctly (logos visible, single row, scrolling)

---

### Section 2: ServicesWheel
**Component:** `src/components/capes/CapesServicesWheel.tsx`
**Status:** Built; not audited

---

### Section 3: Stats
**Component:** `src/components/capes/CapesStats.tsx`
**Status:** Built; not audited

- 4 stats: 26+ Years | 10K+ Events | 18 Final Fours | 22yr Coca-Cola
- Dark bg, grain, GSAP stagger
- useCharacterReveal on heading

---

### Section 4: FeaturedWork
**Component:** `src/components/capes/CapesFeaturedWork.tsx`
**Status:** Built; not audited

- Asymmetric 12-column grid (NOT carousel)
- ImageReveal on each card
- White bg, `data-section-theme="light"`

---

### Section 5: WhyMelt
**Component:** `src/components/capes/CapesWhyMelt.tsx`
**Status:** Built; not audited

---

### Section 6: Testimonials
**Component:** `src/components/capes/CapesTestimonials.tsx`
**Status:** Built; not audited

---

### Section 7: ContactCTA
**Component:** `src/components/capes/CapesContactCTA.tsx`
**Status:** Built + forms verified (Sprint 4)

**CRITICAL:** Do not modify form logic or API calls.

---

## Changes Made

| Date | Change | Verified |
|------|--------|---------|
| 2026-02-19 | Logo marquee: static → GSAP xPercent marquee | Pending user |
| 2026-02-19 | Removed CapesClientLogos from page.tsx | Pending user |

---

## 10/10 Acceptance Criteria

- [ ] User opens / in browser and confirms V1 looks correct
- [ ] Logo bar at bottom of hero scrolls automatically in one row
- [ ] Logos pause on hover
- [ ] 3 messages cycle correctly on scroll
- [ ] No duplicate logos section below
- [ ] All 7 sections visible and correctly spaced
- [ ] No console errors
