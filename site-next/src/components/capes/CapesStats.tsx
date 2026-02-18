'use client';

import Counter from '@/components/shared/Counter';
import './CapesStats.css';

const STATS = [
  { target: 26, suffix: '+', label: 'Years' },
  { target: 10, suffix: 'K+', label: 'Events Produced' },
  { target: 19, suffix: '', label: 'Final Fours' },
  { target: 22, suffix: '', label: 'Year Coca-Cola Partnership' },
];

const PROOF_POINTS = [
  '$300M Arena Deal — City of Mobile',
  '560% ROI — Bath & Body Works',
  '2,563% ROI — Comfort Colors',
  '1.87M Impressions — Ghirardelli Tour',
  '3,672% Influencer ROI — Dogsters',
  '$766K Earned Media Value',
];

export function CapesStats() {
  return (
    <section className="capes-stats">
      <div className="capes-stats__inner container">
        <div className="capes-stats__header">
          <span className="capes-stats__label">By The Numbers</span>
          <h2 className="capes-stats__title">26 Years of Execution</h2>
        </div>

        <div className="capes-stats__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="capes-stats__card">
              <span className="capes-stats__number">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="capes-stats__counter"
                />
              </span>
              <span className="capes-stats__card-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="capes-stats__proof">
          <h3 className="capes-stats__proof-title">Proof Points</h3>
          <div className="capes-stats__proof-grid">
            {PROOF_POINTS.map((point) => (
              <div key={point} className="capes-stats__proof-item">
                <span className="capes-stats__proof-dot" aria-hidden="true" />
                <span className="capes-stats__proof-text">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
