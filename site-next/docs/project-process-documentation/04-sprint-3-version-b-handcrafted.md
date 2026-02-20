# 04 — Sprint 3: Version B (Handcrafted)

**Date:** February 18, 2026
**Version:** v0.3.0

---

## What We Were Doing

Sprint 3 built out the complete Version B (Handcrafted) experience. Where Capes says "here's the proof," Handcrafted says "here's the story." The structural reference was accordion.net.au — a brutalist, editorial agency site with massive typography and cinematic scroll pacing. The visual language was translated to Melt's brand: near-black backgrounds, monochrome-to-color image system, Industry font at 25vw+, and scroll-driven GSAP reveals.

---

## Design Language: Version B (Handcrafted)

- **Audience**: Creative directors, brand strategists, CMOs who respond to craft
- **Tone**: Editorial, confident, minimal, immersive
- **Colors**: Near-black `#0A0A0A`, white at opacity levels (0.06 ghost → 1.0 headings), Royal Blue `#3356FF` accent
- **Typography**: Industry font, uppercase, massive scale (`clamp(6rem, 25vw, 20rem)` for hero)
- **Images**: Default `grayscale(100%) brightness(0.7)` — reveal to full color on scroll or hover via GSAP
- **Borders**: `rgba(255,255,255,0.06–0.08)`, brighten on hover
- **Easing**: `cubic-bezier(0.42, 0, 0.04, 1)` throughout

---

## Homepage: 8-Section Structure (accordion.net.au inspired)

The HC homepage was rebuilt from scratch to match the accordion.net.au 8-section layout, adapted for Melt's content:

| Section | Component | Key Feature |
|---------|-----------|-------------|
| 1. Hero | `HandcraftedHero` | "EXECUTION" at 25vw+, GSAP char animation, cycling full-bleed images |
| 2. Stats | `HCStatsBar` | 4 proof stats, black bg, full-width grid |
| 3. Introduction | `HCIntroduction` | Body copy + BTS image GSAP marquee |
| 4. Work Slider | `HCWorkSlider` | Custom GSAP slider, 6 projects, monochrome → color |
| 5. About Interlude | `HCAboutInterlude` | 2-col image + mission statement |
| 6. Work Grid | `HCWorkGrid` | 2×2 grid, `saturate(0%)` → `saturate(100%)` on hover |
| 7. Mission | `HCMission` | Full-width "Great ideas aren't anything without great execution." at 7vw |
| 8. Team Roster | `HCTeamRoster` | Name + role list, minimal |

### HandcraftedHero Detail

The hero required the most animation work:
- 5 cycling background images, GSAP `gsap.to(opacity)` crossfade every 4s
- "EXECUTION" split into chars by SplitType
- GSAP timeline: each char from `{ opacity: 0, y: '100%', rotation: 8 }` → `{ opacity: 1, y: 0, rotation: 0, stagger: 0.05 }`
- Tagline and scroll indicator fade in with delay via GSAP
- No CSS `@keyframes` — 100% GSAP

---

## Monochrome-to-Color System

All HC images start desaturated and reveal to color:

```css
/* Default state */
.hc-work-card__image { filter: grayscale(100%) brightness(0.7); transition: filter 0.6s; }

/* Hover / scroll reveal */
.hc-work-card:hover .hc-work-card__image { filter: grayscale(0%) brightness(1); }
```

Scroll-triggered reveals use GSAP to animate `filter` property directly for hero/featured images.

---

## Sub-pages Built (All HC-Specific)

| Page | Key Features |
|------|-------------|
| Work | Sidebar filters (capability/client), GSAP stagger, monochrome-to-color |
| Case Study | Full-bleed dark hero, split layout (narrative / sticky sidebar), editorial feel |
| Service (×6) | Massive background number hero, dramatic pull-quote, minimal capabilities grid |
| About | Three cinematic "acts" with giant numbers, leadership cards, stats strip |
| Contact | "LET'S TALK" massive hero, centered dark form, bottom-border-only inputs |
| Insights | Editorial magazine layout, featured article card, dark grid, lock indicators |
| Article | Dark editorial, gate overlay, related insights |
| Scoper | Conversational 5-step flow, progress dots, visual option selection |
| Privacy | Character reveal, GSAP stagger |

---

## New CSS Files Added

```
src/app/work/work-hc.css
src/app/work/[slug]/case-study-hc.css
src/app/services/[slug]/service-hc.css
src/app/about/about-hc.css
src/app/contact/contact-hc.css
src/app/insights/insights-hc.css
src/app/insights/[slug]/article-hc.css
src/app/scope-your-project/scoper-hc.css
src/components/handcrafted/HandcraftedHero.css
src/components/handcrafted/HandcraftedHeader.css
src/components/handcrafted/HandcraftedFooter.css
src/components/handcrafted/HCStatsBar.css
src/components/handcrafted/HCIntroduction.css
src/components/handcrafted/HCWorkSlider.css
src/components/handcrafted/HCAboutInterlude.css
src/components/handcrafted/HCWorkGrid.css
src/components/handcrafted/HCMission.css
src/components/handcrafted/HCTeamRoster.css
```

---

## Outcome

Version B complete. Both versions fully operational. Version toggle works on every page. Clean build — 14/14 routes, 0 errors. Ready for content integration in Sprint 4.
