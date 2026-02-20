# 06 — Sprint 5: Performance Cleanup

**Date:** February 19–20, 2026
**Version:** v0.5.0

---

## What We Were Doing

After the v0.4.0 deploy, the development server was crashing the local machine — RAM spiking to unsustainable levels during hot reload. This sprint diagnosed the root causes and fixed them without touching any visual output. Pure performance and stability work.

---

## Diagnosis

The crash was caused by three compounding issues:

### Issue 1: Eager Imports of All 15 Components
`page.tsx` imported every Capes and Handcrafted homepage component at module load time — even components for the version that wasn't currently active. Turbopack compiled, watched, and hot-reloaded all 15 components simultaneously on every file save, regardless of which version the user was viewing.

### Issue 2: No Node.js Heap Limit
The `dev` script was bare `next dev` with no memory ceiling. Turbopack with a large module graph (GSAP + Lenis + SplitType + all component CSS) had no ceiling and consumed all available RAM.

### Issue 3: ScrollTrigger.normalizeScroll(true) in Lenis Setup
`normalizeScroll(true)` is an aggressive setting that intercepts all scroll and touch events globally. In dev mode with HMR it created compounding event listener conflicts on each hot reload.

### Issue 4: Dead Library Weight
- **Three.js** (`three`, `@types/three`): ~600KB — installed but never imported anywhere in `src/`. Pure ballast.
- **Framer Motion**: ~140KB gzipped — imported in only 2 files (a fade transition and a step slider). Entire library for 20 lines of animation.

---

## Fixes Applied

### Fix 1: Lazy-load Both Versions via next/dynamic

```tsx
// Before — all 15 components compile regardless of version
import CapesLetterboxScroll from '@/components/capes/CapesLetterboxScroll';
import { HandcraftedHero } from '@/components/handcrafted/HandcraftedHero';
// ... 13 more

// After — only the active version compiles
const CapesLetterboxScroll = dynamic(
  () => import('@/components/capes/CapesLetterboxScroll'),
  { ssr: false }
);
const HandcraftedHero = dynamic(
  () => import('@/components/handcrafted/HandcraftedHero').then(m => ({ default: m.HandcraftedHero })),
  { ssr: false }
);
```

### Fix 2: Node Heap Ceiling

```json
// package.json
"dev": "NODE_OPTIONS='--max-old-space-size=4096' next dev"
```

4GB ceiling prevents runaway consumption. If the process hits the limit, Node throws a managed OOM error instead of consuming all system RAM.

### Fix 3: Remove normalizeScroll

```ts
// Removed from useLenis.ts
ScrollTrigger.normalizeScroll(true);  // ← deleted
```

Lenis and GSAP still sync correctly via the RAF ticker. This line was just adding aggressive event interception on top.

### Fix 4: Uninstall Dead Libraries

```bash
npm uninstall framer-motion three @types/three
# Removed 12 packages
```

Framer Motion's 2 usages replaced with GSAP:
- `VersionLayout.tsx`: `AnimatePresence` + `motion.div` → GSAP `fromTo` fade/slide on pathname change
- `scope-your-project/page.tsx`: 5 `motion.div` step wrappers → single `div` with GSAP `fromTo` on step change

---

## Result

| Metric | Before | After |
|--------|--------|-------|
| Dev startup RAM | Runaway (crashed machine) | Stable, ~1.5–2GB |
| Bundle weight | GSAP + Framer Motion + Three.js | GSAP only (Framer + Three removed) |
| Modules compiled on save | All 15 homepage components | Only active version's components |
| Build output | 14/14 routes, 0 errors | 14/14 routes, 0 errors |

---

## Files Touched

```
site-next/package.json           (dev script + uninstall)
site-next/package-lock.json      (12 packages removed)
site-next/src/app/page.tsx       (dynamic imports)
site-next/src/components/shared/VersionLayout.tsx  (Framer → GSAP)
site-next/src/app/scope-your-project/page.tsx      (Framer → GSAP)
site-next/src/hooks/useLenis.ts  (normalizeScroll removed)
```

---

## Lesson

Animation libraries are not free. Three.js alone was 600KB that the bundler had to process on every hot reload — dead weight from a feature (WebGL effects) that existed in the Vite prototype but was never ported to the Next.js build. Audit dependencies against actual imports before each major version.
