'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLenis } from '@/hooks/useLenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './BackToTop.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 800;

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);

        if (buttonRef.current) {
          gsap.to(buttonRef.current, {
            scale: shouldShow ? 1 : 0,
            opacity: shouldShow ? 1 : 0,
            duration: 0.4,
            ease: 'back.out(2)',
          });
        }
      }

      if (!prefersReduced && buttonRef.current && shouldShow) {
        const rotation = Math.min(scrollY / 10, 360);
        buttonRef.current.style.transform = `rotate(${rotation}deg) scale(1)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, prefersReduced]);

  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (!prefersReduced && buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8 },
        { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.3)' }
      );
    }
  };

  return (
    <button
      ref={buttonRef}
      className="back-to-top"
      onClick={handleClick}
      aria-label="Back to top"
      style={{ opacity: 0, transform: 'scale(0)' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
