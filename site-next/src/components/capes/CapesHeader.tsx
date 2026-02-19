'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { VersionToggle } from '@/components/shared/VersionToggle';
import MeltLogo from '@/components/shared/MeltLogo';
import TransitionLink from '@/components/shared/TransitionLink';
import { PARENT_SERVICES } from '@/data/services';
import './CapesHeader.css';

const NAV_LINKS = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '#services', dropdown: true },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Insights', to: '/insights' },
];

export function CapesHeader() {
  const [theme, setTheme] = useState<'transparent' | 'solid' | 'inverted'>('transparent');
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // IntersectionObserver for section theme detection
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-theme]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionTheme = entry.target.getAttribute('data-section-theme');
            const scrollY = window.scrollY;
            if (scrollY < 100 && sectionTheme === 'dark') {
              setTheme('transparent');
            } else if (sectionTheme === 'dark') {
              setTheme('inverted');
            } else {
              setTheme('solid');
            }
          }
        }
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Scroll-based fallback for theme at top of page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setTheme('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header header--${theme}`}
      data-menu-open={menuOpen}
    >
      <div className="header__inner">
        {/* Logo — left */}
        <Link href="/" className="header__logo" aria-label="MELT Home">
          <MeltLogo variant="white" />
        </Link>

        {/* Nav — centered */}
        <nav className="header__nav hide-mobile" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="header__nav-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="nav-link header__nav-link"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className="header__dropdown-arrow"
                    aria-hidden="true"
                  >
                    <path d="M6 8L2 4h8z" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="header__dropdown-menu" role="menu">
                    {PARENT_SERVICES.map((service) => (
                      <TransitionLink
                        key={service.id}
                        to={service.slug}
                        className="header__dropdown-item"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span
                          className="header__dropdown-number"
                          style={{ color: service.color }}
                        >
                          {service.number}
                        </span>
                        <span>{service.title}</span>
                      </TransitionLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <TransitionLink
                key={link.to}
                to={link.to}
                className={`nav-link header__nav-link ${pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </TransitionLink>
            )
          )}
        </nav>

        {/* Actions — right */}
        <div className="header__actions hide-mobile">
          <a
            href="https://instagram.com/meltatl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="header__social"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/melt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="header__social"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <TransitionLink to="/contact" className="btn btn-primary header__cta">
            Start a Project
          </TransitionLink>
        </div>

        {/* Version Toggle — absolute far right */}
        <VersionToggle />

        {/* Hamburger — mobile only */}
        <button
          className="header__hamburger hide-desktop"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="header__hamburger-line" />
          <span className="header__hamburger-line" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <nav className="mobile-menu__nav">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="mobile-menu__section">
                  <span className="mobile-menu__section-title">
                    {link.label}
                  </span>
                  <div className="mobile-menu__submenu">
                    {PARENT_SERVICES.map((service) => (
                      <TransitionLink
                        key={service.id}
                        to={service.slug}
                        className="mobile-menu__sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span
                          className="mobile-menu__service-number"
                          style={{ color: service.color }}
                        >
                          {service.number}
                        </span>
                        {service.title}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              ) : (
                <TransitionLink
                  key={link.to}
                  to={link.to}
                  className="mobile-menu__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </TransitionLink>
              )
            )}
            <TransitionLink
              to="/contact"
              className="btn btn-primary mobile-menu__cta"
              onClick={() => setMenuOpen(false)}
            >
              Start a Project
            </TransitionLink>
          </nav>
          <div className="mobile-menu__social">
            <a
              href="https://instagram.com/meltatl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/melt"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
