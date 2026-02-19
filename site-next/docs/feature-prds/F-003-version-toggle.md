# F-003 — VersionToggle (Both Versions)
**Status:** In Progress
**Score:** 5/10
**Last updated:** 2026-02-19

---

## What This Feature Is

The VersionToggle lets users switch between Version A (Capes) and Version B (Handcrafted).
It must be visible and functional in BOTH version headers.

---

## How It Works

- Component: `src/components/shared/VersionToggle.tsx`
- State: `useVersion()` hook → reads/writes to localStorage key `"melt-version"`
- Values: `"capes"` | `"handcrafted"`
- Default: `"capes"` (Version A renders on first visit)
- On click: sets new version in context → page re-renders with new version

---

## Header Integration

### Version A (Capes Header)
**Component:** `src/components/capes/CapesHeader.tsx`
**CSS:** `src/components/capes/CapesHeader.css`
**Status:** Working

CSS rule: `.header .version-toggle` — positioned absolute, right side of header.

---

### Version B (HC Header)
**Component:** `src/components/handcrafted/HandcraftedHeader.tsx`
**CSS:** `src/components/handcrafted/HandcraftedHeader.css`
**Status:** Fixed 2026-02-19 — awaiting user confirmation

**Bug (resolved 2026-02-19):**
HC header uses `.hc-header` class. `.version-toggle` CSS only existed under `.header .version-toggle`.
No CSS rules matched in HC header → toggle was invisible (rendered but zero visibility).

**Fix applied:**
```css
/* VersionToggle positioning in HC header */
.hc-header .version-toggle {
  position: absolute;
  right: var(--space-xs, 8px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

@media (max-width: 768px) {
  .hc-header .version-toggle {
    position: static;
    transform: none;
    margin-left: auto;
  }
}
```

---

## Changes Made

| Date | Change | File | Verified |
|------|--------|------|---------|
| 2026-02-19 | Added .hc-header .version-toggle CSS rules | HandcraftedHeader.css | Pending user |

---

## 10/10 Acceptance Criteria

- [ ] Toggle visible in Version A header (right side)
- [ ] Toggle visible in Version B header (right side)
- [ ] Clicking toggle in V1 switches to V2 correctly
- [ ] Clicking toggle in V2 switches to V1 correctly
- [ ] Version choice persists on page reload
- [ ] Accessible: keyboard operable, correct ARIA attributes
- [ ] Mobile: toggle visible and accessible on small screens
