'use client';

import './CapesTestimonials.css';

const TESTIMONIALS = [
  {
    quote:
      "MELT's ability to execute a multi-city sampling tour with consistent brand quality at every stop was remarkable.",
    author: 'Bobby Oliver',
    title: 'Head of Confections Brands, Ghirardelli',
  },
  {
    quote:
      'MELT has been our go-to partner for creating unforgettable fan experiences at the Final Four for over a decade.',
    author: 'Kasia Horner',
    title: 'NCAA Events',
  },
  {
    quote:
      'The level of production and attention to detail MELT brought to our leadership conference exceeded all expectations.',
    author: 'Dansby Swanson',
    title: 'Wellstar Ambassador',
  },
];

export function CapesTestimonials() {
  return (
    <section className="capes-testimonials">
      <div className="capes-testimonials__inner container">
        <div className="capes-testimonials__header">
          <span className="capes-testimonials__label">What Clients Say</span>
          <h2 className="capes-testimonials__title">Trusted Partners</h2>
        </div>

        <div className="capes-testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.author} className="capes-testimonials__card">
              <span className="capes-testimonials__quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="capes-testimonials__text">{testimonial.quote}</p>
              <footer className="capes-testimonials__footer">
                <cite className="capes-testimonials__author">{testimonial.author}</cite>
                <span className="capes-testimonials__role">{testimonial.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
