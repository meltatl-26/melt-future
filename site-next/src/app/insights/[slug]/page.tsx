'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useVersion } from '@/lib/version-context';
import { getInsightBySlug, getRelatedInsights } from '@/data/insights';
import type { Insight } from '@/data/insights';
import {
  canAccessContent,
  submitGate,
  getMissingFieldsForTier,
  getUserProfile,
} from '@/lib/gating';
import './article.css';
import './article-hc.css';

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
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function ArticleBody({ content }: { content: string }) {
  return (
    <div
      className="capes-article__body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function GateOverlay({
  insight,
  onUnlocked,
}: {
  insight: Insight;
  onUnlocked: () => void;
}) {
  const missingFields = getMissingFieldsForTier(insight.tier);
  const profile = getUserProfile();

  const [formData, setFormData] = useState<Record<string, string>>({
    email: profile.email || '',
    firstName: profile.firstName || '',
    company: profile.company || '',
    role: profile.role || '',
    industry: profile.industry || '',
    timeline: profile.timeline || '',
    budgetSignal: profile.budgetSignal || '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitGate(insight.tier, formData, insight.slug);
      onUnlocked();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const tierDescriptions: Record<number, string> = {
    2: 'Enter your email to read the full article.',
    3: 'Tell us about yourself to access this in-depth guide.',
    4: 'Share your project details to unlock this executive resource.',
  };

  return (
    <div className="capes-article__gate">
      <div className="capes-article__gate-fade" />
      <div className="capes-article__gate-panel">
        <div className="capes-article__gate-icon">
          <LockIcon />
        </div>
        <h3 className="capes-article__gate-title">Unlock This Article</h3>
        <p className="capes-article__gate-subtitle">
          {tierDescriptions[insight.tier] || 'Complete the form below to continue reading.'}
        </p>

        <form className="capes-article__gate-form" onSubmit={handleSubmit}>
          {missingFields.includes('email') && (
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('firstName') && (
            <input
              name="firstName"
              type="text"
              required
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('company') && (
            <input
              name="company"
              type="text"
              required
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('role') && (
            <input
              name="role"
              type="text"
              required
              placeholder="Your role"
              value={formData.role}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('industry') && (
            <select
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="" disabled>Select industry</option>
              <option value="CPG">CPG / Consumer Goods</option>
              <option value="Sports">Sports & Entertainment</option>
              <option value="Tech">Technology</option>
              <option value="Finance">Finance / Insurance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          )}
          {missingFields.includes('timeline') && (
            <select
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="" disabled>Project timeline</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          )}
          {missingFields.includes('budgetSignal') && (
            <select
              name="budgetSignal"
              required
              value={formData.budgetSignal}
              onChange={handleChange}
            >
              <option value="" disabled>Budget range</option>
              <option value="Under $50K">Under $50K</option>
              <option value="$50K-$150K">$50K - $150K</option>
              <option value="$150K-$500K">$150K - $500K</option>
              <option value="$500K+">$500K+</option>
              <option value="TBD">To be determined</option>
            </select>
          )}

          <button
            type="submit"
            className="capes-article__gate-submit"
            disabled={submitting}
          >
            {submitting ? 'Unlocking...' : 'Unlock Article'}
          </button>

          {error && <p className="capes-article__gate-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

function RelatedCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="capes-article__related-card">
      <div className="capes-article__related-image" />
      <div className="capes-article__related-body">
        <span className="capes-article__related-category">{insight.category}</span>
        <h4 className="capes-article__related-title">{insight.title}</h4>
        <span className="capes-article__related-meta">{insight.readTime} read</span>
      </div>
    </Link>
  );
}

function HcArticleBody({ content }: { content: string }) {
  return (
    <div
      className="hc-article__body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function HcLockIconArticle() {
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

function HcGateOverlay({
  insight,
  onUnlocked,
}: {
  insight: Insight;
  onUnlocked: () => void;
}) {
  const missingFields = getMissingFieldsForTier(insight.tier);
  const profile = getUserProfile();

  const [formData, setFormData] = useState<Record<string, string>>({
    email: profile.email || '',
    firstName: profile.firstName || '',
    company: profile.company || '',
    role: profile.role || '',
    industry: profile.industry || '',
    timeline: profile.timeline || '',
    budgetSignal: profile.budgetSignal || '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await submitGate(insight.tier, formData, insight.slug);
      onUnlocked();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const tierDescriptions: Record<number, string> = {
    2: 'Enter your email to read the full article.',
    3: 'Tell us about yourself to access this in-depth guide.',
    4: 'Share your project details to unlock this executive resource.',
  };

  return (
    <div className="hc-article__gate">
      <div className="hc-article__gate-fade" />
      <div className="hc-article__gate-panel">
        <div className="hc-article__gate-icon">
          <HcLockIconArticle />
        </div>
        <h3 className="hc-article__gate-title">Unlock This Article</h3>
        <p className="hc-article__gate-subtitle">
          {tierDescriptions[insight.tier] || 'Complete the form below to continue reading.'}
        </p>

        <form className="hc-article__gate-form" onSubmit={handleSubmit}>
          {missingFields.includes('email') && (
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('firstName') && (
            <input
              name="firstName"
              type="text"
              required
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('company') && (
            <input
              name="company"
              type="text"
              required
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('role') && (
            <input
              name="role"
              type="text"
              required
              placeholder="Your role"
              value={formData.role}
              onChange={handleChange}
            />
          )}
          {missingFields.includes('industry') && (
            <select
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="" disabled>Select industry</option>
              <option value="CPG">CPG / Consumer Goods</option>
              <option value="Sports">Sports &amp; Entertainment</option>
              <option value="Tech">Technology</option>
              <option value="Finance">Finance / Insurance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          )}
          {missingFields.includes('timeline') && (
            <select
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="" disabled>Project timeline</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          )}
          {missingFields.includes('budgetSignal') && (
            <select
              name="budgetSignal"
              required
              value={formData.budgetSignal}
              onChange={handleChange}
            >
              <option value="" disabled>Budget range</option>
              <option value="Under $50K">Under $50K</option>
              <option value="$50K-$150K">$50K - $150K</option>
              <option value="$150K-$500K">$150K - $500K</option>
              <option value="$500K+">$500K+</option>
              <option value="TBD">To be determined</option>
            </select>
          )}

          <button
            type="submit"
            className="hc-article__gate-submit"
            disabled={submitting}
          >
            {submitting ? 'Unlocking...' : 'Unlock Article'}
          </button>

          {error && <p className="hc-article__gate-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

function HcRelatedCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="hc-article__related-card">
      <span className="hc-article__related-category">{insight.category}</span>
      <h4 className="hc-article__related-title">{insight.title}</h4>
      <span className="hc-article__related-meta">{insight.readTime} read</span>
    </Link>
  );
}

function HandcraftedArticle({ slug }: { slug: string }) {
  const insight = getInsightBySlug(slug);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (insight) {
      setUnlocked(canAccessContent(insight.tier));
    }
  }, [insight]);

  if (!insight) {
    return (
      <section className="hc-article">
        <div className="hc-article__not-found">
          <h1>Article Not Found</h1>
          <p>The article &ldquo;{slug}&rdquo; doesn&apos;t exist.</p>
          <Link href="/insights">&larr; Back to Insights</Link>
        </div>
      </section>
    );
  }

  const isFree = insight.tier === 1;
  const showContent = isFree || unlocked;
  const related = getRelatedInsights(slug, 3);

  return (
    <article className="hc-article">
      <div className="hc-article__inner">
        <Link href="/insights" className="hc-article__back">&larr; All Insights</Link>

        {/* Header */}
        <header className="hc-article__header">
          <div className="hc-article__meta">
            <span className="hc-article__category">{insight.category}</span>
            <span className="hc-article__date">{formatDate(insight.date)}</span>
            <span className="hc-article__read-time">{insight.readTime} read</span>
          </div>
          <h1 className="hc-article__heading">{insight.title}</h1>
        </header>

        {/* Content */}
        <div className="hc-article__content">
          {showContent ? (
            <HcArticleBody content={insight.content} />
          ) : (
            <>
              <div className="hc-article__body">
                <p>{insight.excerpt}</p>
              </div>
              <HcGateOverlay insight={insight} onUnlocked={() => setUnlocked(true)} />
            </>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="hc-article__related">
            <h2 className="hc-article__related-heading">Related Insights</h2>
            <div className="hc-article__related-grid">
              {related.map((r) => (
                <HcRelatedCard key={r.slug} insight={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function CapesArticle({ slug }: { slug: string }) {
  const insight = getInsightBySlug(slug);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (insight) {
      setUnlocked(canAccessContent(insight.tier));
    }
  }, [insight]);

  if (!insight) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy)' }}>Article Not Found</h1>
        <p style={{ color: 'var(--color-gray-500)', margin: 'var(--space-md) 0' }}>
          The article &ldquo;{slug}&rdquo; doesn&apos;t exist.
        </p>
        <Link href="/insights" style={{ color: 'var(--color-royal-blue)', fontWeight: 600 }}>
          &larr; Back to Insights
        </Link>
      </div>
    );
  }

  const isFree = insight.tier === 1;
  const showContent = isFree || unlocked;
  const related = getRelatedInsights(slug, 3);

  return (
    <article className="capes-article">
      <div className="container">
        <Link href="/insights" className="capes-article__back">&larr; All Insights</Link>

        {/* Header */}
        <header className="capes-article__header">
          <div className="capes-article__meta">
            <span className="capes-article__category">{insight.category}</span>
            <span className="capes-article__date">{formatDate(insight.date)}</span>
            <span className="capes-article__read-time">{insight.readTime} read</span>
          </div>
          <h1 className="capes-article__heading">{insight.title}</h1>
        </header>

        {/* Content */}
        <div className="capes-article__content">
          {showContent ? (
            <ArticleBody content={insight.content} />
          ) : (
            <>
              {/* Preview paragraph */}
              <div className="capes-article__body">
                <p>{insight.excerpt}</p>
              </div>
              <GateOverlay insight={insight} onUnlocked={() => setUnlocked(true)} />
            </>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="capes-article__related">
            <h2 className="capes-article__related-heading">Related Insights</h2>
            <div className="capes-article__related-grid">
              {related.map((r) => (
                <RelatedCard key={r.slug} insight={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export default function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedArticle slug={slug} />;
  }

  return <CapesArticle slug={slug} />;
}
