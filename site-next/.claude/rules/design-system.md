# Design System Tokens

Reference: `site/src/styles/global.css` + `site/src/styles/typography.css`

## Colors

```css
--royal-blue: #3356FF;      --royal-blue-light: #B3C2FF;
--navy: #0A0A6B;             --navy-light: #4A4A9B;
--lime-green: #D4FF00;       --lime-green-light: #E5FF66;
--yellow: #FFD600;           --yellow-light: #FFF3B0;
--golden-yellow: #F4B942;
--coral: #FF4040;            --coral-light: #FFB3B3;
--cyan: #00F0FF;
--white: #FFFFFF;            --off-white: #F5F5F7;
--gray-100: #E8E8EA;         --gray-300: #949292;
--gray-900: #1A1A1A;         --black: #000000;
```

## Semantic

```css
--bg-primary: var(--white);
--bg-dark: var(--navy);
--text-primary: var(--gray-900);
--text-inverse: var(--white);
--accent-primary: var(--lime-green);
--accent-secondary: var(--yellow);
```

## Typography

```css
--font-headline: 'industry', sans-serif;
--font-body: 'Satoshi', sans-serif;
```

### Fluid Scale

```css
--display-hero: clamp(4rem, 12vw, 8rem);
--display-massive: clamp(3rem, 10vw, 6.5rem);
--display-section: clamp(2.5rem, 8vw, 5rem);
--hero-display: clamp(3rem, 8vw, 6rem);
--section-display: clamp(2.5rem, 6vw, 4.5rem);
--mega-heading: clamp(2rem, 4vw, 3.5rem);
--h1: clamp(2.5rem, 5vw + 1rem, 5rem);
--h2: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);
--h3: clamp(1.5rem, 2vw + 0.5rem, 2.25rem);
--h4: clamp(1.25rem, 1vw + 0.75rem, 1.5rem);
--body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
--body-lg: clamp(1.125rem, 0.5vw + 1rem, 1.375rem);
--caption: clamp(0.75rem, 0.25vw + 0.7rem, 0.875rem);
--eyebrow: clamp(0.6875rem, 0.125vw + 0.65rem, 0.75rem);
--nav: 0.875rem;
--stat-number: clamp(3rem, 4vw + 1.5rem, 4.5rem);
```

## Spacing (8px baseline)

```css
--space-xs: 8px;    --space-sm: 16px;   --space-md: 24px;
--space-lg: 48px;   --space-xl: 80px;   --space-2xl: 120px;
--space-3xl: 160px;
```

## Layout

```css
--container: 1280px;
--container-wide: 1440px;
--gutter: 20px;  /* 40px at 768px+ */
```

## Radii

```css
--radius-sm: 12px;  --radius-md: 20px;  --radius-lg: 40px;
```

## Easing

```css
--ease-custom: cubic-bezier(0.42, 0, 0.04, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
--transition-fast: 0.2s var(--ease-custom);
--transition-standard: 0.6s var(--ease-custom);
--transition-slow: 1s var(--ease-custom);
```

## Z-Index Hierarchy

```css
--z-preloader: 9999;  --z-transition: 9998;  --z-cursor: 9997;
--z-lightbox: 9996;   --z-header: 100;       --z-mobile-menu: 99;
--z-cookie: 98;       --z-mobile-cta: 97;
```
