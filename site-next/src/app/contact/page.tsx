'use client';

import React, { useState, useEffect, useRef, type FormEvent } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import TransitionLink from '@/components/shared/TransitionLink';
import './contact.css';
import './contact-hc.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TYPES = [
  'Experiential Event',
  'Sampling Program',
  'Sponsorship Activation',
  'Content Production',
  'NIL Partnership',
  'Other',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function HandcraftedContact() {
  const prefersReduced = useReducedMotion();
  const headingRef = useCharacterReveal({ stagger: 0.04, duration: 1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });

  useEffect(() => {
    if (prefersReduced) return;

    // Form rows stagger entrance
    if (formRef.current) {
      const rows = formRef.current.querySelectorAll('.hc-contact__form-row, .hc-contact__field');
      gsap.from(rows, {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 80%', once: true },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/mailchimp/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.name,
          company: formData.company,
          message: `[${formData.projectType}] ${formData.message}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="hc-contact" data-section-theme="dark">
        <div className="hc-contact__success">
          <h1 className="hc-contact__success-title">We&apos;ll Be<br />In Touch</h1>
          <p className="hc-contact__success-text">
            Thanks for reaching out. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="hc-contact" data-section-theme="dark">
      {/* Hero */}
      <div className="hc-contact__hero">
        <h1 className="hc-contact__hero-title" ref={headingRef as React.Ref<HTMLHeadingElement>}>Let&apos;s Talk</h1>
        <p className="hc-contact__hero-subtitle">
          Ready to turn your next idea into an unforgettable experience?
        </p>
      </div>

      {/* Form */}
      <div className="hc-contact__form-section">
        <form className="hc-contact__form" onSubmit={handleSubmit} ref={formRef}>
          <div className="hc-contact__form-row">
            <div className="hc-contact__field">
              <label htmlFor="hc-contact-name">Name</label>
              <input
                id="hc-contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="hc-contact__field">
              <label htmlFor="hc-contact-email">Email</label>
              <input
                id="hc-contact-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="hc-contact__form-row">
            <div className="hc-contact__field">
              <label htmlFor="hc-contact-company">Company</label>
              <input
                id="hc-contact-company"
                name="company"
                type="text"
                required
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="hc-contact__field">
              <label htmlFor="hc-contact-phone">
                Phone <span className="hc-contact__optional">(optional)</span>
              </label>
              <input
                id="hc-contact-phone"
                name="phone"
                type="tel"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="hc-contact__field">
            <label htmlFor="hc-contact-project-type">Project Type</label>
            <select
              id="hc-contact-project-type"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="" disabled>Select a project type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="hc-contact__field">
            <label htmlFor="hc-contact-message">Message</label>
            <textarea
              id="hc-contact-message"
              name="message"
              required
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="hc-contact__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'error' && (
            <div className="hc-contact__status hc-contact__status--error">
              Something went wrong. Please try again or email us directly at hello@meltatl.com.
            </div>
          )}
        </form>
      </div>

      {/* Contact info */}
      <div className="hc-contact__info">
        <div className="hc-contact__info-inner">
          <ul className="hc-contact__info-items">
            <li className="hc-contact__info-item">
              <span className="hc-contact__info-label">Email</span>
              <span className="hc-contact__info-value">
                <a href="mailto:hello@meltatl.com">hello@meltatl.com</a>
              </span>
            </li>
            <li className="hc-contact__info-item">
              <span className="hc-contact__info-label">Phone</span>
              <span className="hc-contact__info-value">
                <a href="tel:+14045853718">(404) 585-3718</a>
              </span>
            </li>
            <li className="hc-contact__info-item">
              <span className="hc-contact__info-label">Location</span>
              <span className="hc-contact__info-value">Atlanta, GA</span>
            </li>
          </ul>

          <div className="hc-contact__scoper">
            <p className="hc-contact__scoper-text">Have a project in mind?</p>
            <Link href="/scope-your-project" className="hc-contact__scoper-link">
              Try the Project Scoper
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapesContact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const prefersReduced = useReducedMotion();
  const headingRef = useCharacterReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/mailchimp/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.name,
          company: formData.company,
          message: `[${formData.projectType}] ${formData.message}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', projectType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="capes-contact">
      <div className="container">
        {/* Hero */}
        <div className="capes-contact__hero" data-section-theme="dark">
          <span className="capes-contact__label">Contact</span>
          <h1 className="capes-contact__title" ref={headingRef as React.Ref<HTMLHeadingElement>}>Let&apos;s Talk</h1>
          <p className="capes-contact__subtitle">
            Ready to turn your next idea into an unforgettable experience?
          </p>
        </div>

        <div className="capes-contact__layout" data-section-theme="light">
          {/* Form */}
          <form className="capes-contact__form" onSubmit={handleSubmit}>
            <div className="capes-contact__form-row">
              <div className="capes-contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="capes-contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="capes-contact__form-row">
              <div className="capes-contact__field">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  required
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="capes-contact__field">
                <label htmlFor="contact-phone">
                  Phone <span className="capes-contact__optional">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="capes-contact__field">
              <label htmlFor="contact-project-type">Project Type</label>
              <select
                id="contact-project-type"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="" disabled>Select a project type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="capes-contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="capes-contact__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="capes-contact__status capes-contact__status--success">
                Thanks for reaching out! We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="capes-contact__status capes-contact__status--error">
                Something went wrong. Please try again or email us directly at hello@meltatl.com.
              </div>
            )}
          </form>

          {/* Sidebar */}
          <aside className="capes-contact__sidebar">
            <div className="capes-contact__info-block">
              <h2 className="capes-contact__info-heading">Get in Touch</h2>
              <ul className="capes-contact__info-list">
                <li className="capes-contact__info-item">
                  <span className="capes-contact__info-label">Email</span>
                  <span className="capes-contact__info-value">
                    <a href="mailto:hello@meltatl.com">hello@meltatl.com</a>
                  </span>
                </li>
                <li className="capes-contact__info-item">
                  <span className="capes-contact__info-label">Phone</span>
                  <span className="capes-contact__info-value">
                    <a href="tel:+14045853718">(404) 585-3718</a>
                  </span>
                </li>
                <li className="capes-contact__info-item">
                  <span className="capes-contact__info-label">Location</span>
                  <span className="capes-contact__info-value">Atlanta, GA</span>
                </li>
              </ul>
            </div>

            <div className="capes-contact__scoper">
              <h3 className="capes-contact__scoper-heading">Have a project in mind?</h3>
              <p className="capes-contact__scoper-text">
                Use our Project Scoper to get an instant ballpark estimate for your experiential marketing project.
              </p>
              <TransitionLink to="/scope-your-project" className="capes-contact__scoper-link">
                Try the Project Scoper
              </TransitionLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedContact />;
  }

  return <CapesContact />;
}
