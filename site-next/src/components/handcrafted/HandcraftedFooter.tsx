'use client';

import Link from 'next/link';
import './HandcraftedFooter.css';

export function HandcraftedFooter() {
  return (
    <footer className="hc-footer">
      <div className="hc-footer__inner">
        <span className="hc-footer__logo">MELT</span>
        <nav className="hc-footer__nav" aria-label="Footer navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <p className="hc-footer__copyright">&copy; {new Date().getFullYear()} MELT Atlanta</p>
      </div>
    </footer>
  );
}
