'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import TransitionLink from '@/components/shared/TransitionLink';
import projects, { FILTER_CATEGORIES } from '@/data/projects';
import './work.css';
import './work-hc.css';

gsap.registerPlugin(ScrollTrigger);

function CapesWork() {
  const [activeFilter, setActiveFilter] = useState('all');
  const prefersReduced = useReducedMotion();
  const headingRef = useCharacterReveal();
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (prefersReduced) return;
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.capes-work__card');
    gsap.from(items, {
      opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
    });
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced, filtered]);

  return (
    <section className="capes-work" data-section-theme="dark">
      <div className="container">
        <div className="capes-work__header">
          <span className="capes-work__label">Portfolio</span>
          <h1 className="capes-work__title" ref={headingRef as React.Ref<HTMLHeadingElement>}>Our Work</h1>
          <p className="capes-work__sub">
            26 years of experiential marketing execution across sports, entertainment, CPG, and more.
          </p>
        </div>

        <div className="capes-work__filters" role="group" aria-label="Filter projects by category">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className={`capes-work__filter ${activeFilter === cat.value ? 'capes-work__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
              aria-pressed={activeFilter === cat.value}
            >
              {cat.label}
              {cat.value !== 'all' && (
                <span className="capes-work__filter-count">
                  {projects.filter((p) => p.category === cat.value).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="capes-work__grid" ref={gridRef}>
          {filtered.map((project) => (
            <TransitionLink
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`capes-work__card capes-work__card--${project.tier}`}
            >
              <div className="capes-work__card-image">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="capes-work__card-img"
                  loading="lazy"
                />
                <span className="capes-work__card-category">{project.category}</span>
              </div>
              <div className="capes-work__card-body">
                <h3 className="capes-work__card-title">{project.title}</h3>
                <p className="capes-work__card-client">{project.client}</p>
                <p className="capes-work__card-stat">{project.stat}</p>
              </div>
            </TransitionLink>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="capes-work__empty">No projects found in this category.</p>
        )}
      </div>
    </section>
  );
}

function HandcraftedWork() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const prefersReduced = useReducedMotion();
  const gridRef = useRef<HTMLElement>(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (prefersReduced) return;
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.hc-work__card');
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0, y: 30, stagger: 0.06, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
      });
    }, gridRef);
    return () => { ctx.revert(); };
  }, [prefersReduced, filtered, view]);

  return (
    <section className="hc-work" data-section-theme="dark">
      <div className="hc-work__inner">

        {/* Page heading */}
        <div className="hc-work__heading-wrap">
          <h1 className="hc-work__heading">WORK</h1>
        </div>

        {/* Controls: filter bar + view toggle */}
        <div className="hc-work__controls">
          <div className="hc-work__filters" role="group" aria-label="Filter by category">
            {FILTER_CATEGORIES.map((cat) => {
              const count = cat.value === 'all' ? projects.length : projects.filter((p) => p.category === cat.value).length;
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  className={`hc-work__filter${isActive ? ' hc-work__filter--active' : ''}`}
                  onClick={() => setActiveFilter(cat.value)}
                  aria-pressed={isActive}
                >
                  {isActive && <span className="hc-work__filter-bullet" aria-hidden="true" />}
                  {cat.label}
                  <span className="hc-work__filter-count">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="hc-work__view-toggle" role="group" aria-label="View mode">
            <button
              className={`hc-work__view-btn${view === 'list' ? ' hc-work__view-btn--active' : ''}`}
              onClick={() => setView('list')}
              aria-pressed={view === 'list'}
            >list</button>
            <button
              className={`hc-work__view-btn${view === 'grid' ? ' hc-work__view-btn--active' : ''}`}
              onClick={() => setView('grid')}
              aria-pressed={view === 'grid'}
            >grid</button>
          </div>
        </div>

        {/* Grid view */}
        {view === 'grid' && (
          <div className="hc-work__grid" ref={gridRef as React.RefObject<HTMLDivElement>}>
            {filtered.map((project) => (
              <TransitionLink key={project.slug} to={`/work/${project.slug}`} className="hc-work__card">
                <div className="hc-work__card-image">
                  <img src={project.thumbnail} alt={project.title} className="hc-work__card-img" loading="lazy" />
                  <div className="hc-work__card-overlay">
                    <p className="hc-work__card-client">{project.client}</p>
                    <h3 className="hc-work__card-title">{project.title}</h3>
                  </div>
                </div>
              </TransitionLink>
            ))}
            {filtered.length === 0 && <p className="hc-work__empty">No projects in this category.</p>}
          </div>
        )}

        {/* List view */}
        {view === 'list' && (
          <ul className="hc-work__list" ref={gridRef as React.RefObject<HTMLUListElement>} role="list">
            {filtered.map((project, i) => (
              <li key={project.slug}>
                <TransitionLink to={`/work/${project.slug}`} className="hc-work__list-row">
                  <span className="hc-work__list-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="hc-work__list-title">{project.title}</span>
                  <span className="hc-work__list-client">{project.client}</span>
                  <span className="hc-work__list-cat">{project.category}</span>
                  <span className="hc-work__list-year">{project.year}</span>
                  <span className="hc-work__list-arrow">→</span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        )}

      </div>
    </section>
  );
}

export default function WorkPage() {
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedWork />;
  }

  return <CapesWork />;
}
