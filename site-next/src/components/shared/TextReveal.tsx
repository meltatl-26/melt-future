'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  [key: string]: unknown;
}

export default function TextReveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  ...props
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    const split = new SplitType(ref.current, { types: 'lines' });

    if (split.lines) {
      split.lines.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(split.lines, {
        yPercent: 110,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      });
    }

    return () => {
      split.revert();
    };
  }, [prefersReduced, delay]);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
