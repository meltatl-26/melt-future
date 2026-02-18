'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useVersion } from '@/lib/version-context';
import projects, { FILTER_CATEGORIES } from '@/data/projects';
import './work.css';
import './work-hc.css';

function CapesWork() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="capes-work">
      <div className="container">
        <div className="capes-work__header">
          <span className="capes-work__label">Portfolio</span>
          <h1 className="capes-work__title">Our Work</h1>
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

        <div className="capes-work__grid">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
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
            </Link>
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

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="hc-work">
      <div className="hc-work__inner">
        <div className="hc-work__header">
          <span className="hc-work__label">Selected Work</span>
          <h1 className="hc-work__title">Work</h1>
          <p className="hc-work__count" aria-live="polite">
            Showing <strong>{filtered.length}</strong> of {projects.length} projects
          </p>
        </div>

        <div className="hc-work__layout">
          {/* Sidebar Filters */}
          <aside className="hc-work__sidebar">
            <span className="hc-work__filter-label">Filter</span>
            <div className="hc-work__filters" role="group" aria-label="Filter projects by category">
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  className={`hc-work__filter ${activeFilter === cat.value ? 'hc-work__filter--active' : ''}`}
                  onClick={() => setActiveFilter(cat.value)}
                  aria-pressed={activeFilter === cat.value}
                >
                  <span>{cat.label}</span>
                  {cat.value !== 'all' && (
                    <span className="hc-work__filter-count">
                      {projects.filter((p) => p.category === cat.value).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Project Grid */}
          <div className="hc-work__grid">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="hc-work__card"
              >
                <div className="hc-work__card-image">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="hc-work__card-img"
                    loading="lazy"
                  />
                  <div className="hc-work__card-overlay">
                    <span className="hc-work__card-category">{project.category}</span>
                    <h3 className="hc-work__card-title">{project.title}</h3>
                    <p className="hc-work__card-client">{project.client}</p>
                    <div className="hc-work__card-meta">
                      <span className="hc-work__card-year">{project.year}</span>
                      <span className="hc-work__card-stat">{project.stat}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {filtered.length === 0 && (
              <p className="hc-work__empty">No projects found in this category.</p>
            )}
          </div>
        </div>
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
