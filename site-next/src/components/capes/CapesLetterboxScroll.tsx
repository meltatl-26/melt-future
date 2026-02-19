'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import clients from '@/data/clients';
import './CapesLetterboxScroll.css';

gsap.registerPlugin(ScrollTrigger);

const MESSAGES = [
  { text: 'There are no great ideas without ', highlight: 'great execution', after: '.' },
  { text: 'Melt has built its reputation on ', highlight: 'big events', after: ' that bring people together.' },
  { text: 'Our experiences connect ', highlight: 'people, brands, and communities', after: '.' },
];

export default function CapesLetterboxScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const logosTrackRef = useRef<HTMLDivElement>(null);

  // Logo marquee animation
  useEffect(() => {
    if (!logosTrackRef.current) return;
    const tween = gsap.to(logosTrackRef.current, {
      xPercent: -50,
      duration: 25,
      ease: 'linear',
      repeat: -1,
    });
    const track = logosTrackRef.current;
    const onEnter = () => tween.pause();
    const onLeave = () => tween.resume();
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);
    return () => {
      tween.kill();
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const messageEls = section.querySelectorAll<HTMLElement>('.letterbox-scroll__message');
    if (messageEls.length < 3) return;

    // Split each message into characters
    const splits = Array.from(messageEls).map(
      (el) => new SplitType(el, { types: 'chars' })
    );

    // Set initial states
    // Message 0: visible
    gsap.set(messageEls[0], { yPercent: 0 });
    if (splits[0].chars) gsap.set(splits[0].chars, { opacity: 1, y: 0 });

    // Messages 1-2: hidden below
    gsap.set(messageEls[1], { yPercent: 100 });
    if (splits[1].chars) gsap.set(splits[1].chars, { opacity: 0 });
    gsap.set(messageEls[2], { yPercent: 100 });
    if (splits[2].chars) gsap.set(splits[2].chars, { opacity: 0 });

    // Build the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
      },
    });

    // Message 1 chars fade out
    if (splits[0].chars) {
      tl.to(splits[0].chars, {
        opacity: 0,
        y: -20,
        stagger: 0.01,
        ease: 'power3.in',
      });
    }

    // Message 2 slides in
    tl.to(messageEls[1], {
      yPercent: 0,
      ease: 'power4.out',
    });

    // Message 2 chars fade in
    if (splits[1].chars) {
      tl.to(splits[1].chars, {
        opacity: 1,
        y: 0,
        stagger: 0.015,
        ease: 'power3.out',
      });
    }

    // Message 2 chars fade out
    if (splits[1].chars) {
      tl.to(splits[1].chars, {
        opacity: 0,
        y: -20,
        stagger: 0.01,
        ease: 'power3.in',
      });
    }

    // Message 3 slides in
    tl.to(messageEls[2], {
      yPercent: 0,
      ease: 'power4.out',
    });

    // Message 3 chars fade in
    if (splits[2].chars) {
      tl.to(splits[2].chars, {
        opacity: 1,
        y: 0,
        stagger: 0.015,
        ease: 'power3.out',
      });
    }

    // Cleanup
    return () => {
      splits.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="letterbox-scroll" ref={sectionRef} data-section-theme="dark">
      <div className="letterbox-scroll__bands">
        <div className="letterbox-scroll__band letterbox-scroll__band--top" />
        <div className="letterbox-scroll__band letterbox-scroll__band--bottom" />
      </div>
      <div className="letterbox-scroll__content">
        {MESSAGES.map((message, index) => (
          <h1 key={index} className="letterbox-scroll__message hero-display">
            &ldquo;{message.text}
            <span className="highlight">{message.highlight}</span>
            {message.after}&rdquo;
          </h1>
        ))}
      </div>
      <div className="letterbox-scroll__logos-bar">
        <div ref={logosTrackRef} className="letterbox-scroll__logos-track">
          {[...clients, ...clients].map((client, i) => (
            <img
              key={`${client.name}-${i}`}
              src={client.logo}
              alt={client.name}
              className="letterbox-scroll__logo"
              loading="lazy"
              onError={(e) => {
                if (client.fallback)
                  (e.target as HTMLImageElement).src = client.fallback;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
