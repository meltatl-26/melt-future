'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import projects from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './HCWorkSlider.css';

// Use the first 6 projects for the slider
const SLIDER_PROJECTS = projects.slice(0, 6);

export function HCWorkSlider() {
  const [active, setActive] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  const goTo = (index: number) => {
    if (index === active) return;
    const next = (index + SLIDER_PROJECTS.length) % SLIDER_PROJECTS.length;

    if (!prefersReduced && imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setActive(next);
          gsap.to(imageRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' });
        },
      });
    } else {
      setActive(next);
    }
  };

  // Animate counter on active change
  useEffect(() => {
    if (prefersReduced || !counterRef.current) return;
    gsap.from(counterRef.current, { opacity: 0, y: 10, duration: 0.3, ease: 'power2.out' });
  }, [active, prefersReduced]);

  const current = SLIDER_PROJECTS[active];

  return (
    <section className="hc-work-slider" data-section-theme="dark">
      <div className="hc-work-slider__header">
        <h2 className="hc-work-slider__heading">
          <span className="hc-work-slider__hash">###</span>
          {' '}ACTIVATIONS
        </h2>
        <span className="hc-work-slider__sub">( Our selection )</span>
      </div>

      <div className="hc-work-slider__stage">
        {/* Main image */}
        <div className="hc-work-slider__image-wrap">
          <img
            ref={imageRef}
            src={current.thumbnail}
            alt={current.title}
            className="hc-work-slider__image"
          />
          <div className="hc-work-slider__image-overlay" />
        </div>

        {/* Project info */}
        <div className="hc-work-slider__info">
          <div className="hc-work-slider__counter">
            <span ref={counterRef} className="hc-work-slider__current">
              {String(active + 1).padStart(2, '0')}
            </span>
            <span className="hc-work-slider__sep"> / </span>
            <span className="hc-work-slider__total">
              {String(SLIDER_PROJECTS.length).padStart(2, '0')}
            </span>
          </div>
          <p className="hc-work-slider__client">{current.client}</p>
          <h3 className="hc-work-slider__title">{current.title}</h3>
          <p className="hc-work-slider__year">{current.year}</p>
          <Link href={`/work/${current.slug}`} className="hc-work-slider__link">
            View project →
          </Link>
        </div>

        {/* Navigation */}
        <div className="hc-work-slider__nav">
          <button
            className="hc-work-slider__nav-btn"
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            className="hc-work-slider__nav-btn"
            onClick={() => goTo(active + 1)}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="hc-work-slider__dots" role="tablist">
        {SLIDER_PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`hc-work-slider__dot${i === active ? ' hc-work-slider__dot--active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <div className="hc-work-slider__cta-wrap">
        <Link href="/work" className="hc-work-slider__cta">
          all work →
        </Link>
      </div>
    </section>
  );
}
