'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { getFeaturedProjects } from '@/data/projects';
import './CapesFeaturedWork.css';

export function CapesFeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const projects = getFeaturedProjects();

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="capes-featured">
      <div className="capes-featured__inner container">
        <div className="capes-featured__header">
          <div>
            <span className="capes-featured__label">Featured</span>
            <h2 className="capes-featured__title">Selected Work</h2>
          </div>
          <div className="capes-featured__nav">
            <button
              className="capes-featured__arrow"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              &larr;
            </button>
            <button
              className="capes-featured__arrow"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="capes-featured__carousel" ref={scrollRef}>
          {projects.map((project) => (
            <article key={project.slug} className="capes-featured__card">
              <div className="capes-featured__thumb">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="capes-featured__thumb-img"
                  loading="lazy"
                />
                <span className="capes-featured__category">{project.category}</span>
              </div>
              <div className="capes-featured__card-body">
                <h3 className="capes-featured__card-title">{project.title}</h3>
                <p className="capes-featured__card-client">{project.client}</p>
                <p className="capes-featured__card-stat">{project.stat}</p>
                <Link href={`/work/${project.slug}`} className="capes-featured__card-link">
                  View Case Study &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="capes-featured__footer">
          <Link href="/work" className="capes-featured__see-all">
            See All Work &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
