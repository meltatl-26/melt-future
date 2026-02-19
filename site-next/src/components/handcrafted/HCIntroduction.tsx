'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './HCIntroduction.css';

// BTS event images for marquee
const BTS_IMAGES = [
  '/images/work/ncaa-final-four.webp',
  '/images/work/coca-cola-gameday.webp',
  '/images/work/bath-body-works.webp',
  '/images/work/aflac-hbcu.webp',
  '/images/work/mobile-arena.webp',
  '/images/work/dogsters-mlb.webp',
  '/images/work/georgia-lottery.webp',
  '/images/work/ghirardelli.webp',
];

export function HCIntroduction() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    if (!trackRef.current) return;

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 35,
      ease: 'linear',
      repeat: -1,
    });

    const track = trackRef.current;
    const onEnter = () => tween.pause();
    const onLeave = () => tween.resume();
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    return () => {
      tween.kill();
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, [prefersReduced]);

  return (
    <section className="hc-intro" data-section-theme="dark">
      <div className="hc-intro__content">
        <span className="hc-intro__tag">( Introduction )</span>
        <div className="hc-intro__body">
          <p className="hc-intro__text">
            For over 26 years, Melt has built the experiences that define brands.
            Fan zones. Arena openings. Multi-city sampling tours. Championship activations.
            We don&apos;t pitch ideas — we build them.
          </p>
          <p className="hc-intro__subtext">
            When it has to work, when it has to scale, when it has to matter —
            brands come to Melt.
          </p>
        </div>
      </div>

      {/* BTS image marquee */}
      <div className="hc-intro__marquee-container" aria-hidden="true">
        <div ref={trackRef} className="hc-intro__marquee-track">
          {[...BTS_IMAGES, ...BTS_IMAGES].map((src, i) => (
            <div key={i} className="hc-intro__marquee-item">
              <img
                src={src}
                alt=""
                className="hc-intro__marquee-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
