# F-002 — HC Homepage (accordion.net.au Rebuild)
**Status:** Not Started
**Score:** 0/10
**Last updated:** 2026-02-19

---

## What This Feature Is

Version B homepage. Complete rebuild to match accordion.net.au structure 1:1 with Melt content and branding.

User directive: "the bones are literally fully wrong right now. GET THE DAMN STRUCTURE RIGHT FIRST."

Reference: https://www.accordion.net.au (scraped 2026-02-19)

---

## Accordion.net.au Structure (Reference)

1. Hero — full-screen preloader, 15 cycling images, giant headline
2. Stats bar — two alternating rows of motion/stills stats
3. Introduction — `( Introduction )` tag, body, BTS image marquee
4. Project slider — `### MOTION`, `( Our selection )`, Swiper.js, animated counter, CTA
5. About interlude — mission text, one image, "about us →"
6. Photo grid — `### PHOTO ### GRAPHY`, 4 cards, CTA
7. Mission statement — full-width text
8. Artists roster — `### ARTISTS`, directors + photographers list, CTA

---

## Melt V2 Adaptation

### Section 1: HC Hero
**Component:** `src/components/handcrafted/HandcraftedHero.tsx` (REBUILD required)

- Full-screen cycling background images (crossfade between 5-10 event photos)
- "EXECUTION" at minimum `clamp(6rem, 25vw, 20rem)` — font: industry
- GSAP character animation on page load: chars from `{ opacity:0, y:'100%', rotation:8 }` → stagger in
- Image behind text, slight overlay for readability
- Monochrome → color: hero images start desaturated, reveal to color

**Content:** Hero word = "EXECUTION"

---

### Section 2: HC Stats Bar
**Component:** New — `src/components/handcrafted/HCStatsBar.tsx`

- 4 proof stats in alternating-row or single-row format
- Stats: `26+ Years` | `10K+ Events` | `18 Final Fours` | `22yr Coca-Cola`
- Near-black background, white text
- Minimal, high-contrast

---

### Section 3: HC Introduction
**Component:** New — `src/components/handcrafted/HCIntroduction.tsx`

- Tag: `( Introduction )` — parentheses, small caps or eyebrow style
- Body copy: "We execute what others only imagine. 26 years of building the moments that define brands."
- BTS event image marquee: horizontal auto-scroll of event/behind-the-scenes images

---

### Section 4: HC Work Slider
**Component:** New — `src/components/handcrafted/HCWorkSlider.tsx`

- Heading: `### ACTIVATIONS` style (hash marks, uppercase)
- Sub-heading: `( Our selection )`
- Swiper.js slides — each slide: full-bleed image + client name + project title + year
- CTA: "all work →" → /work
- Monochrome → color on hover per slide

**Data source:** `src/data/projects.ts` — use featured projects

---

### Section 5: HC About Interlude
**Component:** New — `src/components/handcrafted/HCAboutInterlude.tsx`

- Single large image (event/team photo)
- Mission copy: "Great ideas aren't anything without great execution."
- Link: "about us →" → /about

---

### Section 6: HC Work Grid
**Component:** New — `src/components/handcrafted/HCWorkGrid.tsx`

- Heading: `### BRAND` + line break + `### ING` (or `### EXPERI` + `### ENCES`)
- 4 project cards, 2x2 grid
- Each card: monochrome `filter: saturate(0%)` → hover: `saturate(100%)`
- Title + client animate up from below on hover (translate from y:250% to y:0)
- CTA: "all work →" → /work

---

### Section 7: HC Mission
**Component:** New — `src/components/handcrafted/HCMission.tsx`

- Full-width dark section
- Massive text: "Great ideas aren't anything without great execution."
- No images, pure typography
- Scale: clamp(3rem, 6vw, 6rem) or larger

---

### Section 8: HC Team Roster
**Component:** New — `src/components/handcrafted/HCTeamRoster.tsx`

- Heading: `### TEAM`
- Team members listed
- CTA: "our work →" → /work

---

## Component File Location

All new HC sections: `src/components/handcrafted/`
Homepage assembly: `src/app/page.tsx` — `HandcraftedHome` function

---

## CSS Token Rules

ALL CSS must use globals.css tokens WITHOUT `--color-*` prefix:
- `--black` (not --color-black)
- `--white` (not --color-white)
- `--gray-900` (not --color-gray-900)
- `--container`, `--gutter`, `--space-*`

---

## 10/10 Acceptance Criteria

- [ ] User opens /?version=handcrafted and confirms correct structure
- [ ] 8 sections visible in correct order
- [ ] "EXECUTION" hero: minimum 25vw, GSAP char animation plays on load
- [ ] Hero cycling images work
- [ ] Stats bar shows 4 proof points
- [ ] Work slider: Swiper.js with real project images
- [ ] About interlude: image + mission text + link
- [ ] Work grid: 4 cards, monochrome → color hover
- [ ] Mission statement: full-width, massive
- [ ] Team roster: names listed
- [ ] All links functional
- [ ] No console errors
- [ ] `npx next build` passes clean
