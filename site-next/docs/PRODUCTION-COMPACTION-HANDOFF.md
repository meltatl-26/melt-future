# PRODUCTION COMPACTION HANDOFF
**READ THIS FIRST at the start of every session.**
**UPDATE THIS before ending every session.**

---

## Handoff — 2026-02-19

### What Changed This Session

**Phase 1 Bug Fixes (all applied, none yet user-verified):**

1. **HC Sub-Page CSS Tokens** — 8 `*-hc.css` files had undefined `--color-*` prefixed tokens causing completely black/invisible pages. All replaced with correct `globals.css` tokens.
   - Files: `about/about-hc.css`, `contact/contact-hc.css`, `insights/insights-hc.css`, `insights/[slug]/article-hc.css`, `scope-your-project/scoper-hc.css`, `work/work-hc.css`, `services/[slug]/service-hc.css`, `work/[slug]/case-study-hc.css`
   - Token map: `--color-black`→`--black`, `--color-white`→`--white`, `--container-max`→`--container`, `--grid-gutter`→`--gutter`, `--space-4xl`→`--space-3xl`, `var(--duration-normal)`→`0.6s`, `var(--duration-fast)`→`0.2s`, `var(--ease-default)`→`var(--ease-custom)`

2. **VersionToggle Invisible in HC Header** — Added `.hc-header .version-toggle` CSS rules to `HandcraftedHeader.css`. Toggle was rendering but had zero positioning (fell behind other elements or out of flow).

3. **Capes Logo Bar → GSAP Marquee** — `CapesLetterboxScroll.tsx` converted from static flex list to GSAP `xPercent: -50, repeat: -1` marquee. Doubled clients array. Added mouseenter/mouseleave pause/resume.

4. **Removed Duplicate CapesClientLogos from Homepage** — `page.tsx` no longer imports or renders `CapesClientLogos`. Logo marquee is integrated into LetterboxScroll hero. Homepage order is now 7 sections (no duplicate).

**Governance Docs Created:**
- `docs/PRODUCTION-SOURCE-OF-TRUTH.md`
- `docs/production-decisions.yaml`
- `docs/PRODUCTION-FEATURE-SCORECARD.md`
- `docs/PRODUCTION-10-10-PLAN.md`
- `docs/PRODUCTION-COMPACTION-HANDOFF.md` (this file)
- `docs/feature-prds/FEATURE-PRD-INDEX.md`
- `docs/feature-prds/FEATURE-PRD-REGISTRY.yaml`
- `docs/feature-prds/F-001-capes-homepage.md`
- `docs/feature-prds/F-002-hc-homepage.md`
- `docs/feature-prds/F-003-version-toggle.md`
- `docs/plans/2026-02-19-session.md`

**site-next/CLAUDE.md:** Updated with mandatory session protocol.

### What Was Verified by User

NOTHING from this session has been user-verified in browser yet.

All Phase 1 fixes are applied and should work, but require:
- User runs `npm run dev`
- User confirms V2 sub-pages are visible (not black)
- User confirms VersionToggle is visible in V2 and switches back to V1
- User confirms logo bar is single-row auto-scrolling in V1 hero
- User confirms no duplicate logos section on V1 homepage

### What's Broken / Known Issues

1. **V2 Homepage structure is WRONG** — HandcraftedHero exists but has wrong bones. Needs complete rebuild to accordion.net.au 8-section structure (see F-002).
2. **V2 Sub-pages layout** — CSS tokens are fixed so content should be visible, but layout/structure needs full audit.
3. **Capes sub-pages** — User reported "many sub-page problems". Audit pending (Phase 5 of plan).
4. **Build not re-run** — `npx next build` has not been run after Phase 1 fixes.

### Exact Next Step When Session Resumes

1. User confirms Phase 1 fixes in browser (run `npm run dev` from `melt-future/site-next`)
2. If issues found → fix them
3. Then: **Rebuild V2 Homepage** (F-002) — create 8 new HC section components per accordion.net.au structure
4. Then: Audit and fix Capes sub-pages
5. Then: Run `npx next build`
6. Then: Update this handoff doc
7. NEVER commit without user typing "rocket"

### Build Status

Last known build: Sprint 4 (pre-Phase 1 fixes). Phase 1 changes are CSS/TSX only, no type errors expected.
Not re-run after fixes.

### Commit Hash

Uncommitted — all changes staged locally only.

### Files Changed This Session

```
src/app/about/about-hc.css
src/app/contact/contact-hc.css
src/app/insights/insights-hc.css
src/app/insights/[slug]/article-hc.css
src/app/scope-your-project/scoper-hc.css
src/app/work/work-hc.css
src/app/services/[slug]/service-hc.css
src/app/work/[slug]/case-study-hc.css
src/components/handcrafted/HandcraftedHeader.css
src/components/capes/CapesLetterboxScroll.tsx
src/components/capes/CapesLetterboxScroll.css
src/app/page.tsx
docs/PRODUCTION-SOURCE-OF-TRUTH.md (new)
docs/production-decisions.yaml (new)
docs/PRODUCTION-FEATURE-SCORECARD.md (new)
docs/PRODUCTION-10-10-PLAN.md (new)
docs/PRODUCTION-COMPACTION-HANDOFF.md (new)
docs/feature-prds/FEATURE-PRD-INDEX.md (new)
docs/feature-prds/FEATURE-PRD-REGISTRY.yaml (new)
docs/feature-prds/F-001-capes-homepage.md (new)
docs/feature-prds/F-002-hc-homepage.md (new)
docs/feature-prds/F-003-version-toggle.md (new)
docs/plans/2026-02-19-session.md (new)
site-next/CLAUDE.md (updated)
```

