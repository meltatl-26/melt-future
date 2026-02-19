'use client';

import './MeltLogo.css';

interface MeltLogoProps {
  variant?: 'default' | 'white' | 'icon';
  className?: string;
}

export default function MeltLogo({
  variant = 'default',
  className = '',
}: MeltLogoProps) {
  const logoClass = `melt-logo melt-logo--${variant} ${className}`;

  if (variant === 'icon') {
    return (
      <img
        src="/images/logo/melt-icon2.png"
        alt="MELT"
        className={logoClass}
        width="40"
        height="40"
      />
    );
  }

  return (
    <div className={logoClass}>
      <span className="melt-logo__text">MELT</span>
    </div>
  );
}
