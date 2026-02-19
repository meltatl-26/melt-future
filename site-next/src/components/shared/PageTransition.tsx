'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTransitionContext } from '@/hooks/useTransition';
import './PageTransition.css';

export default function PageTransition() {
  const ctx = useTransitionContext();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef<boolean>(false);

  const isTransitioning = ctx?.isTransitioning ?? false;
  const onMidpoint = ctx?.onMidpoint;
  const onComplete = ctx?.onComplete;

  useEffect(() => {
    if (!isTransitioning || isAnimatingRef.current || !overlayRef.current || !onMidpoint || !onComplete)
      return;

    isAnimatingRef.current = true;
    const overlay = overlayRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        onComplete();
      },
    });

    tl.fromTo(
      overlay,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 0.45,
        ease: 'power3.inOut',
        onComplete: onMidpoint,
      }
    );

    tl.to(overlay, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.45,
      ease: 'power3.inOut',
      delay: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, [isTransitioning, onMidpoint, onComplete]);

  return (
    <div ref={overlayRef} className="page-transition" aria-hidden="true">
      <div className="page-transition__inner" />
    </div>
  );
}
