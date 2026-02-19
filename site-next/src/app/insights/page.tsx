'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal, useWordReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import TransitionLink from '@/components/shared/TransitionLink';
import insights, { getFeaturedInsights } from '@/data/insights';
import type { Insight } from '@/data/insights';
import './insights.css';
import './insights-hc.css';

gsap.registerPlugin(ScrollTrigger);

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function FeaturedCard({ insight }: { insight: Insight }) {
  return (
    <div className="capes-insights__featured">
      <TransitionLink to={`/insights/${insight.slug}`} className="capes-insights__featured-card">
        <div className="capes-insights__featured-image">
          <span className="capes-insights__featured-badge">Featured</span>
        </div>
        <div className="capes-insights__featured-body">
          <span className="capes-insights__featured-category">{insight.category}</span>
          <h2 className="capes-insights__featured-title">{insight.title}</h2>
          <p className="capes-insights__featured-excerpt">{insight.excerpt}</p>
          <div className="capes-insights__featured-meta">
            <span>{formatDate(insight.date)}</span>
            <span>{insight.readTime} read</span>
          </div>
        </div>
      </TransitionLink>
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <TransitionLink to={`/insights/${insight.slug}`} className="capes-insights__card">
      <div className="capes-insights__card-image">
        <span className="capes-insights__card-category">{insight.category}</span>
        {insight.tier >= 2 && (
          <span className="capes-insights__card-lock" aria-label="Gated content">
            <LockIcon />
          </span>
        )}
      </div>
      <div className="capes-insights__card-body">
        <h3 className="capes-insights__card-title">{insight.title}</h3>
        <p className="capes-insights__card-excerpt">{insight.excerpt}</p>
        <div className="capes-insights__card-meta">
          <span>{formatDate(insight.date)} &middot; {insight.readTime} read</span>
          {insight.tier >= 2 && (
            <span className="capes-insights__card-tier">Tier {insight.tier}</span>
          )}
        </div>
      </div>
    </TransitionLink>
  );
}

function HcLockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function HcFeaturedCard({ insight }: { insight: Insight }) {
  return (
    <div className="hc-insights__featured">
      <Link href={`/insights/${insight.slug}`} className="hc-insights__featured-card">
        <span className="hc-insights__featured-badge">Featured</span>
        <span className="hc-insights__featured-category">{insight.category}</span>
        <h2 className="hc-insights__featured-title">{insight.title}</h2>
        <p className="hc-insights__featured-excerpt">{insight.excerpt}</p>
        <div className="hc-insights__featured-meta">
          <span>{formatDate(insight.date)}</span>
          <span>{insight.readTime} read</span>
        </div>
      </Link>
    </div>
  );
}

function HcInsightCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="hc-insights__card">
      <div className="hc-insights__card-header">
        <span className="hc-insights__card-category">{insight.category}</span>
        {insight.tier >= 2 && (
          <span className="hc-insights__card-lock" aria-label="Gated content">
            <HcLockIcon />
          </span>
        )}
      </div>
      <h3 className="hc-insights__card-title">{insight.title}</h3>
      <p className="hc-insights__card-excerpt">{insight.excerpt}</p>
      <div className="hc-insights__card-meta">
        <span>{formatDate(insight.date)} &middot; {insight.readTime} read</span>
        {insight.tier >= 2 && (
          <span className="hc-insights__card-tier">Tier {insight.tier}</span>
        )}
      </div>
    </Link>
  );
}

function HandcraftedInsights() {
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const featured = getFeaturedInsights();
  const primaryFeatured = featured[0];
  const remaining = insights.filter((i) => i.slug !== primaryFeatured?.slug);

  useEffect(() => {
    if (prefersReduced) return;

    // Featured card entrance
    if (featuredRef.current) {
      gsap.from(featuredRef.current, {
        opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: featuredRef.current, start: 'top 80%', once: true },
      });
    }

    // Grid cards stagger entrance
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.hc-insights__card');
      gsap.from(items, {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced]);

  return (
    <section className="hc-insights" data-section-theme="dark">
      <div className="hc-insights__inner">
        {/* Hero */}
        <div className="hc-insights__hero">
          <span className="hc-insights__label">Editorial</span>
          <h1 className="hc-insights__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>Insights</h1>
          <p className="hc-insights__subtitle">
            Experiential marketing intelligence from 26 years in the field.
          </p>
        </div>

        {/* Featured */}
        <div ref={featuredRef}>
          {primaryFeatured && <HcFeaturedCard insight={primaryFeatured} />}
        </div>

        {/* Grid */}
        <span className="hc-insights__grid-label">All Insights</span>
        <div className="hc-insights__grid" ref={gridRef}>
          {remaining.map((insight) => (
            <HcInsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapesInsights() {
  const featured = getFeaturedInsights();
  const primaryFeatured = featured[0];
  const remaining = insights.filter((i) => i.slug !== primaryFeatured?.slug);
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const gridHeadingRef = useWordReveal();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.capes-insights__card');
    gsap.from(items, {
      opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced]);

  return (
    <section className="capes-insights">
      <div className="container">
        {/* Hero */}
        <div className="capes-insights__hero" data-section-theme="dark">
          <span className="capes-insights__label">Portfolio</span>
          <h1 className="capes-insights__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>Insights</h1>
          <p className="capes-insights__subtitle">
            Experiential marketing intelligence from 26 years in the field.
          </p>
        </div>

        {/* Featured */}
        {primaryFeatured && <FeaturedCard insight={primaryFeatured} />}

        {/* Grid */}
        <div data-section-theme="light">
          <h2 className="capes-insights__grid-heading" ref={gridHeadingRef as React.Ref<HTMLHeadingElement>}>All Insights</h2>
          <div className="capes-insights__grid" ref={gridRef}>
            {remaining.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InsightsPage() {
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedInsights />;
  }

  return <CapesInsights />;
}
