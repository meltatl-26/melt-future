'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVersion } from '@/lib/version-context';
import { useCharacterReveal, useWordReveal } from '@/hooks/useCharacterReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './about.css';
import './about-hc.css';

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    number: '01',
    title: '26 Years Strong',
    text: 'Founded in 2000, MELT has executed over 10,000 events and activations across the country. From our Atlanta headquarters, we\u2019ve built lasting partnerships with brands like Coca-Cola (22 years), NCAA, ESPN, Ghirardelli, Bath & Body Works, and hundreds more.',
  },
  {
    number: '02',
    title: 'Small Team, Big Impact',
    text: 'We\u2019re a 7-person team. No layers. No junior hand-offs. When you work with MELT, you work with senior-level operators who\u2019ve been executing world-class events for decades. That\u2019s our edge.',
  },
  {
    number: '03',
    title: 'Execution Is the Moat',
    text: 'AI can generate a brief in seconds. But it can\u2019t manage 200 brand ambassadors across 8 cities, negotiate venue contracts at 3am, or build a custom Airstream activation in a parking lot. Execution is the moat that separates great ideas from great results.',
  },
];

const LEADERS = [
  {
    name: 'Vince Thompson',
    role: 'Founder & CEO',
    bio: 'Vince founded MELT in 2000 with a simple thesis: the experiential marketing industry was broken. Too many agencies sold ideas they couldn\u2019t execute. MELT was built to be different \u2014 an execution-first agency where every team member has production experience.',
  },
  {
    name: 'David Culbertson',
    role: 'Managing Director',
    bio: 'David brings strategic vision to MELT\u2019s operations, leading client relationships and business development. His background in sports marketing and brand partnerships has helped grow MELT\u2019s portfolio across multiple verticals.',
  },
];

const STATS = [
  { value: '26+', label: 'Years' },
  { value: '10,000+', label: 'Events' },
  { value: '22-Year', label: 'Coca-Cola Partnership' },
  { value: '19', label: 'Final Fours' },
];

const ACTS = [
  {
    number: '2000',
    label: 'Act I',
    title: 'Founded 2000',
    text: 'MELT was born from a simple conviction: the experiential marketing industry was broken. Too many agencies sold ideas they couldn\u2019t execute. Vince Thompson built MELT to be different \u2014 an execution-first agency where every team member has production experience. Twenty-six years later, that thesis still holds.',
  },
  {
    number: '7',
    label: 'Act II',
    title: '7 People',
    text: 'No layers. No junior hand-offs. No bloated org chart. When you work with MELT, you work with senior-level operators who\u2019ve been executing world-class events for decades. Seven people who have collectively produced over 10,000 activations. That\u2019s our edge.',
  },
  {
    number: '\u221E',
    label: 'Act III',
    title: 'The Moat',
    text: 'AI can generate a brief in seconds. Your agency can deck it beautifully. But neither can manage 200 brand ambassadors across 8 cities, negotiate venue contracts at 3am, or build a custom Airstream activation in a parking lot. Execution is the moat that separates great ideas from great results.',
  },
];

const PANELS = [
  {
    id: 'about',
    label: 'ABOUT',
    title: 'Who We Are',
    body: 'MELT is an experiential marketing agency built on a single premise: execution is everything. Founded in 2000, we\'ve spent 26 years producing the activations that define brands — Final Fours, arena openings, multi-city sampling tours, championship fan zones. We don\'t pitch concepts. We build them.',
    subtext: 'A 7-person senior team with no junior hand-offs. When you work with MELT, you work with the people who\'ve done it 10,000 times.',
  },
  {
    id: 'team',
    label: 'TEAM',
    title: 'The People',
    body: 'Seven operators. Decades of combined production experience. Every person on the MELT team has stood in a parking lot at 3am, managed brand ambassadors across 8 cities simultaneously, and delivered under conditions no deck could have anticipated.',
    subtext: 'No layers. No hand-offs. Senior-level execution on every engagement.',
  },
  {
    id: 'approach',
    label: 'APPROACH',
    title: 'How We Work',
    body: 'We start with your outcome, not your ask. Most clients come to us with an idea. We work backwards from what success looks like — attendance, impressions, brand lift, revenue — and build the execution architecture to get there.',
    subtext: 'Full-service from concepting through debrief. One team, one point of contact, total accountability.',
  },
  {
    id: 'values',
    label: 'VALUES',
    title: 'What We Stand For',
    body: 'Transparency in scope. Honesty on timeline. Relentless follow-through. We\'ve watched agencies overpromise and underdeliver for two decades. Our reputation is built on doing exactly what we say we\'ll do — no exceptions.',
    subtext: 'If we can\'t execute it to the standard you need, we\'ll tell you before we take your money.',
  },
];

const COLLAGE_IMAGES = [
  '/images/work/ncaa-final-four.webp',
  '/images/work/coca-cola-gameday.webp',
  '/images/work/bath-body-works.webp',
  '/images/hero/hero-02.webp',
  '/images/work/mobile-arena.webp',
  '/images/hero/hero-03.webp',
];

const MARQUEE_TEXT = 'our work';

