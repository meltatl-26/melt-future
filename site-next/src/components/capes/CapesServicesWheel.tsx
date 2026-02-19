'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { PARENT_SERVICES } from '@/data/services';
import './CapesServicesWheel.css';

export function CapesServicesWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = PARENT_SERVICES[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    if (panelRef.current) {
      panelRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="capes-wheel grain" data-section-theme="dark">
      <div className="capes-wheel__inner container">
        <div className="capes-wheel__header">
          <span className="capes-wheel__label">What We Do</span>
          <h2 className="capes-wheel__title">Core Competencies</h2>
        </div>

        <div className="capes-wheel__layout">
          {/* Wheel */}
          <div className="capes-wheel__graphic">
            <svg viewBox="0 0 400 400" className="capes-wheel__svg">
              {PARENT_SERVICES.map((service, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const nextAngle = ((i + 1) * 60 - 90) * (Math.PI / 180);
                const r = 180;
                const innerR = 60;
                const isActive = i === activeIndex;

                const x1 = 200 + r * Math.cos(angle);
                const y1 = 200 + r * Math.sin(angle);
                const x2 = 200 + r * Math.cos(nextAngle);
                const y2 = 200 + r * Math.sin(nextAngle);
                const ix1 = 200 + innerR * Math.cos(nextAngle);
                const iy1 = 200 + innerR * Math.sin(nextAngle);
                const ix2 = 200 + innerR * Math.cos(angle);
                const iy2 = 200 + innerR * Math.sin(angle);

                const midAngle = ((i * 60 + 30) - 90) * (Math.PI / 180);
                const labelR = 130;
                const lx = 200 + labelR * Math.cos(midAngle);
                const ly = 200 + labelR * Math.sin(midAngle);

                return (
                  <g
                    key={service.id}
                    className={`capes-wheel__wedge ${isActive ? 'capes-wheel__wedge--active' : ''}`}
                    onClick={() => handleSelect(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelect(i)}
                    aria-label={service.title}
                  >
                    <path
                      d={`M ${ix2} ${iy2} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 0 0 ${ix2} ${iy2}`}
                      fill={isActive ? service.color : 'rgba(255,255,255,0.08)'}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="2"
                      style={{ transition: 'fill 0.3s ease', cursor: 'pointer' }}
                    />
                    <text
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="capes-wheel__wedge-label"
                      fill={isActive ? 'var(--white)' : 'rgba(255,255,255,0.4)'}
                      style={{ fontSize: '11px', fontWeight: 700, pointerEvents: 'none' }}
                    >
                      {service.number}
                    </text>
                  </g>
                );
              })}
              {/* Center circle */}
              <circle cx="200" cy="200" r="55" fill="var(--navy)" />
              <text
                x="200"
                y="195"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                style={{ fontSize: '12px', fontWeight: 900, fontFamily: "'Industry', sans-serif", letterSpacing: '0.1em' }}
              >
                MELT
              </text>
              <text
                x="200"
                y="212"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.6)"
                style={{ fontSize: '8px', fontWeight: 500, letterSpacing: '0.05em' }}
              >
                6 COMPETENCIES
              </text>
            </svg>

            {/* Service number tabs below wheel */}
            <div className="capes-wheel__tabs">
              {PARENT_SERVICES.map((service, i) => (
                <button
                  key={service.id}
                  className={`capes-wheel__tab ${i === activeIndex ? 'capes-wheel__tab--active' : ''}`}
                  onClick={() => handleSelect(i)}
                  style={i === activeIndex ? { borderColor: service.color } : undefined}
                >
                  {service.number}
                </button>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="capes-wheel__panel" ref={panelRef}>
            <div className="capes-wheel__panel-inner" key={active.id}>
              <span className="capes-wheel__panel-number" style={{ color: active.color }}>
                {active.number}
              </span>
              <h3 className="capes-wheel__panel-title">{active.title}</h3>
              <p className="capes-wheel__panel-problem">{active.problem}</p>
              <p className="capes-wheel__panel-desc">{active.description}</p>

              <div className="capes-wheel__panel-capabilities">
                <h4>Capabilities</h4>
                <ul>
                  {active.capabilities.map((cap) => (
                    <li key={cap}>
                      <Link href={`/work?tag=${encodeURIComponent(cap)}`}>{cap}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="capes-wheel__panel-proof">
                <h4>Proof Points</h4>
                <ul>
                  {active.proofPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <Link href={active.slug} className="capes-wheel__panel-cta">
                Explore {active.title.split('&')[0].trim()} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
