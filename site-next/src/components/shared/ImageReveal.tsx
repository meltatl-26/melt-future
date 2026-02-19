'use client';

import { useRef, useEffect, type CSSProperties } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

export default function ImageReveal({
  src,
  alt,
  className = '',
  style = {},
}: ImageRevealProps) {
  const ref = useRef<HTMLImageElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    gsap.set(ref.current, {
      clipPath: 'inset(100% 0 0 0)',
      scale: 1.15,
    });

    gsap.to(ref.current, {
      clipPath: 'inset(0 0 0 0)',
      scale: 1,
      duration: 1,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, [prefersReduced]);

  return (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: 'var(--radius-md)',
        ...style,
      }}
    >
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}
