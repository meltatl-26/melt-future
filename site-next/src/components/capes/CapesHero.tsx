'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import './CapesHero.css';

const HEADLINES = [
  { top: 'AI can dream it.', bottom: 'We deliver it.' },
  { top: 'Your agency gave you a great deck.', bottom: 'Now what?' },
  { top: "Great ideas aren't anything", bottom: 'without great execution.' },
  { top: '26 years of making things', bottom: 'actually happen.' },
  { top: 'From concept to crowd.', bottom: 'We build it all.' },
];

export function CapesHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextHeadline = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((i) => (i + 1) % HEADLINES.length);
      setIsAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextHeadline, 4000);
    return () => clearInterval(interval);
  }, [nextHeadline]);

  const headline = HEADLINES[activeIndex];

  return (
    <section className="capes-hero">
      <div className="capes-hero__inner container">
        <div className="capes-hero__content">
          <div className={`capes-hero__headline ${isAnimating ? 'capes-hero__headline--exit' : ''}`}>
            <h1>
              <span className="capes-hero__line">{headline.top}</span>
              <span className="capes-hero__line capes-hero__line--accent">{headline.bottom}</span>
            </h1>
          </div>
          <p className="capes-hero__sub">
            MELT is Atlanta&apos;s experiential marketing agency. 26 years of turning strategies into
            executed experiences that move audiences — and move the needle.
          </p>
          <div className="capes-hero__actions">
            <Link href="/work" className="capes-hero__btn capes-hero__btn--primary">
              See Our Work
            </Link>
            <Link href="/scope-your-project" className="capes-hero__btn capes-hero__btn--secondary">
              Scope Your Project
            </Link>
          </div>
        </div>
        <div className="capes-hero__indicators">
          {HEADLINES.map((_, i) => (
            <button
              key={i}
              className={`capes-hero__dot ${i === activeIndex ? 'capes-hero__dot--active' : ''}`}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveIndex(i);
                  setIsAnimating(false);
                }, 400);
              }}
              aria-label={`Go to headline ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
