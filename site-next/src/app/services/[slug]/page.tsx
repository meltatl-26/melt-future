'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal, useWordReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ImageReveal from '@/components/shared/ImageReveal';
import TransitionLink from '@/components/shared/TransitionLink';
import { getServiceById, PARENT_SERVICES } from '@/data/services';
import { getProjectBySlug } from '@/data/projects';
import './service.css';
import './service-hc.css';

gsap.registerPlugin(ScrollTrigger);

function CapesService({ slug }: { slug: string }) {
  const service = getServiceById(slug);
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const capabilitiesTitleRef = useWordReveal();
  const proofTitleRef = useWordReveal();
  const capabilitiesListRef = useRef<HTMLDivElement>(null);
  const proofGridRef = useRef<HTMLDivElement>(null);
  const relatedGridRef = useRef<HTMLDivElement>(null);
  const allServicesGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced || !service) return;
    if (capabilitiesListRef.current) {
      const tags = capabilitiesListRef.current.querySelectorAll('.capes-service__capability-tag');
      gsap.from(tags, {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: capabilitiesListRef.current, start: 'top 85%', once: true },
      });
    }
    if (proofGridRef.current) {
      const cards = proofGridRef.current.querySelectorAll('.capes-service__proof-card');
      gsap.from(cards, {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: proofGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (relatedGridRef.current) {
      const cards = relatedGridRef.current.querySelectorAll('.capes-service__related-card');
      gsap.from(cards, {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: relatedGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (allServicesGridRef.current) {
      const links = allServicesGridRef.current.querySelectorAll('.capes-service__all-link');
      gsap.from(links, {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: allServicesGridRef.current, start: 'top 85%', once: true },
      });
    }
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced, service]);

  if (!service) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy)' }}>Service Not Found</h1>
        <p style={{ color: 'var(--color-gray-500)', margin: 'var(--space-md) 0' }}>
          The service &ldquo;{slug}&rdquo; doesn&apos;t exist.
        </p>
        <TransitionLink to="/" style={{ color: 'var(--color-royal-blue)', fontWeight: 600 }}>
          &larr; Back Home
        </TransitionLink>
      </div>
    );
  }

  const relatedProjects = service.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  return (
    <article>
      {/* Hero */}
      <section className="capes-service__hero" data-section-theme="dark">
        <div className="container">
          <TransitionLink to="/" className="capes-service__back">&larr; All Services</TransitionLink>
          <span className="capes-service__number">Service {service.number}</span>
          <h1 className="capes-service__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>{service.title}</h1>
          <p className="capes-service__description">{service.description}</p>
        </div>
      </section>

      <div className="container">
        {/* Problem Statement */}
        <section className="capes-service__problem" data-section-theme="dark">
          <div className="capes-service__problem-inner">
            <span className="capes-service__problem-label">The Problem</span>
            <p className="capes-service__problem-text">{service.problem}</p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="capes-service__capabilities" data-section-theme="light">
          <h2 className="capes-service__section-title" ref={capabilitiesTitleRef as React.Ref<HTMLHeadingElement>}>Capabilities</h2>
          <div className="capes-service__capabilities-list" ref={capabilitiesListRef}>
            {service.capabilities.map((cap) => (
              <TransitionLink
                key={cap}
                to={`/work?tag=${encodeURIComponent(cap)}`}
                className="capes-service__capability-tag"
              >
                {cap}
              </TransitionLink>
            ))}
          </div>
        </section>

        {/* Proof Points */}
        <section className="capes-service__proof" data-section-theme="dark">
          <h2 className="capes-service__section-title" ref={proofTitleRef as React.Ref<HTMLHeadingElement>}>Proof Points</h2>
          <div className="capes-service__proof-grid" ref={proofGridRef}>
            {service.proofPoints.map((point) => {
              const parts = point.split(' — ');
              return (
                <div key={point} className="capes-service__proof-card">
                  <span className="capes-service__proof-value">{parts[0]}</span>
                  {parts[1] && <span className="capes-service__proof-label">{parts[1]}</span>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Work */}
        {relatedProjects.length > 0 && (
          <section className="capes-service__related" data-section-theme="light">
            <h2 className="capes-service__section-title">Related Work</h2>
            <div className="capes-service__related-grid" ref={relatedGridRef}>
              {relatedProjects.map((project) => (
                project && (
                  <TransitionLink key={project.slug} to={`/work/${project.slug}`} className="capes-service__related-card">
                    <ImageReveal
                      src={project.thumbnail}
                      alt={project.title}
                      className="capes-service__related-img"
                    />
                    <h4>{project.title}</h4>
                    <p>{project.client}</p>
                  </TransitionLink>
                )
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="capes-service__cta" data-section-theme="dark">
          <h2 className="capes-service__cta-title">Need {service.title}?</h2>
          <p className="capes-service__cta-text">Let&apos;s talk about how MELT can help.</p>
          <TransitionLink to="/contact" className="capes-service__cta-btn">
            Start a Conversation &rarr;
          </TransitionLink>
        </section>

        {/* All Services Nav */}
        <section className="capes-service__all" data-section-theme="light">
          <h2 className="capes-service__section-title">All Services</h2>
          <div className="capes-service__all-grid" ref={allServicesGridRef}>
            {PARENT_SERVICES.map((s) => (
              <TransitionLink
                key={s.id}
                to={`/services/${s.id}`}
                className={`capes-service__all-link ${s.id === slug ? 'capes-service__all-link--active' : ''}`}
              >
                <span className="capes-service__all-number">{s.number}</span>
                <span className="capes-service__all-name">{s.title}</span>
              </TransitionLink>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function HandcraftedService({ slug }: { slug: string }) {
  const service = getServiceById(slug);
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const bgNumberRef = useRef<HTMLSpanElement>(null);
  const capabilitiesGridRef = useRef<HTMLDivElement>(null);
  const proofGridRef = useRef<HTMLDivElement>(null);
  const relatedGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced || !service) return;

    const ctx = gsap.context(() => {
      // Massive background number: subtle parallax on scroll
      if (bgNumberRef.current) {
        gsap.to(bgNumberRef.current, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: bgNumberRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Capability tags stagger
      if (capabilitiesGridRef.current) {
        const tags = capabilitiesGridRef.current.querySelectorAll('.hc-service__capability');
        gsap.from(tags, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: capabilitiesGridRef.current,
            start: 'top 85%',
            once: true,
          },
        });
      }

      // Proof point cards stagger
      if (proofGridRef.current) {
        const items = proofGridRef.current.querySelectorAll('.hc-service__proof-item');
        gsap.from(items, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: proofGridRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }

      // Related work cards stagger
      if (relatedGridRef.current) {
        const cards = relatedGridRef.current.querySelectorAll('.hc-service__related-card');
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
  }, [prefersReduced, service]);

  if (!service) {
    return (
      <div className="hc-service">
        <div className="hc-service__notfound">
          <h1>Service Not Found</h1>
          <p>The service &ldquo;{slug}&rdquo; doesn&apos;t exist.</p>
          <TransitionLink to="/">&larr; Back Home</TransitionLink>
        </div>
      </div>
    );
  }

  const relatedProjects = service.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  return (
    <article className="hc-service">
      {/* Hero with massive background number */}
      <section className="hc-service__hero" data-section-theme="dark">
        <span
          ref={bgNumberRef}
          className="hc-service__hero-bg-number"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(15rem, 30vw, 40rem)',
            fontFamily: 'var(--font-headline, "industry", sans-serif)',
            fontWeight: 900,
            opacity: 0.04,
            color: '#fff',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          {service.number}
        </span>
        <div className="hc-service__hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <TransitionLink to="/" className="hc-service__back">&larr; All Services</TransitionLink>
          <span className="hc-service__number">Service {service.number}</span>
          <h1 className="hc-service__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>{service.title}</h1>
          <p className="hc-service__description">{service.description}</p>
        </div>
      </section>

      {/* Problem Statement -- dramatic pull-quote */}
      <section className="hc-service__problem" data-section-theme="dark">
        <div className="hc-service__problem-inner">
          <span className="hc-service__problem-label">The Problem</span>
          <p className="hc-service__problem-text">{service.problem}</p>
        </div>
      </section>

      {/* Capabilities -- minimal text grid */}
      <section className="hc-service__capabilities" data-section-theme="dark">
        <div className="hc-service__capabilities-inner">
          <span className="hc-service__section-label">Capabilities</span>
          <div className="hc-service__capabilities-grid" ref={capabilitiesGridRef}>
            {service.capabilities.map((cap) => (
              <TransitionLink
                key={cap}
                to={`/work?tag=${encodeURIComponent(cap)}`}
                className="hc-service__capability"
              >
                {cap}
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points -- large numbers, horizontal */}
      <section className="hc-service__proof" data-section-theme="dark">
        <div className="hc-service__proof-inner">
          <span className="hc-service__section-label">Proof Points</span>
          <div className="hc-service__proof-grid" ref={proofGridRef}>
            {service.proofPoints.map((point) => {
              const parts = point.split(' — ');
              return (
                <div key={point} className="hc-service__proof-item">
                  <span className="hc-service__proof-value">{parts[0]}</span>
                  {parts[1] && <span className="hc-service__proof-label">{parts[1]}</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Work */}
      {relatedProjects.length > 0 && (
        <section className="hc-service__related" data-section-theme="dark">
          <div className="hc-service__related-inner">
            <span className="hc-service__section-label">Related Work</span>
            <div className="hc-service__related-grid" ref={relatedGridRef}>
              {relatedProjects.map((project) => (
                project && (
                  <TransitionLink key={project.slug} to={`/work/${project.slug}`} className="hc-service__related-card">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="hc-service__related-img"
                      loading="lazy"
                      style={{
                        filter: 'grayscale(100%) brightness(0.7)',
                        transition: 'filter 0.6s ease',
                      }}
                    />
                    <h4>{project.title}</h4>
                    <p>{project.client}</p>
                  </TransitionLink>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hc-service__cta" data-section-theme="dark">
        <div className="hc-service__cta-inner">
          <h2 className="hc-service__cta-title">Need {service.title}?</h2>
          <p className="hc-service__cta-text">Let&apos;s talk about how MELT can help.</p>
          <TransitionLink to="/contact" className="hc-service__cta-btn">
            Start a Conversation &rarr;
          </TransitionLink>
        </div>
      </section>

      {/* All Services Navigation -- horizontal minimal list */}
      <section className="hc-service__all" data-section-theme="dark">
        <div className="hc-service__all-inner">
          <span className="hc-service__section-label">All Services</span>
          <nav className="hc-service__all-nav">
            {PARENT_SERVICES.map((s) => (
              <TransitionLink
                key={s.id}
                to={`/services/${s.id}`}
                className={`hc-service__all-link ${s.id === slug ? 'hc-service__all-link--active' : ''}`}
              >
                <span className="hc-service__all-number">{s.number}</span>
                <span className="hc-service__all-name">{s.title}</span>
              </TransitionLink>
            ))}
          </nav>
        </div>
      </section>

      {/* Monochrome-to-color hover styles */}
      <style>{`
        .hc-service__related-card:hover .hc-service__related-img {
          filter: grayscale(0%) brightness(1) !important;
        }
      `}</style>
    </article>
  );
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedService slug={slug} />;
  }

  return <CapesService slug={slug} />;
}
