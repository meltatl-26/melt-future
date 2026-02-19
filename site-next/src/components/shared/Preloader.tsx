'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFirstVisit } from '@/hooks/useFirstVisit';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './Preloader.css';

export default function Preloader() {
  const { isFirstVisit, markVisited } = useFirstVisit();
  const [visible, setVisible] = useState(isFirstVisit);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!visible || !preloaderRef.current) return;

    if (prefersReduced) {
      markVisited();
      setVisible(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        markVisited();
        setVisible(false);
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    tl.to({}, { duration: 0.8 });

    tl.to(preloaderRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.6,
      ease: 'power3.inOut',
    });
  }, [visible, prefersReduced, markVisited]);

  if (!visible) return null;

  return (
    <div ref={preloaderRef} className="preloader" aria-hidden="true">
      <div ref={textRef} className="preloader__content">
        <span className="preloader__logo">MELT</span>
      </div>
    </div>
  );
}
