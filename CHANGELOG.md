# MELT Future — Changelog

## v0.2.1 — 2026-02-11

Production polish release with critical bug fixes and branding improvements.

### Fixed
- **Critical:** LetterboxScroll GSAP import causing runtime errors and white screen
- **Critical:** LetterboxScroll template literal breaking CSS classes (line 85)
- Header menu alignment and vertical centering issues
- All emoji icons replaced with lucide-react library icons
- GSAP import pattern standardized across 11 files (Preloader, BackToTop, Stats, Counter, ClientLogos, ParallaxCard, PageTransition, DisplacementTransition, ImageReveal, TextReveal, Work)
- AccordionItem keyboard accessibility (aria-expanded, aria-controls, proper button semantics)
- AccordionItem converted from div to button for proper semantics

### Added
- MeltLogo component with theme-aware variants (default, white, icon)
- Melt branding in header (theme-aware logo)
- Melt branding in footer
- lucide-react dependency (Target, Rocket, UtensilsCrossed, Trophy, Handshake, ChevronDown icons)
- Proper ARIA attributes to AccordionItem component
- ServicePage route added to documentation

### Changed
- AboutPage values icons from emoji to lucide-react components
- AccordionItem arrow from Unicode character to ChevronDown icon component
- Header alignment CSS for pixel-perfect centering (60px height, flex alignment)
- Header dropdown positioning (left-aligned instead of center-aligned)
- package.json version updated to 0.2.1
- Documentation updated with accurate component counts and routes

### Documentation
- Root CLAUDE.md updated to v0.2.1
- melt-future CLAUDE.md updated with ServicePage route
- melt-future CLAUDE.md version description updated
- CHANGELOG.md entries added for v0.2.1

---

## v0.2.0 — 2026-02-10

Feature-complete React rebuild with WebGL effects, lightbox, enriched content, and accessibility.

### Added
- WebGL hero dissolve shader (Three.js + GLSL noise-based transitions with cyan glow)
- WebGL case study distortion (scroll-driven wave + chromatic aberration + mouse ripple)
- Image lightbox with keyboard nav, touch swipe, focus trap, zoom
- WordPress content enrichment: 11 projects updated with verified longDescription copy
- 49 WordPress images downloaded for 5 gap projects (NCAA FF, Women's FF, MELTU, Facebook Concert, Winter Olympics)
- Displacement page transition shader (shaders ready for future integration)

### Accessibility
- Screen-reader-only form labels on Contact section (sr-only class)
- Gallery items: aria-labels, Space key support, Enter key support
- Lightbox focus trap + focus return to trigger element
- Work page filter buttons: role="tab", aria-selected, aria-controls
- Error messages with role="alert"
- Submit buttons with aria-busy loading state
- Disabled button CSS styling (opacity + cursor)
- Skip-to-content link verified working

### Performance
- Three.js code-split into separate 123KB chunk (only loaded on WebGL pages)
- Main bundle unchanged at 136KB gzipped
- Netlify cache headers for /assets/* (immutable)
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Theme color meta tag for mobile browsers

---

## v0.1.0 — 2026-02-10

Initial React rebuild of the MELT site.

### Added
- React 19 + Vite 7 SPA with client-side routing
- 9 pages: Home, Work, CaseStudy, About, Contact, Insights, InsightArticle, Privacy, 404
- 8 homepage sections: Hero, Stats, FeaturedWork, WhyMelt, Services, ClientLogos, Testimonials, Contact
- Full CSS design system: custom properties, fluid typography (clamp), 12-column grid
- GSAP animations: text reveals, counters, image reveals, Flip filter transitions, marquee
- Lenis smooth scroll with GSAP ticker sync and ScrollTrigger.normalizeScroll
- Page transitions via clip-path overlay with TransitionLink navigation
- First-visit preloader with localStorage persistence
- 22 projects (18 Capes deck + 4 legacy v2) with full data layer
- 3 industry insights articles with reading progress bar
- Category filter system on Work page with GSAP Flip
- Cookie consent with GA4 consent mode v2
- Mobile CTA bar with scroll auto-hide
- Custom cursor with mix-blend-mode
- Netlify Forms integration (contact + newsletter)
- Responsive design: 375px, 768px, 1024px, 1440px breakpoints
- Code splitting: all routes lazy-loaded with React.lazy + Suspense
- SEO: sitemap.xml, robots.txt, JSON-LD structured data, per-page meta tags
- 136KB gzipped main bundle (well under 800KB budget)
- WebGLErrorBoundary for graceful WebGL fallback

### Content
- 22 project thumbnails, 3 hero images, 28 client logos
- Gallery images from v2 distributed to 25 work-detail subdirectories
- SVG activation map with 12 cities
- Vince Thompson bio and achievements
- Privacy policy
- Full About page: stats, differentiators, execution stack, client logos, team, map
