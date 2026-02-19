# Component Map — Status & Reference

## Shared (keep as-is)

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| VersionLayout | shared/VersionLayout.tsx | DONE | Lenis, AnimatePresence (HC), scroll-to-top |
| VersionToggle | shared/VersionToggle.tsx | DONE | Keep |
| Counter | shared/Counter.tsx | DONE | Uses GSAP correctly |
| Lightbox | shared/Lightbox.tsx | DONE | Keep |
| AccordionItem | shared/AccordionItem.tsx | DONE | Keep |
| WebGLErrorBoundary | shared/WebGLErrorBoundary.tsx | DONE | Keep |

## Shared — Ported from Vite

| Component | File | Status |
|-----------|------|--------|
| TextReveal | shared/TextReveal.tsx | DONE |
| ImageReveal | shared/ImageReveal.tsx | DONE |
| TransitionLink | shared/TransitionLink.tsx | DONE |
| ScrollProgress | shared/ScrollProgress.tsx | DONE |
| BackToTop | shared/BackToTop.tsx | DONE |
| MeltLogo | shared/MeltLogo.tsx | DONE |
| Preloader | shared/Preloader.tsx | DONE |
| CustomCursor | shared/CustomCursor.tsx | DONE |
| PageTransition | shared/PageTransition.tsx | DONE |

## Capes Components

| Component | File | Status |
|-----------|------|--------|
| CapesHeader | capes/CapesHeader.tsx | DONE — Black bg, 3-state theming via IntersectionObserver |
| CapesFooter | capes/CapesFooter.tsx | DONE — CTA, 4-col grid, grain |
| CapesLetterboxScroll | capes/CapesLetterboxScroll.tsx | DONE — Pinned, scrub, SplitType chars, letterbox bands |
| CapesServicesWheel | capes/CapesServicesWheel.tsx | DONE — Dark bg, grain, scrollable panel (80vh) |
| CapesStats | capes/CapesStats.tsx | DONE — Dark bg, grain, GSAP stagger, useCharacterReveal |
| CapesFeaturedWork | capes/CapesFeaturedWork.tsx | DONE — Asymmetric grid, ImageReveal, useWordReveal |
| CapesWhyMelt | capes/CapesWhyMelt.tsx | DONE — Staggered cards, GSAP entrance |
| CapesClientLogos | capes/CapesClientLogos.tsx | DONE — GSAP marquee, pause on hover |
| CapesTestimonials | capes/CapesTestimonials.tsx | DONE — Auto-rotate, dot nav |
| CapesContactCTA | capes/CapesContactCTA.tsx | DONE — Royal blue bg, form logic intact |

## Capes Pages (Animation Pass)

| Page | File | Status |
|------|------|--------|
| Work | app/(capes)/work/page.tsx | DONE — useCharacterReveal, GSAP stagger on grid |
| Case Study | app/(capes)/work/[slug]/page.tsx | DONE — Character/word reveals, ImageReveal, stagger |
| Service | app/(capes)/services/[slug]/page.tsx | DONE — Reveals, stagger, ImageReveal, alternating themes |
| About | app/(capes)/about/page.tsx | DONE — Character/word reveals, GSAP stagger |
| Contact | app/(capes)/contact/page.tsx | DONE — useCharacterReveal, section themes |
| Insights | app/(capes)/insights/page.tsx | DONE — Reveals, stagger on cards |
| Article | app/(capes)/insights/[slug]/page.tsx | DONE — useCharacterReveal, stagger, gating intact |
| Scoper | app/(capes)/scope-your-project/page.tsx | DONE — useCharacterReveal, form logic intact |
| Privacy | app/(capes)/privacy/page.tsx | DONE — data-section-theme="light" |

## Handcrafted Components

| Component | File | Status |
|-----------|------|--------|
| HandcraftedHeader | handcrafted/HandcraftedHeader.tsx + .css | DONE — Fixed, black bg, blur backdrop |
| HandcraftedFooter | handcrafted/HandcraftedFooter.tsx + .css | DONE — Black bg, centered layout |
| HandcraftedHero | handcrafted/HandcraftedHero.tsx + .css | DONE — 25vw+ GSAP chars, iceberg scroll, GSAP marquee |

## Handcrafted Pages (Animation Pass)

| Page | File | Status |
|------|------|--------|
| Work | app/(handcrafted)/work/page.tsx | DONE — GSAP stagger, monochrome filter on images |
| Case Study | app/(handcrafted)/work/[slug]/page.tsx | DONE — Hero monochrome-to-color on scroll, sticky sidebar |
| Service | app/(handcrafted)/services/[slug]/page.tsx | DONE — Massive bg numbers, GSAP parallax, monochrome |
| About | app/(handcrafted)/about/page.tsx | DONE — Cinematic scroll acts, leader cards, stats |
| Contact | app/(handcrafted)/contact/page.tsx | DONE — Character-level "Let's Talk" reveal |
| Insights | app/(handcrafted)/insights/page.tsx | DONE — Featured card entrance, grid stagger |
| Article | app/(handcrafted)/insights/[slug]/page.tsx | DONE — useCharacterReveal, stagger, gating intact |
| Scoper | app/(handcrafted)/scope-your-project/page.tsx | DONE — Framer Motion step transitions |
| Privacy | app/(handcrafted)/privacy/page.tsx | DONE — useCharacterReveal, GSAP stagger |

## Hooks

| Hook | File | Status |
|------|------|--------|
| useCharacterReveal | hooks/useCharacterReveal.ts | DONE — exports useCharacterReveal, useWordReveal, useLineReveal |
| useFirstVisit | hooks/useFirstVisit.ts | DONE |
| useTransition | hooks/useTransition.ts | DONE — Adapted for Next.js router |
| usePageReveal | hooks/usePageReveal.ts | DONE |
| useGsap | hooks/useGsap.ts | DONE |
| useLenis | hooks/useLenis.ts | DONE |
| useInView | hooks/useInView.ts | DONE |
| useReducedMotion | hooks/useReducedMotion.ts | DONE |
| useSplitText | hooks/useSplitText.ts | DONE |
