'use client';

import Link from 'next/link';
import { VersionToggle } from '@/components/shared/VersionToggle';

export function CapesHeader() {
  return (
    <header className="capes-header">
      <div className="capes-header__inner">
        <Link href="/" className="capes-header__logo">
          MELT
        </Link>
        <nav className="capes-header__nav" aria-label="Main navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/scope-your-project">Scope Your Project</Link>
        </nav>
        <VersionToggle />
      </div>
    </header>
  );
}
