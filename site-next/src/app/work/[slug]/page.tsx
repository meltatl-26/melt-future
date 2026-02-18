'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useVersion } from '@/lib/version-context';
import { getProjectBySlug, getRelatedProjects, getNextProject } from '@/data/projects';
import { getCampaignsByProject } from '@/data/campaigns';
import Lightbox from '@/components/shared/Lightbox';
import './case-study.css';
import './case-study-hc.css';

function CapesCaseStudy({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const [metricsOpen, setMetricsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!project) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy)' }}>Project Not Found</h1>
        <p style={{ color: 'var(--color-gray-500)', margin: 'var(--space-md) 0' }}>
          The project &ldquo;{slug}&rdquo; doesn&apos;t exist.
        </p>
        <Link href="/work" style={{ color: 'var(--color-royal-blue)', fontWeight: 600 }}>
          &larr; Back to Work
        </Link>
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
      <section className="capes-case__hero">
        <div className="container">
          <Link href="/work" className="capes-case__back">&larr; All Work</Link>
          <div className="capes-case__hero-meta">
            <span className="capes-case__category">{project.category}</span>
            <span className="capes-case__year">{project.year}</span>
            <span className="capes-case__location">{project.location}</span>
          </div>
          <h1 className="capes-case__title">{project.title}</h1>
          <p className="capes-case__client">Client: {project.client}</p>
          <p className="capes-case__stat-hero">{project.stat}</p>
        </div>
      </section>

      {/* Hero image */}
      <div className="capes-case__hero-image">
        <img
          src={project.gallery[0] || project.thumbnail}
          alt={project.title}
          className="capes-case__hero-img"
        />
      </div>

      <div className="container">
        {/* Brief */}
        <section className="capes-case__section">
          <p className="capes-case__brief">{project.description}</p>
        </section>

        {/* Flagship: Challenge + Approach */}
        {isFlag && project.challenge && (
          <section className="capes-case__section capes-case__narrative">
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
          <section className="capes-case__section">
            <p className="capes-case__longdesc">{project.longDescription}</p>
          </section>
        )}

        {/* Stats grid */}
        {project.stats && project.stats.length > 0 && (
          <section className="capes-case__section capes-case__stats">
            <h2 className="capes-case__section-title">Results</h2>
            <div className="capes-case__stats-grid">
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
          <section className="capes-case__section">
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
        <section className="capes-case__section">
          <h2 className="capes-case__section-title">Services Delivered</h2>
          <div className="capes-case__services">
            {project.services.map((s) => (
              <span key={s} className="capes-case__service-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="capes-case__section capes-case__testimonial">
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
          <section className="capes-case__section">
            <h2 className="capes-case__section-title">Gallery</h2>
            <div className="capes-case__gallery">
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
          <section className="capes-case__section capes-case__related">
            <h2 className="capes-case__section-title">Related Work</h2>
            <div className="capes-case__related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}`} className="capes-case__related-card">
                  <img
                    src={r.thumbnail}
                    alt={r.title}
                    className="capes-case__related-img"
                    loading="lazy"
                  />
                  <h4>{r.title}</h4>
                  <p>{r.client}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {next && (
          <div className="capes-case__next">
            <Link href={`/work/${next.slug}`}>
              Next Project: <strong>{next.title}</strong> &rarr;
            </Link>
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

  if (!project) {
    return (
      <div className="hc-case">
        <div className="hc-case__notfound">
          <h1>Project Not Found</h1>
          <p>The project &ldquo;{slug}&rdquo; doesn&apos;t exist.</p>
          <Link href="/work">&larr; Back to Work</Link>
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
      <section className="hc-case__hero">
        <div className="hc-case__hero-inner">
          <Link href="/work" className="hc-case__back">&larr; All Work</Link>

          <div className="hc-case__hero-meta">
            <span className="hc-case__category">{project.category}</span>
            <span className="hc-case__hero-divider" />
            <span className="hc-case__year">{project.year}</span>
          </div>

          <h1 className="hc-case__title">{project.title}</h1>
          <p className="hc-case__stat-hero">{project.stat}</p>
        </div>
      </section>

      {/* Hero image */}
      <div className="hc-case__hero-image">
        <img
          src={project.gallery[0] || project.thumbnail}
          alt={project.title}
          className="hc-case__hero-img"
        />
      </div>

      {/* Split content: main + sidebar */}
      <div className="hc-case__content">
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

        {/* Sidebar (right) */}
        <aside className="hc-case__sidebar">
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
        <section className="hc-case__stats">
          <div className="hc-case__full-width">
            <span className="hc-case__stats-label">Results</span>
            <div className="hc-case__stats-grid">
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
        <div className="hc-case__full-width">
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
        <section className="hc-case__testimonial">
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
        <section className="hc-case__gallery">
          <span className="hc-case__gallery-label">Gallery</span>
          <div className="hc-case__gallery-grid">
            {project.gallery.slice(0, 6).map((img, i) => (
              <button
                key={i}
                className="hc-case__gallery-item"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View gallery image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="hc-case__gallery-img"
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

      {/* Related Work */}
      {related.length > 0 && (
        <section className="hc-case__related">
          <div className="hc-case__full-width">
            <span className="hc-case__related-label">Related Work</span>
            <div className="hc-case__related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}`} className="hc-case__related-card">
                  <img
                    src={r.thumbnail}
                    alt={r.title}
                    className="hc-case__related-img"
                    loading="lazy"
                  />
                  <h4>{r.title}</h4>
                  <p>{r.client}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {next && (
        <section className="hc-case__next">
          <div className="hc-case__next-inner">
            <Link href={`/work/${next.slug}`}>
              <div>
                <span className="hc-case__next-label">Next Project</span>
                <span className="hc-case__next-title">{next.title}</span>
              </div>
              <span className="hc-case__next-arrow">&rarr;</span>
            </Link>
          </div>
        </section>
      )}
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
