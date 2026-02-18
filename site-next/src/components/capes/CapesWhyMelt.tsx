'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './CapesWhyMelt.css';

const FAQ_ITEMS = [
  {
    question: 'Why not just hire a bigger agency?',
    answer:
      "Because bigger doesn't mean better at execution. We're a 7-person team with zero layers between strategy and delivery. When you hire MELT, you get the people who actually build and manage your activation — not junior hand-offs three levels down.",
  },
  {
    question: 'What makes experiential marketing different from digital?',
    answer:
      'Digital reaches screens. Experiential reaches people. A live brand experience creates emotional connections that no ad can replicate — and our campaigns prove it with 500-3,600% ROI consistently.',
  },
  {
    question: 'Can you handle multi-city tours?',
    answer:
      "We've been doing them for 22 years. From the Ghirardelli S'mores Tour across 8 cities to Bath & Body Works' 16-city basketball tour, we handle every permit, every build, every city — with consistent brand quality at every stop.",
  },
  {
    question: 'What about measurement and ROI?',
    answer:
      "Every campaign we run has built-in measurement: impressions, EMV, brand lift, conversion rates, sales impact. We don't just execute — we prove it worked. Ask us about our 93.1% brand consideration lift for Ghirardelli.",
  },
  {
    question: 'How fast can you move?',
    answer:
      "We took the City of Mobile's $300M arena from concept to OVG contract in 90 days. Speed is our default, not our exception. When your timeline is 'yesterday,' we're the agency that actually delivers.",
  },
];

export function CapesWhyMelt() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="capes-why">
      <div className="capes-why__inner container">
        <div className="capes-why__header">
          <span className="capes-why__label">Common Questions</span>
          <h2 className="capes-why__title">Why MELT?</h2>
        </div>

        <div className="capes-why__list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `capes-why-content-${index}`;
            const buttonId = `capes-why-button-${index}`;

            return (
              <div
                key={index}
                className={`capes-why__item ${isOpen ? 'capes-why__item--open' : ''}`}
              >
                <button
                  id={buttonId}
                  className="capes-why__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="capes-why__question-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="capes-why__question-text">{item.question}</span>
                  <ChevronDown
                    className={`capes-why__chevron ${isOpen ? 'capes-why__chevron--open' : ''}`}
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={contentId}
                  className="capes-why__answer"
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