---

## Handoff — 2026-02-19 (Update 2 — V2 Rebuild Complete)

### What Changed This Session (Update 2)

**V2 Homepage Rebuilt — accordion.net.au structure (8 sections):**

1. **HandcraftedHero.tsx / HandcraftedHero.css** — REBUILT
   - Full-screen cycling background images (5 images, GSAP crossfade every 4s)
   - "EXECUTION" at `clamp(6rem, 25vw, 20rem)`, GSAP char animation on load
   - Monochrome-to-color: hero images start `grayscale(100%) brightness(0.5)`
   - Scroll indicator with CSS pulse animation
   - Removed: Iceberg section, Statement section, Stats, Client marquee, CTA (all now separate)

2. **HCStatsBar.tsx / HCStatsBar.css** — NEW
   - 4 proof stats: 26+ Years | 10K+ Events | 18 Final Fours | 22yr Coca-Cola
   - Black bg, 4-column grid, full-width

3. **HCIntroduction.tsx / HCIntroduction.css** — NEW
   - `( Introduction )` tag
   - Body copy about Melt's execution focus
   - BTS event image marquee (GSAP xPercent, 8 images doubled)
   - Monochrome-to-color hover on marquee images

4. **HCWorkSlider.tsx / HCWorkSlider.css** — NEW
   - `### ACTIVATIONS` heading style
   - Custom GSAP slider with 6 projects (first 6 from projects.ts)
   - Image/info panel with counter, client, title, year, "View project →" link
   - Arrow nav + dot nav
   - "all work →" CTA
   - Monochrome → color hover on main image

5. **HCAboutInterlude.tsx / HCAboutInterlude.css** — NEW
   - 2-column: image left, text right
   - Mission statement: "Great ideas aren't anything without great execution."
   - "about us →" link to /about
   - Monochrome → color hover on image

6. **HCWorkGrid.tsx / HCWorkGrid.css** — NEW
   - `### BRAND ### ACTIVATION` heading style
   - 2×2 grid of 4 featured projects
   - Monochrome `filter: saturate(0%)` default → `saturate(100%)` hover
   - Card info (client + title) animates up on hover
   - "all work →" CTA

7. **HCMission.tsx / HCMission.css** — NEW
   - Full-width: "Great ideas aren't anything without great execution."
   - `clamp(2.5rem, 7vw, 7rem)`, uppercase, black bg

8. **HCTeamRoster.tsx / HCTeamRoster.css** — NEW
   - `### TEAM` heading
   - 6 team members in 2-column list
   - Name + role per row
   - "our work →" CTA

9. **src/app/page.tsx** — UPDATED
   - HandcraftedHome now renders all 8 sections in order
   - CapesHome unchanged (7 sections, no duplicate logos)

**Build:** `npx next build` — PASSES CLEAN. Zero TS errors, zero build errors.

### What Was Verified by User (Update 2)

NOTHING — build passes but user has not run dev server to confirm visual output.

### What's Broken / Known Issues (Update 2)

1. **V2 Homepage** — all 8 sections built but NOT user-verified in browser yet
2. **V2 Sub-pages** — CSS tokens fixed but layout/structure unaudited
3. **Capes sub-pages** — many problems per user, unaudited
4. **Team data** — HCTeamRoster uses hardcoded team members; real team data not yet in data file
5. **Hero images** — only 3 hero images exist (`hero-02/03/04.webp`); also using 2 work images for cycling

### Exact Next Step When Session Resumes

1. User runs `npm run dev` from `melt-future/site-next`
2. User confirms V2 homepage: switch to V2 via toggle, check all 8 sections
3. User confirms Phase 1 bug fixes: V2 sub-pages visible, toggle works, Capes logo bar
4. List any visual issues found → fix them
5. Then: Capes sub-page audit (Phase 5 of plan)
6. Then: V2 sub-page audit
7. NEVER commit without "rocket"

### Build Status (Update 2)

PASS — `npx next build` clean as of 2026-02-19.

### Commit Hash (Update 2)

Uncommitted — all changes local only.

### Files Changed (Update 2)

```
src/components/handcrafted/HandcraftedHero.tsx (rebuilt)
src/components/handcrafted/HandcraftedHero.css (rebuilt)
src/components/handcrafted/HCStatsBar.tsx (new)
src/components/handcrafted/HCStatsBar.css (new)
src/components/handcrafted/HCIntroduction.tsx (new)
src/components/handcrafted/HCIntroduction.css (new)
src/components/handcrafted/HCWorkSlider.tsx (new)
src/components/handcrafted/HCWorkSlider.css (new)
src/components/handcrafted/HCAboutInterlude.tsx (new)
src/components/handcrafted/HCAboutInterlude.css (new)
src/components/handcrafted/HCWorkGrid.tsx (new)
src/components/handcrafted/HCWorkGrid.css (new)
src/components/handcrafted/HCMission.tsx (new)
src/components/handcrafted/HCMission.css (new)
src/components/handcrafted/HCTeamRoster.tsx (new)
src/components/handcrafted/HCTeamRoster.css (new)
src/app/page.tsx (updated)
```

---

## Template for Next Update

```markdown
## Handoff — YYYY-MM-DD [TIME]

### What Changed This Session
[List every file changed and what changed]

### What Was Verified by User
[List only what user confirmed in browser — nothing else counts]

### What's Broken / Known Issues
[List everything known to be wrong]

### Exact Next Step When Session Resumes
[Be specific enough that a new Claude session can pick up instantly]

### Build Status
[pass / fail / not run]

### Commit Hash
[hash or "uncommitted"]

### Files Changed This Session
[file list]
```
