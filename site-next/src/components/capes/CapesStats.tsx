'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useCharacterReveal } from '@/hooks/useCharacterReveal';
import Counter from '@/components/shared/Counter';
import './CapesStats.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 26, label: 'Years Executing', suffix: '+' },
  { target: 5000, label: 'Activations Produced', suffix: '+' },
  { target: 47, label: 'Million TV Viewers', suffix: 'M' },
  { target: 19, label: 'Final Fours', suffix: '' },
];

export function CapesStats() {
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const headingRef = useCharacterReveal({ triggerStart: 'top 80%', stagger: 0.03 });

  useEffect(() => {
    if (prefersReduced || !gridRef.current) return;

    const items = gridRef.current.querySelectorAll('.stats__item');

    gsap.from(items, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 70%',
        once: true,
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [prefersReduced]);

  return (
    <section className="stats section-dark grain" data-section-theme="dark">
      <div className="container">
        <div className="stats__header">
          <span className="eyebrow stats__eyebrow">EXECUTING</span>
          <h2 ref={headingRef as React.Ref<HTMLHeadingElement>} className="stats__heading">
            By The Numbers
          </h2>
        </div>

        <div className="stats__grid" ref={gridRef}>
          {stats.map((stat) => (
            <div key={stat.label} className="stats__item">
              <span className="stats__number">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
