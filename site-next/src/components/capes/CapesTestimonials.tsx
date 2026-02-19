'use client';

import { useState, useEffect, useCallback } from 'react';
import './CapesTestimonials.css';

const TESTIMONIALS = [
  {
    quote:
      "MELT's ability to execute a multi-city sampling tour with consistent brand quality at every stop was remarkable.",
    name: 'Bobby Oliver',
    role: 'Head of Confections Brands, Ghirardelli',
  },
  {
    quote:
      'MELT has been our go-to partner for creating unforgettable fan experiences at the Final Four for over a decade.',
    name: 'Kasia Horner',
    role: 'NCAA Events',
  },
  {
    quote:
      'The level of production and attention to detail MELT brought to our leadership conference exceeded all expectations.',
    name: 'Dansby Swanson',
    role: 'Wellstar Ambassador',
  },
];

export function CapesTestimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const current = TESTIMONIALS[active];

  return (
    <section
      className="testimonials section-dark grain"
      data-section-theme="dark"
      aria-label="Client testimonials"
    >
      <div className="testimonials__inner container">
        <span className="testimonials__quote-mark" aria-hidden="true">
          &ldquo;
        </span>

        <blockquote className="testimonials__quote">
          <p>{current.quote}</p>
        </blockquote>

        <div className="testimonials__attribution">
          <cite className="testimonials__name">{current.name}</cite>
          <span className="testimonials__role">{current.role}</span>
        </div>

        <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === active ? ' active' : ''}`}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
