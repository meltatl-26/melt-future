'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useVersion } from '@/lib/version-context';
import { useLenisSetup, LenisContext } from '@/hooks/useLenis';
import { TransitionProvider } from '@/hooks/useTransition';
import { CapesHeader } from '@/components/capes/CapesHeader';
import { CapesFooter } from '@/components/capes/CapesFooter';
import { HandcraftedHeader } from '@/components/handcrafted/HandcraftedHeader';
import { HandcraftedFooter } from '@/components/handcrafted/HandcraftedFooter';
import ScrollProgress from '@/components/shared/ScrollProgress';
import BackToTop from '@/components/shared/BackToTop';
import CustomCursor from '@/components/shared/CustomCursor';
import Preloader from '@/components/shared/Preloader';
import PageTransition from '@/components/shared/PageTransition';

export function VersionLayout({ children }: { children: React.ReactNode }) {
  const { version } = useVersion();
  const lenis = useLenisSetup();
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  // Page enter animation on route change
  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [pathname]);

  if (version === 'handcrafted') {
    return (
      <LenisContext.Provider value={lenis}>
        <TransitionProvider>
          <a href="#main-content" className="skip-to-content">Skip to content</a>
          <CustomCursor />
          <HandcraftedHeader />
          <main id="main-content">
            <div ref={contentRef}>
              {children}
            </div>
          </main>
          <HandcraftedFooter />
          <BackToTop />
        </TransitionProvider>
      </LenisContext.Provider>
    );
  }

  return (
    <LenisContext.Provider value={lenis}>
      <TransitionProvider>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <PageTransition />
        <CapesHeader />
        <main id="main-content">
          <div ref={contentRef}>
            {children}
          </div>
        </main>
        <CapesFooter />
        <BackToTop />
      </TransitionProvider>
    </LenisContext.Provider>
  );
}
