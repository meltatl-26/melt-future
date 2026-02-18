# MELT Future — React SPA

**Stack:** React 19 + Vite 7, GSAP 3.14, Lenis 1.3, SplitType, Three.js
**Deploy:** Vercel
**URL:** [Your Vercel URL]

## Commands

```bash
# Development
npm run dev

# Deploy (⚠️ Max once per session - test locally first!)
npm run build && vercel --prod
```

## ⚠️ Deploy Rules
- Test locally first (`npm run dev`)
- Batch all changes into ONE deploy per session
- Free tier limits: 100GB bandwidth, 6000 build minutes/month

## Structure

```
site/
├── src/
│   ├── main.jsx                    # Router + code-split routes
│   ├── App.jsx                     # Layout wrapper (Lenis, Header, Footer, Transitions)
│   ├── styles/                     # global.css, typography.css, utilities.css
│   ├── hooks/                      # useGsap, useLenis, useSplitText, useInView, etc.
│   ├── data/                       # projects.js, services.js, clients.js, insights.js, etc.
│   ├── components/
│   │   ├── layout/                 # Header, Footer, Preloader, PageTransition, etc.
│   │   ├── sections/               # Hero, Stats, FeaturedWork, WhyMelt, Services, etc.
│   │   ├── ui/                     # TextReveal, Counter, ImageReveal, TransitionLink
│   │   └── webgl/                  # WebGLErrorBoundary, shaders/
│   └── pages/                      # Home, Work, CaseStudy, About, Contact, etc.
├── public/
│   ├── images/                     # work/, hero/, clients/, team/
│   ├── _redirects, robots.txt, sitemap.xml
│   └── favicon.png, og-image.jpg
├── index.html                      # CDN fonts, hidden Netlify forms, JSON-LD
├── vite.config.js
├── netlify.toml
└── package.json
```

## Routes

| Path | Page | Code-split |
|------|------|------------|
| `/` | Home | Yes |
| `/work` | Work (filterable grid) | Yes |
| `/work/:slug` | CaseStudy | Yes |
| `/services/:slug` | ServicePage | Yes |
| `/about` | AboutPage | Yes |
| `/contact` | ContactPage | Yes |
| `/industry-insights` | Insights | Yes |
| `/industry-insights/:slug` | InsightArticle | Yes |
| `/privacy` | PrivacyPage | Yes |
| `*` | NotFound (404) | Yes |

## Design System

- **Colors:** Royal Blue `#3356FF`, Navy `#0A0A6B`, Cyan `#00F0FF`, Yellow `#FFD600`, Coral `#FF4040`
- **Fonts:** Industry (TypeKit CDN) + Satoshi (fontshare CDN)
- **Grid:** 12-column, 32px gutter, 1200px container
- **Spacing:** 8px baseline (xs→2xl scale)
- **Radii:** 8px (sm), 16px (md), 40px (lg)

## Content Sources

1. **Primary:** Capes 2026 PDF (verified case study copy)
2. **Secondary:** WordPress XML, v2 project pages
3. **Tertiary:** Inferred descriptions (flagged with `contentSource: 'inferred'` in projects.js)

## Version

v0.2.1 — Production polish: Critical bug fixes, proper branding, accessibility improvements, standardized code patterns
