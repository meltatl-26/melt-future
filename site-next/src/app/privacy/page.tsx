'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  {
    title: 'Information We Collect',
    text: 'When you use our website, we may collect information you provide directly, including your name, email address, company, phone number, and project details submitted through our contact forms and project scoper tool.',
  },
  {
    title: 'How We Use Your Information',
    text: 'We use the information we collect to respond to your inquiries, send relevant marketing communications (with your consent), improve our website and services, and analyze website usage to enhance user experience.',
  },
  {
    title: 'Email Communications',
    text: 'We use Mailchimp to manage our email communications. By subscribing to our newsletter or submitting a form, you consent to receiving emails from MELT Atlanta. You can unsubscribe at any time using the link in any email we send.',
  },
  {
    title: 'Data Storage',
    text: 'Your data is stored securely through our service providers including Vercel (website hosting) and Mailchimp (email marketing). We do not sell your personal information to third parties.',
  },
  {
    title: 'Cookies',
    text: 'We use localStorage to remember your site preferences (such as version selection) and progressive profiling data. We may use analytics cookies to understand how visitors interact with our website.',
  },
];

function CapesPrivacy() {
  return (
    <section data-section-theme="light">
      <div className="container" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)', maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: 'var(--space-xl)' }}>
          Privacy Policy
        </h1>
        <div style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-gray-600)' }}>
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            <strong>Last Updated:</strong> February 2026
          </p>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>
                {s.title}
              </h2>
              <p style={{ marginBottom: 'var(--space-md)' }}>{s.text}</p>
            </div>
          ))}
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-sm)' }}>
            Contact Us
          </h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:hello@meltatl.com" style={{ color: 'var(--color-royal-blue)' }}>hello@meltatl.com</a>.
          </p>
          <p style={{ marginTop: 'var(--space-xl)', fontSize: '0.875rem', color: 'var(--color-gray-400)' }}>
            MELT Atlanta &bull; Atlanta, GA &bull; (404) 585-3718
          </p>
        </div>
      </div>
    </section>
  );
}

function HandcraftedPrivacy() {
  const prefersReduced = useReducedMotion();
  const headingRef = useCharacterReveal();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;

    // Content sections stagger entrance
    if (contentRef.current) {
      const sections = contentRef.current.querySelectorAll(':scope > div, :scope > h2, :scope > p');
      gsap.from(sections, {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 80%', once: true },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced]);

  return (
    <div data-section-theme="dark" style={{ background: 'var(--color-black)', color: 'var(--color-white)', minHeight: '80vh', padding: 'var(--space-4xl) var(--grid-gutter)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1
          ref={headingRef as React.Ref<HTMLHeadingElement>}
          style={{
            fontFamily: "'Industry', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: 'var(--space-xl)',
          }}
        >
          Privacy Policy
        </h1>
        <div ref={contentRef} style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.6)' }}>
          <p style={{ marginBottom: 'var(--space-lg)', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
            Last Updated: February 2026
          </p>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 style={{
                fontFamily: "'Industry', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-white)',
                marginTop: 'var(--space-xl)',
                marginBottom: 'var(--space-sm)',
              }}>
                {s.title}
              </h2>
              <p style={{ marginBottom: 'var(--space-md)' }}>{s.text}</p>
            </div>
          ))}
          <h2 style={{
            fontFamily: "'Industry', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-white)',
            marginTop: 'var(--space-xl)',
            marginBottom: 'var(--space-sm)',
          }}>
            Contact Us
          </h2>
          <p style={{ marginBottom: 'var(--space-md)' }}>
            Questions? Email{' '}
            <a href="mailto:hello@meltatl.com" style={{ color: 'var(--color-royal-blue)' }}>hello@meltatl.com</a>
          </p>
          <p style={{ marginTop: 'var(--space-xl)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.25)' }}>
            MELT Atlanta &bull; Atlanta, GA &bull; (404) 585-3718
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  const { version } = useVersion();
  return version === 'handcrafted' ? <HandcraftedPrivacy /> : <CapesPrivacy />;
}
