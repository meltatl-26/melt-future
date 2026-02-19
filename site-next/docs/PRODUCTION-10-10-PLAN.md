# PRODUCTION 10/10 PLAN
**Last updated:** 2026-02-19

What "perfect" (score 10/10) looks like for every major feature.
A feature scores 10 only when the user says "yes, this is exactly right" in the browser.

---

## Version A (Capes) Homepage — 10/10 Definition

**LetterboxScroll Hero:**
- 100vh, navy background, pinned to viewport during scroll
- Black letterbox bands top/bottom (7.5vh each)
- 3 messages cycle on scroll with SplitType char animations
- Chars fade out upward, next message slides in from bottom
- "great execution" highlighted in lime green
- Client logos auto-scroll in single row at bottom of hero (GSAP xPercent marquee, pause on hover)
- Performance: no jank, smooth scrub

**ServicesWheel:**
- Matches Vite site reference exactly
- Dark background, readable, interactive

**Stats:**
- 4 animated counters: "26+ Years", "10K+ Events", "18 Final Fours", "22yr Coca-Cola"
- Numbers count up on scroll enter
- Dark bg, grain texture, character reveal on heading

**FeaturedWork:**
- Asymmetric 12-column grid — NOT a carousel
- Each card has ImageReveal (clip-path animation)
- White/light background
- Hover: title/category animate in

**WhyMelt:**
- Cards with staggered entrance
- Off-white background

**Testimonials:**
- Auto-rotate every 5s
- Dot navigation, keyboard accessible
- Dark background

**ContactCTA:**
- Royal blue background
- Form submits successfully to Mailchimp
- No 404 on form submit

---

## Version B (Handcrafted) Homepage — 10/10 Definition

**HC Hero:**
- Full-screen cycling background images (smooth crossfade)
- "EXECUTION" at minimum 25vw, maximum readability
- GSAP character animation on load: each char from `opacity:0, y:'100%', rotation:8` → stagger in
- Stats visible alongside or below hero word
- Monochrome-to-color on hero images

**HC Stats Bar:**
- 2 rows alternating, or 4 stats in single row
- "26+ Years" | "10K+ Events" | "18 Final Fours" | "22yr Coca-Cola"
- Minimal treatment, high contrast

**HC Introduction:**
- `( Introduction )` tag in parentheses
- 2-3 sentences of Melt body copy
- BTS event image marquee below copy

**HC Work Slider:**
- `### ACTIVATIONS` heading style (accordion.net.au pattern)
- `( Our selection )` subheading
- Swiper.js slides: image + client + project title + year
- CTA "all work →"

**HC About Interlude:**
- Single image
- Mission text: "Great ideas aren't anything without great execution."
- "about us →" link

**HC Work Grid:**
- `### BRAND` + `### ING` stacked heading (or equivalent Melt category)
- 4 project cards in grid
- Monochrome → color on hover
- Title/client animate up on hover
- CTA "all work →"

**HC Mission Statement:**
- Full-width, massive type
- "Great ideas aren't anything without great execution."
- White on black

**HC Team Roster:**
- `### TEAM` heading
- Team member names listed
- CTA "our work →"

---

## Version B Sub-Pages — 10/10 Definition

**Work Page:**
- "WORK" heading at large scale
- Filter bar: `all work` | `activations (#)` | `branding (#)`
  - Inactive: 0.25 opacity
  - Active: 1.0 opacity + filled square bullet, padding-left animates in
  - Filter animation: 0.6s ease
- View toggle: `list` | `grid`
- Grid: monochrome `filter: saturate(0%)` → `saturate(100%)` hover
- Hover: title + client animate up from below
- List view: expanded metadata per project

**About Page:**
- Hero: image collage (6 overlapping/parallax images)
- "ABOUT US" heading
- Sticky tab nav: `ABOUT` | `TEAM` | `APPROACH` | `VALUES`
- 4 scroll-tracked content panels
- 4-image grid block
- Full-width CTA marquee: "our work" scrolling text → /work link

---

## Infrastructure — 10/10 Definition

**VersionToggle:**
- Visible in BOTH versions (Capes + HC headers)
- Clicking switches version immediately
- Choice persists on page reload (localStorage)
- Accessible: keyboard operable, proper ARIA

**Session Protocol:**
- PRODUCTION-COMPACTION-HANDOFF.md updated at end of every session
- Every change logged in docs/plans/YYYY-MM-DD-session.md
- No commits without "rocket"
- User always confirms in browser before any feature scores 10

**Build:**
- `npx next build` passes clean with zero errors
- No TypeScript errors
- No broken imports
