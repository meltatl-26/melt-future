'use client';

import { useState } from 'react';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import './AccordionItem.css';

interface AccordionItemProps {
  icon: LucideIcon;
  title: string;
  body: string;
}

export default function AccordionItem({ icon: Icon, title, body }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `accordion-content-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const buttonId = `accordion-button-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button
        id={buttonId}
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="accordion-icon" aria-hidden="true">
          <Icon size={28} strokeWidth={2} />
        </span>
        <h3 className="accordion-title">{title}</h3>
        <ChevronDown
          className={`accordion-arrow ${isOpen ? 'rotated' : ''}`}
          size={20}
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        className="accordion-body"
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{body}</p>
      </div>
    </div>
  );
}