function HandcraftedAbout() {
  const [activePanel, setActivePanel] = useState('about');
  const prefersReduced = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    if (!marqueeRef.current) return;
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50, duration: 20, ease: 'linear', repeat: -1,
    });
    return () => { tween.kill(); };
  }, [prefersReduced]);

  // Sticky tab highlight on scroll
  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>('[data-panel-id]');
    if (!panels.length) return;
    const observers: IntersectionObserver[] = [];
    panels.forEach((panel) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActivePanel(panel.dataset.panelId!); },
        { threshold: 0.4 }
      );
      obs.observe(panel);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToPanel = (id: string) => {
    const el = document.querySelector<HTMLElement>(`[data-panel-id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Image collage hero */}
      <section className="hc-about__collage" data-section-theme="dark">
        <div className="hc-about__collage-grid">
          {COLLAGE_IMAGES.map((src, i) => (
            <div key={i} className={`hc-about__collage-img hc-about__collage-img--${i + 1}`}>
              <img src={src} alt="" loading={i < 3 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </section>

      {/* "ABOUT US" heading */}
      <section className="hc-about__title-section" data-section-theme="dark">
        <div className="hc-about__title-inner">
          <h1 className="hc-about__title">ABOUT US</h1>
        </div>
      </section>

      {/* Sticky tab nav */}
      <div className="hc-about__tab-nav" ref={tabsRef} data-section-theme="dark">
        <div className="hc-about__tab-nav-inner">
          {PANELS.map((panel) => (
            <button
              key={panel.id}
              className={`hc-about__tab${activePanel === panel.id ? ' hc-about__tab--active' : ''}`}
              onClick={() => scrollToPanel(panel.id)}
              aria-pressed={activePanel === panel.id}
            >
              {panel.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4 content panels */}
      <div className="hc-about__panels" data-section-theme="dark">
        {PANELS.map((panel, i) => (
          <section
            key={panel.id}
            className="hc-about__panel"
            data-panel-id={panel.id}
            data-section-theme="dark"
          >
            <div className="hc-about__panel-inner">
              <span className="hc-about__panel-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="hc-about__panel-content">
                <span className="hc-about__panel-label">{panel.label}</span>
                <h2 className="hc-about__panel-title">{panel.title}</h2>
                <p className="hc-about__panel-body">{panel.body}</p>
                <p className="hc-about__panel-sub">{panel.subtext}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4-image grid block */}
      <section className="hc-about__image-grid" data-section-theme="dark">
        <div className="hc-about__image-grid-inner">
          {COLLAGE_IMAGES.slice(0, 4).map((src, i) => (
            <div key={i} className="hc-about__image-grid-item">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA marquee */}
      <section className="hc-about__cta-marquee" data-section-theme="dark">
        <a href="/work" className="hc-about__cta-marquee-link" aria-label="View our work">
          <div className="hc-about__cta-marquee-track" ref={marqueeRef}>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="hc-about__cta-marquee-text">
                {MARQUEE_TEXT}
                <span className="hc-about__cta-marquee-dot" aria-hidden="true"> · </span>
              </span>
            ))}
          </div>
        </a>
      </section>
    </>
  );
}

function CapesAbout() {
  const prefersReduced = useReducedMotion();
  const heroHeadingRef = useCharacterReveal();
  const storiesHeadingRef = useWordReveal();
  const leadershipHeadingRef = useWordReveal();
  const storiesGridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const leadershipGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    if (storiesGridRef.current) {
      const cards = storiesGridRef.current.querySelectorAll('.capes-about__story-card');
      gsap.from(cards, {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: storiesGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (leadershipGridRef.current) {
      const leaders = leadershipGridRef.current.querySelectorAll('.capes-about__leader');
      gsap.from(leaders, {
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: leadershipGridRef.current, start: 'top 80%', once: true },
      });
    }
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll('.capes-about__stat');
      gsap.from(stats, {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%', once: true },
      });
    }
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, [prefersReduced]);

  return (
    <section className="capes-about">
      <div className="container">
        {/* Hero */}
        <div className="capes-about__hero" data-section-theme="dark">
          <span className="capes-about__label">About</span>
          <h1 className="capes-about__title" ref={heroHeadingRef as React.Ref<HTMLHeadingElement>}>About MELT</h1>
          <p className="capes-about__subtitle">
            26 years of experiential marketing execution
          </p>
        </div>

        {/* Three Stories */}
        <div className="capes-about__stories" data-section-theme="light">
          <h2 className="capes-about__stories-heading" ref={storiesHeadingRef as React.Ref<HTMLHeadingElement>}>Our Story</h2>
          <div className="capes-about__stories-grid" ref={storiesGridRef}>
            {STORIES.map((story) => (
              <div key={story.number} className="capes-about__story-card">
                <span className="capes-about__story-number">{story.number}</span>
                <h3 className="capes-about__story-title">{story.title}</h3>
                <p className="capes-about__story-text">{story.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="capes-about__leadership" data-section-theme="light">
          <h2 className="capes-about__leadership-heading" ref={leadershipHeadingRef as React.Ref<HTMLHeadingElement>}>Leadership</h2>
          <div className="capes-about__leadership-grid" ref={leadershipGridRef}>
            {LEADERS.map((leader) => (
              <div key={leader.name} className="capes-about__leader">
                <div
                  className="capes-about__leader-image"
                  role="img"
                  aria-label={`Photo of ${leader.name}`}
                />
                <div className="capes-about__leader-info">
                  <h3 className="capes-about__leader-name">{leader.name}</h3>
                  <span className="capes-about__leader-role">{leader.role}</span>
                  <p className="capes-about__leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="capes-about__stats" data-section-theme="dark" ref={statsRef}>
          {STATS.map((stat) => (
            <div key={stat.label} className="capes-about__stat">
              <span className="capes-about__stat-value">{stat.value}</span>
              <span className="capes-about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return <HandcraftedAbout />;
  }

  return <CapesAbout />;
}
