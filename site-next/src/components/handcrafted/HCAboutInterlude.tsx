'use client';

import Link from 'next/link';
import './HCAboutInterlude.css';

export function HCAboutInterlude() {
  return (
    <section className="hc-about-interlude" data-section-theme="dark">
      <div className="hc-about-interlude__inner">
        <div className="hc-about-interlude__image-wrap">
          <img
            src="/images/hero/hero-03.webp"
            alt="Melt team executing a live event"
            className="hc-about-interlude__image"
            loading="lazy"
          />
        </div>

        <div className="hc-about-interlude__content">
          <p className="hc-about-interlude__text">
            Great ideas aren&apos;t anything
            without great execution.
          </p>
          <Link href="/about" className="hc-about-interlude__link">
            about us →
          </Link>
        </div>
      </div>
    </section>
  );
}
