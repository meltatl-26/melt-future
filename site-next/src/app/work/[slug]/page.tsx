'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal, useWordReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ImageReveal from '@/components/shared/ImageReveal';
import TransitionLink from '@/components/shared/TransitionLink';
import { getProjectBySlug, getRelatedProjects, getNextProject } from '@/data/projects';
import { getCampaignsByProject } from '@/data/campaigns';
import Lightbox from '@/components/shared/Lightbox';
import './case-study.css';
import './case-study-hc.css';

gsap.registerPlugin(ScrollTrigger);

function CapesCaseStudy({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const [metricsOpen, setMetricsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const resultsTitleRef = useWordReveal();
  const statsGridRef = useRef<HTMLDivElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const relatedGridRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced || !project) return;
    if (statsGridRef.current) {
      const cards = statsGridRef.current.querySelectorAll('.capes-case__stat-card');
      gsap.from(cards, {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: statsGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (galleryGridRef.current) {
      const items = galleryGridRef.current.querySelectorAll('.capes-case__gallery-item');
      gsap.from(items, {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: galleryGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (relatedGridRef.current) {
      const cards = relatedGridRef.current.querySelectorAll('.capes-case__related-card');
      gsap.from(cards, {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: relatedGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (servicesRef.current) {
      const tags = servicesRef.current.querySelectorAll('.capes-case__service-tag');
      gsap.from(tags, {
        opacity: 0, y: 15, stagger: 0.06, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: servicesRef.current, start: 'top 85%', once: true },
      });
    }
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced, project]);

  if (!project) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy)' }}>Project Not Found</h1>
        <p style={{ color: 'var(--color-gray-500)', margin: 'var(--space-md) 0' }}>
          The project &ldquo;{slug}&rdquo; doesn&apos;t exist.
        </p>
        <TransitionLink to="/work" style={{ color: 'var(--color-royal-blue)', fontWeight: 600 }}>
          &larr; Back to Work
        </TransitionLink>
      </div>
    );
  }

  const campaigns = getCampaignsByProject(slug);
  const related = getRelatedProjects(slug, 3);
  const next = getNextProject(slug);
  const isFlag = project.tier === 'flagship';

  return (
    <article className="capes-case">
      {/* Hero */}
      <section className="capes-case__hero" data-section-theme="dark">
        <div className="container">
          <TransitionLink to="/work" className="capes-case__back">&larr; All Work</TransitionLink>
          <div className="capes-case__hero-meta">
            <span className="capes-case__category">{project.category}</span>
            <span className="capes-case__year">{project.year}</span>
            <span className="capes-case__location">{project.location}</span>
          </div>
          <h1 className="capes-case__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>{project.title}</h1>
          <p className="capes-case__client">Client: {project.client}</p>
          <p className="capes-case__stat-hero">{project.stat}</p>
        </div>
      </section>

      {/* Hero image */}
      <div className="capes-case__hero-image">
        <ImageReveal
          src={project.gallery[0] || project.thumbnail}
          alt={project.title}
          className="capes-case__hero-img"
        />
      </div>

      <div className="container">
        {/* Brief */}
        <section className="capes-case__section" data-section-theme="light">
          <p className="capes-case__brief">{project.description}</p>
        </section>

        {/* Flagship: Challenge + Approach */}
        {isFlag && project.challenge && (
          <section className="capes-case__section capes-case__narrative" data-section-theme="light">
            <div className="capes-case__narrative-block">
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            {project.approach && (
              <div className="capes-case__narrative-block">
                <h2>Our Approach</h2>
                <p>{project.approach}</p>
              </div>
            )}
          </section>
        )}

        {/* Long description */}
        {project.longDescription && (
          <section className="capes-case__section" data-section-theme="light">
            <p className="capes-case__longdesc">{project.longDescription}</p>
          </section>
        )}

        {/* Stats grid */}
        {project.stats && project.stats.length > 0 && (
          <section className="capes-case__section capes-case__stats" data-section-theme="dark">
            <h2 className="capes-case__section-title" ref={resultsTitleRef as React.Ref<HTMLHeadingElement>}>Results</h2>
            <div className="capes-case__stats-grid" ref={statsGridRef}>
              {project.stats.map((s) => (
                <div key={s.label} className="capes-case__stat-card">
                  <span className="capes-case__stat-value">{s.value}</span>
                  <span className="capes-case__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Expandable full metrics */}
        {campaigns.length > 0 && (
          <section className="capes-case__section" data-section-theme="light">
            <button
              className="capes-case__metrics-toggle"
              onClick={() => setMetricsOpen(!metricsOpen)}
              aria-expanded={metricsOpen}
            >
              {metricsOpen ? 'Hide' : 'View'} Full Metrics
              <span className={`capes-case__metrics-arrow ${metricsOpen ? 'open' : ''}`}>&#9662;</span>
            </button>
            {metricsOpen && (
              <div className="capes-case__metrics">
                {campaigns.map((campaign) => (
                  <div key={campaign.slug} className="capes-case__metrics-group">
                    <h4>{campaign.title} ({campaign.year})</h4>
                    <table className="capes-case__metrics-table">
                      <tbody>
                        {campaign.metrics.map((m) => (
                          <tr key={m.metric}>
                            <td>{m.metric}</td>
                            <td className="capes-case__metrics-val">{m.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Services */}
        <section className="capes-case__section" data-section-theme="light">
          <h2 className="capes-case__section-title">Services Delivered</h2>
          <div className="capes-case__services" ref={servicesRef}>
            {project.services.map((s) => (
              <span key={s} className="capes-case__service-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="capes-case__section capes-case__testimonial" data-section-theme="dark">
            <blockquote>
              <p>&ldquo;{project.testimonial.quote}&rdquo;</p>
              <cite>
                <strong>{project.testimonial.author}</strong>
                <span>{project.testimonial.title}</span>
              </cite>
            </blockquote>
          </section>
        )}

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="capes-case__section" data-section-theme="light">
            <h2 className="capes-case__section-title">Gallery</h2>
            <div className="capes-case__gallery" ref={galleryGridRef}>
              {project.gallery.slice(0, 6).map((img, i) => (
                <button
                  key={i}
                  className="capes-case__gallery-item"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View gallery image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="capes-case__gallery-img"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {lightboxIndex >= 0 && (
          <Lightbox
            images={project.gallery.slice(0, 6)}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(-1)}
          />
        )}

        {/* Related + Next */}
        {related.length > 0 && (
          <section className="capes-case__section capes-case__related" data-section-theme="light">
            <h2 className="capes-case__section-title">Related Work</h2>
            <div className="capes-case__related-grid" ref={relatedGridRef}>
              {related.map((r) => (
                <TransitionLink key={r.slug} to={`/work/${r.slug}`} className="capes-case__related-card">
                  <ImageReveal
                    src={r.thumbnail}
                    alt={r.title}
                    className="capes-case__related-img"
                  />
                  <h4>{r.title}</h4>
                  <p>{r.client}</p>
                </TransitionLink>
              ))}
            </div>
          </section>
        )}

        {next && (
          <div className="capes-case__next">
            <TransitionLink to={`/work/${next.slug}`}>
              Next Project: <strong>{next.title}</strong> &rarr;
            </TransitionLink>
          </div>
        )}
      </div>
    </article>
  );
}

function HandcraftedCaseStudy({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const [metricsOpen, setMetricsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const heroImgRef = useRef<HTMLImageElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const relatedGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced || !project) return;

    const ctx = gsap.context(() => {
      // Hero image: monochrome to color on scroll
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          filter: 'grayscale(0%) brightness(1)',
          scrollTrigger: {
            trigger: heroImgRef.current,
            start: 'top 85%',
            once: true,
          },
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      // Stats grid stagger
      if (statsGridRef.current) {
        const statCards = statsGridRef.current.querySelectorAll('.hc-case__stat-card');
        gsap.from(statCards, {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }

      // Gallery items stagger
      if (galleryGridRef.current) {
        const items = galleryGridRef.current.querySelectorAll('.hc-case__gallery-item');
        gsap.from(items, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryGridRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }

      // Related work cards stagger
      if (relatedGridRef.current) {
        const cards = relatedGridRef.current.querySelectorAll('.hc-case__related-card');
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: relatedGridRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, [prefersReduced, project]);

  if (!project) {
    return (
      <div className="hc-case">
        <div className="hc-case__notfound">
          <h1>Project Not Found</h1>
          <p>The project &ldquo;{slug}&rdquo; doesn&apos;t exist.</p>
          <TransitionLink to="/work">&larr; Back to Work</TransitionLink>
        </div>
      </div>
    );
  }

  const campaigns = getCampaignsByProject(slug);
  const related = getRelatedProjects(slug, 3);
  const next = getNextProject(slug);
  const isFlag = project.tier === 'flagship';

  return (
    <article className="hc-case">
      {/* Hero */}
      <section className="hc-case__hero" data-section-theme="dark">
        <div className="hc-case__hero-inner">
          <TransitionLink to="/work" className="hc-case__back">&larr; All Work</TransitionLink>

          <div className="hc-case__hero-meta">
            <span className="hc-case__category">{project.category}</span>
            <span className="hc-case__hero-divider" />
            <span className="hc-case__year">{project.year}</span>
          </div>

          <h1 className="hc-case__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>{project.title}</h1>
          <p className="hc-case__stat-hero">{project.stat}</p>
        </div>
      </section>

      {/* Hero image */}
      <div className="hc-case__hero-image" data-section-theme="dark">
        <img
          ref={heroImgRef}
          src={project.gallery[0] || project.thumbnail}
          alt={project.title}
          className="hc-case__hero-img"
          style={{
            filter: 'grayscale(100%) brightness(0.7)',
            transition: 'filter 0.6s ease',
          }}
        />
      </div>

      {/* Split content: main + sidebar */}
      <div className="hc-case__content" data-section-theme="dark">
        {/* Main (left) */}
        <div className="hc-case__main">
          <p className="hc-case__brief">{project.description}</p>

          {/* Flagship: Challenge + Approach */}
          {isFlag && project.challenge && (
            <div className="hc-case__narrative">
              <div className="hc-case__narrative-block">
                <span className="hc-case__narrative-label">The Challenge</span>
                <p className="hc-case__narrative-text">{project.challenge}</p>
              </div>
              {project.approach && (
                <div className="hc-case__narrative-block">
                  <span className="hc-case__narrative-label">Our Approach</span>
                  <p className="hc-case__narrative-text">{project.approach}</p>
                </div>
              )}
            </div>
          )}

          {/* Long description */}
          {project.longDescription && (
            <p className="hc-case__longdesc">{project.longDescription}</p>
          )}
        </div>

        {/* Sidebar (right) — sticky */}
        <aside className="hc-case__sidebar" style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
          <div className="hc-case__sidebar-section">
            <span className="hc-case__sidebar-label">Client</span>
            <span className="hc-case__sidebar-value">{project.client}</span>
          </div>

          <div className="hc-case__sidebar-section">
            <span className="hc-case__sidebar-label">Location</span>
            <span className="hc-case__sidebar-value">{project.location}</span>
          </div>

          <div className="hc-case__sidebar-section">
            <span className="hc-case__sidebar-label">Industry</span>
            <span className="hc-case__sidebar-value">{project.industry}</span>
          </div>

          <div className="hc-case__sidebar-section">
            <span className="hc-case__sidebar-label">Services</span>
            <div className="hc-case__sidebar-services">
              {project.services.map((s) => (
                <span key={s} className="hc-case__sidebar-service">{s}</span>
              ))}
            </div>
          </div>

          {project.stats && project.stats.length > 0 && (
            <div className="hc-case__sidebar-section">
              <span className="hc-case__sidebar-label">Key Results</span>
              <div className="hc-case__sidebar-stats">
                {project.stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="hc-case__sidebar-stat">
                    <span className="hc-case__sidebar-stat-value">{s.value}</span>
                    <span className="hc-case__sidebar-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Full-width stats grid */}
      {project.stats && project.stats.length > 0 && (
        <section className="hc-case__stats" data-section-theme="dark">
          <div className="hc-case__full-width">
            <span className="hc-case__stats-label">Results</span>
            <div className="hc-case__stats-grid" ref={statsGridRef}>
              {project.stats.map((s) => (
                <div key={s.label} className="hc-case__stat-card">
                  <span className="hc-case__stat-value">{s.value}</span>
                  <span className="hc-case__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expandable full metrics */}
      {campaigns.length > 0 && (
        <div className="hc-case__full-width" data-section-theme="dark">
          <section className="hc-case__metrics-section">
            <button
              className="hc-case__metrics-toggle"
              onClick={() => setMetricsOpen(!metricsOpen)}
              aria-expanded={metricsOpen}
            >
              {metricsOpen ? 'Hide' : 'View'} Full Metrics
              <span className={`hc-case__metrics-arrow ${metricsOpen ? 'open' : ''}`}>&#9662;</span>
            </button>
            {metricsOpen && (
              <div className="hc-case__metrics">
                {campaigns.map((campaign) => (
                  <div key={campaign.slug} className="hc-case__metrics-group">
                    <h4>{campaign.title} ({campaign.year})</h4>
                    <table className="hc-case__metrics-table">
                      <tbody>
                        {campaign.metrics.map((m) => (
                          <tr key={m.metric}>
                            <td>{m.metric}</td>
                            <td className="hc-case__metrics-val">{m.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="hc-case__testimonial" data-section-theme="dark">
          <div className="hc-case__testimonial-inner">
            <span className="hc-case__testimonial-mark">&ldquo;</span>
            <blockquote>
              <p>&ldquo;{project.testimonial.quote}&rdquo;</p>
              <cite>
                <strong>{project.testimonial.author}</strong>
                <span>{project.testimonial.title}</span>
              </cite>
            </blockquote>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="hc-case__gallery" data-section-theme="dark">
          <span className="hc-case__gallery-label">Gallery</span>
          <div className="hc-case__gallery-grid" ref={galleryGridRef}>
            {project.gallery.slice(0, 6).map((img, i) => (
              <button
                key={i}
                className="hc-case__gallery-item hc-mono"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View gallery image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="hc-case__gallery-img"
                  loading="lazy"
                  style={{
                    filter: 'grayscale(100%) brightness(0.7)',
                    transition: 'filter 0.6s ease',
                  }}
                />
              </button>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex >= 0 && (
        <Lightbox
          images={project.gallery.slice(0, 6)}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}

      {/* Related Work */}
      {related.length > 0 && (
        <section className="hc-case__related" data-section-theme="dark">
          <div className="hc-case__full-width">
            <span className="hc-case__related-label">Related Work</span>
            <div className="hc-case__related-grid" ref={relatedGridRef}>
              {related.map((r) => (
                <TransitionLink key={r.slug} to={`/work/${r.slug}`} className="hc-case__related-card">
                  <img
                    src={r.thumbnail}
                    alt={r.title}
                    className="hc-case__related-img"
                    loading="lazy"
                    style={{
                      filter: 'grayscale(100%) brightness(0.7)',
                      transition: 'filter 0.6s ease',
                    }}
                  />
                  <h4>{r.title}</h4>
                  <p>{r.client}</p>
                </TransitionLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {next && (
        <section className="hc-case__next" data-section-theme="dark">
          <div className="hc-case__next-inner">
            <TransitionLink to={`/work/${next.slug}`}>
              <div>
                <span className="hc-case__next-label">Next Project</span>
                <span className="hc-case__next-title">{next.title}</span>
              </div>
              <span className="hc-case__next-arrow">&rarr;</span>
            </TransitionLink>
          </div>
        </section>
      )}

      {/* Monochrome-to-color hover styles */}
      <style>{`
        .hc-case__gallery-item:hover .hc-case__gallery-img {
          filter: grayscale(0%) brightness(1) !important;
        }
        .hc-case__related-card:hover .hc-case__related-img {
          filter: grayscale(0%) brightness(1) !important;
        }
      `}</style>
    </article>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedCaseStudy slug={slug} />;
  }

  return <CapesCaseStudy slug={slug} />;
}
