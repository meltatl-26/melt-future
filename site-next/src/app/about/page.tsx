'use client';

import { useVersion } from '@/lib/version-context';
import './about.css';
import './about-hc.css';

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

function HandcraftedAbout() {
  return (
    <>
      {/* Hero */}
      <section className="hc-about__hero">
        <h1 className="hc-about__hero-title">The Story</h1>
        <p className="hc-about__hero-subtitle">26 Years of Building What Others Can&apos;t</p>
      </section>

      {/* Acts */}
      {ACTS.map((act) => (
        <section key={act.label} className="hc-about__act">
          <div className="hc-about__act-inner">
            <div className="hc-about__act-number" aria-hidden="true">{act.number}</div>
            <div className="hc-about__act-content">
              <span className="hc-about__act-label">{act.label}</span>
              <h2 className="hc-about__act-title">{act.title}</h2>
              <p className="hc-about__act-text">{act.text}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Leadership */}
      <section className="hc-about__leadership">
        <div className="hc-about__leadership-inner">
          <span className="hc-about__leadership-label">Leadership</span>
          <div className="hc-about__leadership-grid">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="hc-about__leader">
                <div
                  className="hc-about__leader-image"
                  role="img"
                  aria-label={`Photo of ${leader.name}`}
                />
                <h3 className="hc-about__leader-name">{leader.name}</h3>
                <span className="hc-about__leader-role">{leader.role}</span>
                <p className="hc-about__leader-bio">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="hc-about__stats">
        <div className="hc-about__stats-inner">
          {STATS.map((stat) => (
            <div key={stat.label} className="hc-about__stat">
              <span className="hc-about__stat-value">{stat.value}</span>
              <span className="hc-about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function CapesAbout() {
  return (
    <section className="capes-about">
      <div className="container">
        {/* Hero */}
        <div className="capes-about__hero">
          <span className="capes-about__label">About</span>
          <h1 className="capes-about__title">About MELT</h1>
          <p className="capes-about__subtitle">
            26 years of experiential marketing execution
          </p>
        </div>

        {/* Three Stories */}
        <div className="capes-about__stories">
          <h2 className="capes-about__stories-heading">Our Story</h2>
          <div className="capes-about__stories-grid">
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
        <div className="capes-about__leadership">
          <h2 className="capes-about__leadership-heading">Leadership</h2>
          <div className="capes-about__leadership-grid">
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
        <div className="capes-about__stats">
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
