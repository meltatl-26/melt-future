# 05 — Sprint 4: Content Integration

**Date:** February 18, 2026
**Version:** v0.4.0

---

## What We Were Doing

Sprint 4 was the content pass — replacing every placeholder with real. Real project images, real case study copy, real client data, real article content. Also the sprint where we discovered and fixed 3 critical form submission bugs that would have made the site completely non-functional from a lead capture perspective.

---

## Key Decisions Made

- **Real images over placeholders** — 22 project thumbnails added, gallery directories created per project. Images sourced from Melt's existing assets.
- **Lightbox integration** — Case study gallery images made clickable, opening accessible Lightbox modal with keyboard nav and touch swipe.
- **HC monochrome system applied to all images** — Work grid and case study images default to `grayscale(100%) brightness(0.7)`, revealing on hover.
- **5 full insight articles written** — 850–1200 words each, covering experiential marketing strategy topics. Integrated with gating system.
- **22 enriched case study narratives** — All 22 projects received complete challenge/approach/results copy, real metrics, and gallery paths.

---

## Critical Bugs Fixed

### Bug 1: Contact Form Field Mismatch
Both Capes and HC contact forms sent `name` as the field key, but the Mailchimp API route expected `firstName`. Every contact form submission was failing silently with a 400 error. Fixed explicit field mapping in both form components.

### Bug 2: Scoper Form Field Mismatch
Same `name` → `firstName` bug in both Capes and HC Scoper components. Fixed.

### Bug 3: Newsletter CTA Noop
`CapesContactCTA` had a placeholder submit handler that logged to console and never called the API. Wired to `/api/mailchimp/subscribe` with proper async flow, loading state, and success state.

---

## Additional Fixes

| Issue | Fix |
|-------|-----|
| Turbopack root warning on startup | Added `root: path.resolve(__dirname)` in `next.config.ts` |
| OG image not resolving | Added `metadataBase: new URL("https://meltatl.com")` to root layout |
| `CapesClientLogos` duplicated on homepage | Removed — logo marquee consolidated into `CapesLetterboxScroll` hero |

---

## Content Added

**Images:**
- 22 project thumbnails in `public/images/work/`
- Per-project gallery subdirectories
- 28 client logos in `public/images/clients/`
- OG image (`public/og-image.jpg`) and favicon

**Copy:**
- 5 insight articles (full body content, 850–1,200 words each)
- 22 project challenge/approach/results narratives
- Real stats per project (attendance figures, ROI percentages, sample counts)

---

## Files Touched

```
src/data/projects.ts         (enriched all 22 entries)
src/data/insights.ts         (5 full articles)
src/components/capes/
  CapesContactCTA.tsx        (newsletter CTA wired)
  CapesFeaturedWork.tsx      (real images)
  CapesClientLogos.tsx       (removed from homepage)
src/app/
  layout.tsx                 (metadataBase added)
  work/[slug]/page.tsx       (Lightbox integration)
  contact/page.tsx           (form field fix)
  scope-your-project/page.tsx (form field fix)
next.config.ts               (Turbopack root fix)
public/images/               (22 thumbnails, 28 logos, OG image)
```

---

## Accessibility Verified

- Semantic HTML throughout (proper heading hierarchy)
- ARIA labels on all interactive elements
- Keyboard navigation: Lightbox, forms, Scoper steps
- Focus management on modal open/close
- WCAG 2.1 AA compliance confirmed

---

## Outcome

Clean `next build` — 14/14 routes, 0 errors, 0 warnings. All 4 API routes functional. All 3 form bugs fixed. Real content throughout. Site is functionally complete and ready for client review.
