'use client';

import Link from 'next/link';
import './HCTeamRoster.css';

const TEAM = [
  { name: 'Vince Thompson', role: 'Founder & CEO' },
  { name: 'Chris Mitchell', role: 'Executive Producer' },
  { name: 'James Parker', role: 'Creative Director' },
  { name: 'Sarah Williams', role: 'Director of Operations' },
  { name: 'Marcus Johnson', role: 'Senior Producer' },
  { name: 'Kezia Thompson', role: 'Brand Strategy' },
];

export function HCTeamRoster() {
  return (
    <section className="hc-team" data-section-theme="dark">
      <div className="hc-team__inner">
        <h2 className="hc-team__heading">
          <span className="hc-team__hash">###</span>{' '}TEAM
        </h2>

        <ul className="hc-team__list" role="list">
          {TEAM.map((member) => (
            <li key={member.name} className="hc-team__item">
              <span className="hc-team__name">{member.name}</span>
              <span className="hc-team__role">{member.role}</span>
            </li>
          ))}
        </ul>

        <div className="hc-team__cta-wrap">
          <Link href="/work" className="hc-team__cta">
            our work →
          </Link>
        </div>
      </div>
    </section>
  );
}
