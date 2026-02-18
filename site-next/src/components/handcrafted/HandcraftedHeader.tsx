'use client';

import Link from 'next/link';
import { VersionToggle } from '@/components/shared/VersionToggle';

export function HandcraftedHeader() {
  return (
    <header className="hc-header">
      <div className="hc-header__inner">
        <nav className="hc-header__nav hc-header__nav--left" aria-label="Main navigation">
          <Link href="/work">Work</Link>
          <Link href="/services/experiential">Services</Link>
        </nav>
        <Link href="/" className="hc-header__logo">
          MELT
        </Link>
        <nav className="hc-header__nav hc-header__nav--right" aria-label="Secondary navigation">
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <VersionToggle />
      </div>
    </header>
  );
}
