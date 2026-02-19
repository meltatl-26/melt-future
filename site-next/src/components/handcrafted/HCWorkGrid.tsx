'use client';

import Link from 'next/link';
import projects from '@/data/projects';
import './HCWorkGrid.css';

// 4 featured or well-known projects for the grid
const GRID_PROJECTS = projects
  .filter((p) => p.featured)
  .slice(0, 4)
  .concat(projects.filter((p) => !p.featured).slice(0, 4))
  .slice(0, 4);

export function HCWorkGrid() {
  return (
    <section className="hc-work-grid" data-section-theme="dark">
      <div className="hc-work-grid__inner">
        <div className="hc-work-grid__heading-wrap">
          <h2 className="hc-work-grid__heading">
            <span className="hc-work-grid__hash">###</span>{' '}
            BRAND<br />
            <span className="hc-work-grid__hash">###</span>{' '}
            ACTIVATION
          </h2>
          <span className="hc-work-grid__sub">( Our selection )</span>
        </div>

        <div className="hc-work-grid__grid">
          {GRID_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="hc-work-grid__card"
            >
              <div className="hc-work-grid__card-image-wrap">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="hc-work-grid__card-image"
                  loading="lazy"
                />
                <div className="hc-work-grid__card-overlay" />
              </div>
              <div className="hc-work-grid__card-info">
                <p className="hc-work-grid__card-client">{project.client}</p>
                <h3 className="hc-work-grid__card-title">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="hc-work-grid__cta-wrap">
          <Link href="/work" className="hc-work-grid__cta">
            all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
