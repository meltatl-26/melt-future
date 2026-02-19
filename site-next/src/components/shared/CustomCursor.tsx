'use client';

import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    if (!dot) return;

    let currentTarget: { x: number; y: number; dist: number } | null = null;
    const MAGNETIC_RADIUS = 60;
    const MAGNETIC_STRENGTH = 0.4;

    const handleMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      const magneticElements = document.querySelectorAll(
        '.btn, .cs-tag, .work-page__filter-btn, .core-competencies-wheel__wedge'
      );

      currentTarget = null;
      let closestDist = MAGNETIC_RADIUS;

      magneticElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < closestDist) {
          closestDist = dist;
          currentTarget = { x: centerX, y: centerY, dist };
        }
      });
    };

    const animate = () => {
      let targetX = targetRef.current.x;
      let targetY = targetRef.current.y;

      if (currentTarget) {
        const pullFactor = 1 - currentTarget.dist / MAGNETIC_RADIUS;
        const pullX =
          (currentTarget.x - targetX) * pullFactor * MAGNETIC_STRENGTH;
        const pullY =
          (currentTarget.y - targetY) * pullFactor * MAGNETIC_STRENGTH;
        targetX += pullX;
        targetY += pullY;
      }

      posRef.current.x += (targetX - posRef.current.x) * 0.15;
      posRef.current.y += (targetY - posRef.current.y) * 0.15;

      dot.style.transform = `translate(${posRef.current.x - 6}px, ${posRef.current.y - 6}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;
      if (
        target.closest(
          'a, button, [role="button"], input, textarea, .cursor-hover'
        )
      ) {
        dot.classList.add('cursor--hover');
      }
    };

    const handleOut = () => {
      dot.classList.remove('cursor--hover');
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (isTouch) return null;

  return <div ref={dotRef} className="custom-cursor" />;
}
