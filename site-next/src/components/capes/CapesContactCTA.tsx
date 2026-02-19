'use client';

import { useState } from 'react';
import TransitionLink from '@/components/shared/TransitionLink';
import './CapesContactCTA.css';

export function CapesContactCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tags: ['newsletter', 'homepage-cta'], source: 'homepage-cta' }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  return (
    <section className="capes-cta" data-section-theme="dark">
      <div className="capes-cta__inner container">
        <div className="capes-cta__header">
          <h2 className="capes-cta__title">Ready to Execute?</h2>
          <p className="capes-cta__subtitle">Three ways to get started</p>
        </div>

        <div className="capes-cta__grid">
          {/* Card 1 -- Contact */}
          <div className="capes-cta__card">
            <h3 className="capes-cta__card-title">Start a Conversation</h3>
            <p className="capes-cta__card-desc">
              Tell us about your project and we&apos;ll respond within 24 hours.
            </p>
            <TransitionLink to="/contact" className="capes-cta__btn">
              Get In Touch
            </TransitionLink>
          </div>

          {/* Card 2 -- Scoper */}
          <div className="capes-cta__card">
            <h3 className="capes-cta__card-title">Scope Your Project</h3>
            <p className="capes-cta__card-desc">
              Use our project scoper to get a tailored recommendation.
            </p>
            <TransitionLink to="/scope-your-project" className="capes-cta__btn">
              Start Scoping
            </TransitionLink>
          </div>

          {/* Card 3 -- Newsletter */}
          <div className="capes-cta__card">
            <h3 className="capes-cta__card-title">Subscribe to Insights</h3>
            <p className="capes-cta__card-desc">
              Get experiential marketing insights delivered to your inbox.
            </p>
            {status === 'success' ? (
              <p className="capes-cta__success">Thanks for subscribing!</p>
            ) : (
              <form className="capes-cta__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="capes-cta__input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className="capes-cta__btn" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
