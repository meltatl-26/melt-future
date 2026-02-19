'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface CharacterRevealOptions {
  triggerStart?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
}

interface WordRevealOptions {
  triggerStart?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
}

interface LineRevealOptions {
  triggerStart?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
}

export function useCharacterReveal(options: CharacterRevealOptions = {}) {
  const {
    triggerStart = 'top 80%',
    stagger = 0.03,
    duration = 0.6,
    ease = 'power3.out',
    from = { opacity: 0, y: 20, rotationX: -90, transformOrigin: '0% 50% -50' },
  } = options;

  const ref = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    splitRef.current = new SplitType(ref.current, { types: 'chars', tagName: 'span' });
    const chars = splitRef.current.chars;
    if (!chars) return;

    gsap.set(chars, from);
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerStart,
        once: true,
      },
    });

    return () => {
      if (splitRef.current) splitRef.current.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [triggerStart, stagger, duration, ease]);

  return ref;
}

export function useWordReveal(options: WordRevealOptions = {}) {
  const {
    triggerStart = 'top 80%',
    stagger = 0.08,
    duration = 0.8,
    ease = 'power3.out',
    from = { opacity: 0, y: 30, scale: 0.9 },
  } = options;

  const ref = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    splitRef.current = new SplitType(ref.current, { types: 'words', tagName: 'span' });
    const words = splitRef.current.words;
    if (!words) return;

    gsap.set(words, from);
    gsap.to(words, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerStart,
        once: true,
      },
    });

    return () => {
      if (splitRef.current) splitRef.current.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [triggerStart, stagger, duration, ease]);

  return ref;
}

export function useLineReveal(options: LineRevealOptions = {}) {
  const {
    triggerStart = 'top 80%',
    stagger = 0.1,
    duration = 1,
    ease = 'power4.out',
  } = options;

  const ref = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    splitRef.current = new SplitType(ref.current, { types: 'lines', tagName: 'div' });
    const lines = splitRef.current.lines;
    if (!lines) return;

    lines.forEach((line) => {
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.set(lines, { yPercent: 100 });
    gsap.to(lines, {
      yPercent: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerStart,
        once: true,
      },
    });

    return () => {
      if (splitRef.current) splitRef.current.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [triggerStart, stagger, duration, ease]);

  return ref;
}
