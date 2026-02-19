'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import clients from '@/data/clients';
import './CapesClientLogos.css';

export function CapesClientLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Double the clients array for seamless loop
  const allClients = [...clients, ...clients];

  useEffect(() => {
    if (prefersReduced || !trackRef.current) return;

    const track = trackRef.current;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });

    const handleHover = () => tween.pause();
    const handleLeave = () => tween.play();

    track.addEventListener('mouseenter', handleHover);
    track.addEventListener('mouseleave', handleLeave);

    return () => {
      tween.kill();
      track.removeEventListener('mouseenter', handleHover);
      track.removeEventListener('mouseleave', handleLeave);
    };
  }, [prefersReduced]);

  return (
    <section className="logos" data-section-theme="light" aria-label="Our clients">
      <span className="logos__eyebrow">Trusted by leading brands</span>
      <div className="logos__track-wrapper">
        <div className="logos__track" ref={trackRef}>
          {allClients.map((client, i) => (
            <img
              key={`${client.slug}-${i}`}
              className="logos__item"
              src={client.logo}
              alt={client.name}
              loading="lazy"
              onError={(e) => {
                if (client.fallback) {
                  (e.currentTarget as HTMLImageElement).src = client.fallback;
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
