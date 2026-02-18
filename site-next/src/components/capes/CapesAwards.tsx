'use client';

import './CapesAwards.css';

const AWARDS = [
  { name: 'Ex Awards', category: 'Best Experiential Campaign' },
  { name: 'REGGIE Awards', category: 'Gold' },
  { name: 'Event Marketer', category: 'Top 100 Agencies' },
  { name: 'BizBash', category: 'Top Event Companies' },
];

export function CapesAwards() {
  return (
    <section className="capes-awards">
      <div className="capes-awards__inner container">
        <div className="capes-awards__header">
          <span className="capes-awards__label">Recognition</span>
          <h2 className="capes-awards__title">Awards & Honors</h2>
        </div>

        <div className="capes-awards__grid">
          {AWARDS.map((award) => (
            <div key={award.name} className="capes-awards__item">
              <div className="capes-awards__icon" aria-hidden="true">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="capes-awards__name">{award.name}</h3>
              <p className="capes-awards__category">{award.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
