'use client';

import { useVersion, type SiteVersion } from '@/lib/version-context';

export function VersionToggle() {
  const { version, toggleVersion } = useVersion();

  return (
    <button
      onClick={toggleVersion}
      className="version-toggle"
      aria-label={`Switch to ${version === 'capes' ? 'Handcrafted' : 'Capes'} version`}
      title={`Currently viewing: ${version === 'capes' ? 'Capes' : 'Handcrafted'}`}
    >
      <span className={`version-toggle__option ${version === 'capes' ? 'version-toggle__option--active' : ''}`}>
        A
      </span>
      <span className={`version-toggle__option ${version === 'handcrafted' ? 'version-toggle__option--active' : ''}`}>
        B
      </span>
    </button>
  );
}
