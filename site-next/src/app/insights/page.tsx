'use client';

import Link from 'next/link';
import { useVersion } from '@/lib/version-context';
import insights, { getFeaturedInsights } from '@/data/insights';
import type { Insight } from '@/data/insights';
import './insights.css';
import './insights-hc.css';

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
      <Link href={`/insights/${insight.slug}`} className="capes-insights__featured-card">
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
      </Link>
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="capes-insights__card">
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
    </Link>
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
  const featured = getFeaturedInsights();
  const primaryFeatured = featured[0];
  const remaining = insights.filter((i) => i.slug !== primaryFeatured?.slug);

  return (
    <section className="hc-insights">
      <div className="hc-insights__inner">
        {/* Hero */}
        <div className="hc-insights__hero">
          <span className="hc-insights__label">Editorial</span>
          <h1 className="hc-insights__title">Insights</h1>
          <p className="hc-insights__subtitle">
            Experiential marketing intelligence from 26 years in the field.
          </p>
        </div>

        {/* Featured */}
        {primaryFeatured && <HcFeaturedCard insight={primaryFeatured} />}

        {/* Grid */}
        <span className="hc-insights__grid-label">All Insights</span>
        <div className="hc-insights__grid">
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

  return (
    <section className="capes-insights">
      <div className="container">
        {/* Hero */}
        <div className="capes-insights__hero">
          <span className="capes-insights__label">Portfolio</span>
          <h1 className="capes-insights__title">Insights</h1>
          <p className="capes-insights__subtitle">
            Experiential marketing intelligence from 26 years in the field.
          </p>
        </div>

        {/* Featured */}
        {primaryFeatured && <FeaturedCard insight={primaryFeatured} />}

        {/* Grid */}
        <h2 className="capes-insights__grid-heading">All Insights</h2>
        <div className="capes-insights__grid">
          {remaining.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
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
