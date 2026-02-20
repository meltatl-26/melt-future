# 09 — Lessons Learned

**Date:** February 2026 (ongoing)
**Phase:** Retrospective

---

## What Worked

### Dual-Version Architecture
The single best decision of the project. Having two complete visual identities in one codebase created a genuinely differentiated product. The version toggle is a conversation starter, not a gimmick. Every client presentation has started with "which version do you want to see?" — and that question alone reframes the meeting.

### Data Layer First
Separating content from UI from day one meant Sprint 2 and Sprint 3 could move fast. Components just call `getProjectBySlug()` and render — no hardcoded content to find and replace, no duplicated strings across files. When we enriched case study copy in Sprint 4, we touched one file (`projects.ts`) and it rippled everywhere.

### GSAP as the Sole Animation Library
After removing Framer Motion and Three.js, GSAP handles everything: ScrollTrigger, SplitType character reveals, marquees, counters, page transitions, image reveals, step animations. One library, one mental model, one cleanup pattern. No context switching between animation APIs.

### Mailchimp API Routes on Day 1
Getting all 4 API routes done in Sprint 1 meant we never had to go back and wire up forms — they were wired before the forms existed. The Sprint 4 bugs were field mapping issues (name vs firstName), not architectural issues. Forms "just worked" from the beginning structurally.

---

## What We'd Do Differently

### Audit Dependencies Before Installing
Three.js was installed because the Vite prototype used it for WebGL effects — but those effects were never ported to the Next.js build. It sat in `package.json` for 4 sprints as dead weight. **Rule going forward: `npm ls <package>` before every sprint to check what's actually imported.**

### Set Memory Limits From Day 1
The dev server RAM issue was entirely preventable. `NODE_OPTIONS='--max-old-space-size=4096'` should be in every Next.js project's dev script by default. Turbopack's memory appetite is documented — we just didn't account for it until it crashed the machine.

### Lazy-Load Version Components From Sprint 2
We didn't add `next/dynamic` until Sprint 5. The right time was Sprint 2 — the moment we had two distinct component trees that would never both render simultaneously. The performance cost was real during active development.

### normalizeScroll Belongs Off
`ScrollTrigger.normalizeScroll(true)` sounded like a good idea (normalize scroll behavior for GSAP) but it's aggressive and creates event listener conflicts in dev mode. It should only be considered for specific mobile scroll issues, not enabled globally by default.

### CSS Token Naming Consistency Earlier
The HC sub-pages (Sprints 3 and 4) used `--color-black` and `--container-max` — wrong token names that existed in an earlier draft of the design system but were never in the final `globals.css`. This caused all 8 HC sub-pages to render completely black until Sprint 5. **Rule: Reference `globals.css` explicitly when writing any new CSS. Never infer variable names.**

---

## Recurring Patterns Worth Documenting

### GSAP Cleanup Pattern
Every `useEffect` containing GSAP must return a cleanup:
```tsx
return () => {
  if (splitRef.current) splitRef.current.revert();
  ScrollTrigger.getAll().forEach(st => st.kill());
};
```
Skipping this causes DOM accumulation and broken layouts on HMR.

### Form Field Mapping
Mailchimp API expects `firstName`, not `name`. This burned us twice. Any new form component must explicitly map `name → firstName` at the point of API submission.

### useRef Cast Pattern
`useCharacterReveal` and `useWordReveal` return `RefObject<HTMLElement>`. When attaching to a specific element type, cast explicitly:
```tsx
ref={headingRef as React.Ref<HTMLHeadingElement>}
```

### Version Toggle + Route Preservation
The version toggle must preserve the current route. It's not a link to `/` — it's a context state change. `VersionProvider` handles this, but any new toggle UI must call `setVersion()` not `router.push('/')`.

---

## Open Questions / Future Sprints

- **Real photography**: Several new projects use wireframe placeholders. Professional event photography would significantly strengthen the work grid.
- **CMS migration**: The data layer is ready for Sanity or Contentful. The case for migration grows as the client starts wanting to update case studies without developer involvement.
- **Analytics**: No tracking implemented yet. Vercel Analytics + Google Analytics 4 should be added before the domain goes live.
- **Performance audit**: Lighthouse > 90 target. Need to run full audit on both versions.
- **Video integration**: Melt U YouTube videos should be embedded selectively on the Melt U case study page and potentially the About page.
- **SEO**: `metadataBase` set, OG images in place. Need per-page metadata review — especially service pages and case studies which have the most long-tail search potential.
