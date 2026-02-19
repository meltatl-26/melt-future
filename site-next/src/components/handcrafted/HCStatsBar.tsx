'use client';

import './HCStatsBar.css';

const STATS = [
  { value: '26+', label: 'Years Executing' },
  { value: '10K+', label: 'Events Produced' },
  { value: '18', label: 'Final Fours' },
  { value: '22yr', label: 'Coca-Cola' },
];

export function HCStatsBar() {
  return (
    <section className="hc-stats-bar" data-section-theme="dark">
      <div className="hc-stats-bar__inner">
        {STATS.map((stat, i) => (
          <div key={i} className="hc-stats-bar__item">
            <span className="hc-stats-bar__value">{stat.value}</span>
            <span className="hc-stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
