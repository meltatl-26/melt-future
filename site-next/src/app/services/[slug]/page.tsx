'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useVersion } from '@/lib/version-context';
import { getServiceById, PARENT_SERVICES } from '@/data/services';
import { getProjectBySlug } from '@/data/projects';
import './service.css';
import './service-hc.css';

function CapesService({ slug }: { slug: string }) {
  const service = getServiceById(slug);

  if (!service) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy)' }}>Service Not Found</h1>
        <p style={{ color: 'var(--color-gray-500)', margin: 'var(--space-md) 0' }}>
          The service &ldquo;{slug}&rdquo; doesn&apos;t exist.
        </p>
        <Link href="/" style={{ color: 'var(--color-royal-blue)', fontWeight: 600 }}>
          &larr; Back Home
        </Link>
      </div>
    );
  }

  const relatedProjects = service.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  return (
    <article>
      {/* Hero */}
      <section className="capes-service__hero">
        <div className="container">
          <Link href="/" className="capes-service__back">&larr; All Services</Link>
          <span className="capes-service__number">Service {service.number}</span>
          <h1 className="capes-service__title">{service.title}</h1>
          <p className="capes-service__description">{service.description}</p>
        </div>
      </section>

      <div className="container">
        {/* Problem Statement */}
        <section className="capes-service__problem">
          <div className="capes-service__problem-inner">
            <span className="capes-service__problem-label">The Problem</span>
            <p className="capes-service__problem-text">{service.problem}</p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="capes-service__capabilities">
          <h2 className="capes-service__section-title">Capabilities</h2>
          <div className="capes-service__capabilities-list">
            {service.capabilities.map((cap) => (
              <Link
                key={cap}
                href={`/work?tag=${encodeURIComponent(cap)}`}
                className="capes-service__capability-tag"
              >
                {cap}
              </Link>
            ))}
          </div>
        </section>

        {/* Proof Points */}
        <section className="capes-service__proof">
          <h2 className="capes-service__section-title">Proof Points</h2>
          <div className="capes-service__proof-grid">
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
          <section className="capes-service__related">
            <h2 className="capes-service__section-title">Related Work</h2>
            <div className="capes-service__related-grid">
              {relatedProjects.map((project) => (
                project && (
                  <Link key={project.slug} href={`/work/${project.slug}`} className="capes-service__related-card">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="capes-service__related-img"
                      loading="lazy"
                    />
                    <h4>{project.title}</h4>
                    <p>{project.client}</p>
                  </Link>
                )
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="capes-service__cta">
          <h2 className="capes-service__cta-title">Need {service.title}?</h2>
          <p className="capes-service__cta-text">Let&apos;s talk about how MELT can help.</p>
          <Link href="/contact" className="capes-service__cta-btn">
            Start a Conversation &rarr;
          </Link>
        </section>

        {/* All Services Nav */}
        <section className="capes-service__all">
          <h2 className="capes-service__section-title">All Services</h2>
          <div className="capes-service__all-grid">
            {PARENT_SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className={`capes-service__all-link ${s.id === slug ? 'capes-service__all-link--active' : ''}`}
              >
                <span className="capes-service__all-number">{s.number}</span>
                <span className="capes-service__all-name">{s.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function HandcraftedService({ slug }: { slug: string }) {
  const service = getServiceById(slug);

  if (!service) {
    return (
      <div className="hc-service">
        <div className="hc-service__notfound">
          <h1>Service Not Found</h1>
          <p>The service &ldquo;{slug}&rdquo; doesn&apos;t exist.</p>
          <Link href="/">&larr; Back Home</Link>
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
      <section className="hc-service__hero">
        <span className="hc-service__hero-bg-number">{service.number}</span>
        <div className="hc-service__hero-inner">
          <Link href="/" className="hc-service__back">&larr; All Services</Link>
          <span className="hc-service__number">Service {service.number}</span>
          <h1 className="hc-service__title">{service.title}</h1>
          <p className="hc-service__description">{service.description}</p>
        </div>
      </section>

      {/* Problem Statement — dramatic pull-quote */}
      <section className="hc-service__problem">
        <div className="hc-service__problem-inner">
          <span className="hc-service__problem-label">The Problem</span>
          <p className="hc-service__problem-text">{service.problem}</p>
        </div>
      </section>

      {/* Capabilities — minimal text grid */}
      <section className="hc-service__capabilities">
        <div className="hc-service__capabilities-inner">
          <span className="hc-service__section-label">Capabilities</span>
          <div className="hc-service__capabilities-grid">
            {service.capabilities.map((cap) => (
              <Link
                key={cap}
                href={`/work?tag=${encodeURIComponent(cap)}`}
                className="hc-service__capability"
              >
                {cap}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points — large numbers, horizontal */}
      <section className="hc-service__proof">
        <div className="hc-service__proof-inner">
          <span className="hc-service__section-label">Proof Points</span>
          <div className="hc-service__proof-grid">
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
        <section className="hc-service__related">
          <div className="hc-service__related-inner">
            <span className="hc-service__section-label">Related Work</span>
            <div className="hc-service__related-grid">
              {relatedProjects.map((project) => (
                project && (
                  <Link key={project.slug} href={`/work/${project.slug}`} className="hc-service__related-card">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="hc-service__related-img"
                      loading="lazy"
                    />
                    <h4>{project.title}</h4>
                    <p>{project.client}</p>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hc-service__cta">
        <div className="hc-service__cta-inner">
          <h2 className="hc-service__cta-title">Need {service.title}?</h2>
          <p className="hc-service__cta-text">Let&apos;s talk about how MELT can help.</p>
          <Link href="/contact" className="hc-service__cta-btn">
            Start a Conversation &rarr;
          </Link>
        </div>
      </section>

      {/* All Services Navigation — horizontal minimal list */}
      <section className="hc-service__all">
        <div className="hc-service__all-inner">
          <span className="hc-service__section-label">All Services</span>
          <nav className="hc-service__all-nav">
            {PARENT_SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className={`hc-service__all-link ${s.id === slug ? 'hc-service__all-link--active' : ''}`}
              >
                <span className="hc-service__all-number">{s.number}</span>
                <span className="hc-service__all-name">{s.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
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
