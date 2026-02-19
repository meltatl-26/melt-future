'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './HandcraftedHero.css';

const HERO_IMAGES = [
  '/images/hero/hero-02.webp',
  '/images/hero/hero-03.webp',
  '/images/hero/hero-04.webp',
  '/images/work/ncaa-final-four.webp',
  '/images/work/coca-cola-gameday.webp',
];

export function HandcraftedHero() {
  const wordRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const prefersReduced = useReducedMotion();

  // Cycling background images
  useEffect(() => {
    if (slidesRef.current.length === 0) return;

    let current = 0;
    const slides = slidesRef.current;

    // Set first slide visible
    gsap.set(slides[0], { opacity: 1 });

    if (prefersReduced) return;

    const interval = setInterval(() => {
      const next = (current + 1) % slides.length;
      gsap.to(slides[current], { opacity: 0, duration: 1.5, ease: 'power2.inOut' });
      gsap.to(slides[next], { opacity: 1, duration: 1.5, ease: 'power2.inOut' });
      current = next;
    }, 4000);

    return () => clearInterval(interval);
  }, [prefersReduced]);

  // Hero character animation
  useEffect(() => {
    if (prefersReduced) return;
    if (!wordRef.current || !taglineRef.current) return;

    const split = new SplitType(wordRef.current, { types: 'chars' });
    if (!split.chars) return;

    gsap.from(split.chars, {
      opacity: 0,
      y: '100%',
      rotation: 8,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      delay: 0.2,
    });

    gsap.from(taglineRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.0,
      ease: 'power2.out',
    });

    if (scrollRef.current) {
      gsap.from(scrollRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.4,
        ease: 'power2.out',
      });
    }

    return () => {
      split.revert();
    };
  }, [prefersReduced]);

  return (
    <section className="hc-hero" data-section-theme="dark">
      {/* Cycling background images */}
      <div className="hc-hero__bg" aria-hidden="true">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="hc-hero__bg-slide"
            ref={(el) => {
              if (el) slidesRef.current[i] = el;
            }}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hc-hero__bg-overlay" />
      </div>

      {/* Hero content */}
      <div className="hc-hero__content">
        <div ref={wordRef} className="hc-hero__word" aria-label="Execution">
          EXECUTION
        </div>
        <p ref={taglineRef} className="hc-hero__tagline">
          We execute what others only imagine.
        </p>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="hc-hero__scroll" aria-hidden="true">
        <div className="hc-hero__scroll-line" />
        <span className="hc-hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}
