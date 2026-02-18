'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// Flip can be imported separately when needed:
// import { Flip } from 'gsap/Flip';

export function useGsap(callback: () => void, deps: React.DependencyList = []) {
  useEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
