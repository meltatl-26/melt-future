'use client';

import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageRevealOptions {
  selector?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
}

interface ElementRevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
}

export function usePageReveal(
  ref: RefObject<HTMLElement | null>,
  options: PageRevealOptions = {}
) {
  const {
    selector = '.reveal',
    delay = 0.2,
    duration = 0.8,
    stagger = 0.1,
    y = 40,
  } = options;

  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    const elements = ref.current.querySelectorAll(selector);
    if (!elements.length) return;

    gsap.from(elements, {
      opacity: 0,
      y,
      duration,
      stagger,
      delay,
      ease: 'power2.out',
      clearProps: 'all',
    });
  }, [ref, selector, delay, duration, stagger, y, prefersReduced]);
}

export function useElementReveal(
  ref: RefObject<HTMLElement | null>,
  options: ElementRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    y = 40,
    x = 0,
    scale = 1,
  } = options;

  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y,
      x,
      scale,
      duration,
      delay,
      ease: 'power2.out',
      clearProps: 'all',
    });
  }, [ref, delay, duration, y, x, scale, prefersReduced]);
}
