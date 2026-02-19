'use client';

import TransitionLink from '@/components/shared/TransitionLink';
import MeltLogo from '@/components/shared/MeltLogo';
import { PARENT_SERVICES } from '@/data/services';
import './CapesFooter.css';

export function CapesFooter() {
  return (
    <footer className="footer section-dark grain" data-section-theme="dark">
      {/* CTA Section */}
      <div className="footer__cta container">
        <h2>Let&apos;s talk about what you need built.</h2>
        <TransitionLink to="/contact" className="btn btn-primary">
          Start a Project
        </TransitionLink>
      </div>

      {/* 4-Column Grid */}
      <div className="footer__grid container">
        {/* Col 1: Brand */}
        <div className="footer__col">
          <MeltLogo variant="white" />
          <span className="footer__detail">Atlanta, GA</span>
          <span className="footer__detail">Est. 2000</span>
        </div>

        {/* Col 2: Company */}
        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          <TransitionLink to="/work" className="footer__link">
            Work
          </TransitionLink>
          <TransitionLink to="/about" className="footer__link">
            About
          </TransitionLink>
          <TransitionLink to="/contact" className="footer__link">
            Contact
          </TransitionLink>
          <TransitionLink to="/industry-insights" className="footer__link">
            Industry Insights
          </TransitionLink>
        </div>

        {/* Col 3: Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Services</h4>
          {PARENT_SERVICES.map((service) => (
            <TransitionLink
              key={service.id}
              to={service.slug}
              className="footer__link"
            >
              {service.title}
            </TransitionLink>
          ))}
        </div>

        {/* Col 4: Connect */}
        <div className="footer__col">
          <h4 className="footer__col-title">Connect</h4>
          <a
            href="https://instagram.com/meltatl"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/company/melt"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <a href="tel:+14045551234" className="footer__link">
            +1 (404) 555-1234
          </a>
          <a href="mailto:hello@meltatl.com" className="footer__link">
            hello@meltatl.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom container">
        <span>&copy; {new Date().getFullYear()} MELT</span>
        <TransitionLink to="/privacy" className="footer__link">
          Privacy Policy
        </TransitionLink>
      </div>
    </footer>
  );
}
