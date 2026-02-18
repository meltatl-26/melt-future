'use client';

import Link from 'next/link';

export function CapesFooter() {
  return (
    <footer className="capes-footer">
      <div className="capes-footer__inner">
        <div className="capes-footer__brand">
          <span className="capes-footer__logo">MELT</span>
          <p>Atlanta&apos;s experiential marketing agency since 1998.</p>
        </div>
        <nav className="capes-footer__nav" aria-label="Footer navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <p className="capes-footer__copyright">&copy; {new Date().getFullYear()} MELT Atlanta. All rights reserved.</p>
      </div>
    </footer>
  );
}
