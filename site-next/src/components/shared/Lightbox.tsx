'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import './Lightbox.css';

interface LightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, activeIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(activeIndex);
  const [zoomed, setZoomed] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const deltaX = useRef(0);

  useEffect(() => {
    setCurrent(activeIndex);
    setZoomed(false);
  }, [activeIndex]);

  const goPrev = useCallback(() => {
    setZoomed(false);
    setCurrent((c) => (c > 0 ? c - 1 : images.length - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setZoomed(false);
    setCurrent((c) => (c < images.length - 1 ? c + 1 : 0));
  }, [images.length]);

  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef(typeof document !== 'undefined' ? document.activeElement as HTMLElement : null);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Tab') {
        const focusable = backdropRef.current?.querySelectorAll('button');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    };
  }, [onClose, goPrev, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    if (deltaX.current > 60) goPrev();
    else if (deltaX.current < -60) goNext();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="lightbox"
      ref={backdropRef}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button ref={closeRef} className="lightbox__close" onClick={onClose} aria-label="Close lightbox">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </>
      )}

      <div className={`lightbox__image${zoomed ? ' lightbox__image--zoomed' : ''}`}>
        <img
          src={images[current]}
          alt={`Gallery image ${current + 1} of ${images.length}`}
          onClick={() => setZoomed(!zoomed)}
          draggable={false}
        />
      </div>

      {images.length > 1 && (
        <div className="lightbox__counter">
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
