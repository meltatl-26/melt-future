'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransitionLink from '@/components/shared/TransitionLink';
import ImageReveal from '@/components/shared/ImageReveal';
import { useWordReveal } from '@/hooks/useCharacterReveal';
import { getFeaturedProjects } from '@/data/projects';
import './CapesFeaturedWork.css';

gsap.registerPlugin(ScrollTrigger);

export function CapesFeaturedWork() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useWordReveal({ triggerStart: 'top 80%' });
  const projects = getFeaturedProjects().slice(0, 3);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.featured__card');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 75%',
        once: true,
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="featured" data-section-theme="light">
      <div className="container">
        <div className="featured__header">
          <span className="eyebrow featured__eyebrow">SELECTED WORK</span>
          <h2 ref={headingRef as React.Ref<HTMLHeadingElement>} className="featured__heading">
            Proof.
          </h2>
          <TransitionLink to="/work" className="featured__view-all">
            View all work &rarr;
          </TransitionLink>
        </div>

        <div className="featured__grid" ref={gridRef}>
          {projects.map((project, i) => (
            <TransitionLink
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`featured__card featured__card--${i + 1}`}
            >
              <ImageReveal
                src={project.thumbnail}
                alt={project.title}
                style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }}
              />
              <div className="featured__info">
                <span className="caption featured__category">
                  {project.category}
                </span>
                <h3 className="featured__title">{project.title}</h3>
                {project.stat && (
                  <span className="featured__stat">{project.stat}</span>
                )}
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
