'use client';

import Link from 'next/link';
import clients from '@/data/clients';
import './HandcraftedHero.css';

const EXECUTION = 'EXECUTION'.split('');

const ICEBERG_STACK = [
  { number: '01', title: 'Permitting & Compliance', desc: 'City permits, health departments, fire marshals, insurance certificates — across every market.' },
  { number: '02', title: 'Venue & Logistics', desc: 'Site surveys, load-in schedules, power drops, weather contingencies, parking coordination.' },
  { number: '03', title: 'Staffing & Training', desc: 'Brand ambassadors, event managers, security, cleanup crews — hired, trained, managed.' },
  { number: '04', title: 'Custom Fabrication', desc: 'Branded builds, stage design, interactive installations, signage — designed, built, shipped.' },
  { number: '05', title: 'Vendor Management', desc: 'Catering, AV, transportation, rentals, print production — sourced, negotiated, coordinated.' },
  { number: '06', title: 'Measurement & Reporting', desc: 'Real-time dashboards, post-event recaps, ROI analysis, client-ready deliverables.' },
];

export function HandcraftedHero() {
  return (
    <>
      {/* EXECUTION Hero */}
      <section className="hc-hero">
        <div className="hc-hero__word" aria-label="Execution">
          {EXECUTION.map((char, i) => (
            <span key={i} className="hc-hero__char" aria-hidden="true">
              {char}
            </span>
          ))}
        </div>
        <p className="hc-hero__tagline">
          Great ideas aren&apos;t anything without great execution.
        </p>
        <div className="hc-hero__scroll" aria-hidden="true">
          <span className="hc-hero__scroll-text">Scroll</span>
          <div className="hc-hero__scroll-line" />
        </div>
      </section>

      {/* Execution Iceberg */}
      <section className="hc-iceberg">
        <div className="hc-iceberg__inner">
          <div className="hc-iceberg__header">
            <span className="hc-iceberg__label">The Execution Gap</span>
            <h2 className="hc-iceberg__title">
              What They See vs.<br /><em>What We Do</em>
            </h2>
          </div>

          <div className="hc-iceberg__visual">
            {/* Above water */}
            <div className="hc-iceberg__above">
              <div className="hc-iceberg__above-percent">10%</div>
              <p className="hc-iceberg__above-desc">
                The activation. The experience. The moment.
              </p>
            </div>

            {/* Waterline */}
            <div className="hc-iceberg__waterline">
              <span className="hc-iceberg__waterline-label">Surface Level</span>
            </div>

            {/* Below water */}
            <div className="hc-iceberg__below">
              <div className="hc-iceberg__below-percent">90%</div>
              <p className="hc-iceberg__below-desc">
                The hidden execution stack that makes it all possible.
              </p>

              <div className="hc-iceberg__stack">
                {ICEBERG_STACK.map((item) => (
                  <div key={item.number} className="hc-iceberg__stack-item">
                    <span className="hc-iceberg__stack-number">{item.number}</span>
                    <h3 className="hc-iceberg__stack-title">{item.title}</h3>
                    <p className="hc-iceberg__stack-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Statement */}
      <section className="hc-statement">
        <h2 className="hc-statement__text">
          <span>AI can dream it.</span><br />
          <span>Your agency can deck it.</span><br />
          <em>We deliver it.</em>
        </h2>
      </section>

      {/* Stats */}
      <section className="hc-stats">
        <div className="hc-stats__inner">
          <div className="hc-stats__item">
            <span className="hc-stats__value">26+</span>
            <span className="hc-stats__label">Years</span>
          </div>
          <div className="hc-stats__item">
            <span className="hc-stats__value">10K+</span>
            <span className="hc-stats__label">Events</span>
          </div>
          <div className="hc-stats__item">
            <span className="hc-stats__value">19</span>
            <span className="hc-stats__label">Final Fours</span>
          </div>
          <div className="hc-stats__item">
            <span className="hc-stats__value">22yr</span>
            <span className="hc-stats__label">Coca-Cola</span>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="hc-clients">
        <div className="hc-clients__track">
          {[...clients, ...clients].map((client, i) => (
            <span key={`${client.slug}-${i}`} className="hc-clients__name">
              {client.name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hc-cta">
        <div className="hc-cta__inner">
          <span className="hc-cta__label">Ready?</span>
          <h2 className="hc-cta__title">Let&apos;s Build<br />Something Real</h2>
          <div className="hc-cta__links">
            <Link href="/contact" className="hc-cta__link">Start a Conversation</Link>
            <Link href="/scope-your-project" className="hc-cta__link">Scope Your Project</Link>
            <Link href="/work" className="hc-cta__link">See the Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
