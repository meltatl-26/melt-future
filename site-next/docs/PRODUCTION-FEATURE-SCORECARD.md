# PRODUCTION FEATURE SCORECARD
**Last updated:** 2026-02-19

Scoring: 0 = not started, 5 = built but unverified, 10 = built + user confirmed in browser

---

## Version A (Capes)

### Homepage
| Feature | Score | Notes |
|---------|-------|-------|
| LetterboxScroll hero (pinned, 3 messages, SplitType chars) | 8 | Built; user has not done full review |
| Client logo marquee (bottom of hero, GSAP, one row) | 5 | Just fixed 2026-02-19; awaiting user confirmation |
| ServicesWheel | 7 | Built; not audited |
| Stats (4 counters) | 7 | Built; not audited |
| FeaturedWork (asymmetric grid) | 7 | Built; not audited |
| WhyMelt cards | 7 | Built; not audited |
| Testimonials (auto-rotate) | 7 | Built; not audited |
| ContactCTA (Mailchimp wired) | 8 | Built + forms confirmed working (Sprint 4) |
| NO duplicate ClientLogos section | 5 | Just removed 2026-02-19; awaiting user confirmation |

### Sub-Pages
| Feature | Score | Notes |
|---------|-------|-------|
| Work page (filter + grid) | 6 | Built; user reports "many sub-page problems" |
| Case Study template | 6 | Built; not audited |
| Services pages (6) | 6 | Built; not audited |
| About page | 6 | Built; not audited |
| Contact (form wired) | 8 | Forms verified Sprint 4 |
| Insights grid | 6 | Built; not audited |
| Article page + gating | 7 | Forms verified Sprint 4 |
| Scoper tool | 8 | Forms verified Sprint 4 |

---

## Version B (Handcrafted)

### Homepage
| Feature | Score | Notes |
|---------|-------|-------|
| HC Hero (cycling images, EXECUTION at 25vw, GSAP chars) | 3 | Built but WRONG structure — needs complete rebuild per accordion.net.au |
| HC Stats Bar (4 proof stats) | 0 | NOT built yet |
| HC Introduction section | 0 | NOT built yet |
| HC Work Slider (Swiper) | 0 | NOT built yet |
| HC About Interlude | 0 | NOT built yet |
| HC Work Grid (4 cards, monochrome) | 0 | NOT built yet |
| HC Mission Statement | 0 | NOT built yet |
| HC Team Roster | 0 | NOT built yet |

### Sub-Pages (Content Visible — Post Token Fix)
| Feature | Score | Notes |
|---------|-------|-------|
| Sub-page CSS tokens | 5 | Fixed 2026-02-19; awaiting user confirmation pages render |
| Work page | 3 | Content may render now; layout/structure wrong per user |
| About page | 3 | Content may render now; layout wrong |
| Contact page | 3 | Content may render now |
| Insights page | 3 | Content may render now |
| Scoper page | 3 | Content may render now |
| VersionToggle visible in HC header | 5 | Fixed 2026-02-19; awaiting user confirmation |

---

## Infrastructure
| Feature | Score | Notes |
|---------|-------|-------|
| VersionContext / localStorage persistence | 10 | Working |
| VersionToggle (Capes) | 10 | Working |
| VersionToggle (HC) | 5 | Fixed 2026-02-19; awaiting confirmation |
| API: /api/contact | 10 | Verified Sprint 4 |
| API: /api/subscribe | 10 | Verified Sprint 4 |
| API: /api/gate | 10 | Verified Sprint 4 |
| API: /api/scoper | 10 | Verified Sprint 4 |
| Clean next build | 7 | Last verified Sprint 4; not re-run after fixes |
| Governance docs | 5 | Being created 2026-02-19 |
| Session log system | 8 | session.md created; protocol being instilled |
