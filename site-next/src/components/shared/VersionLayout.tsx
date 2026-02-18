'use client';

import { useVersion } from '@/lib/version-context';
import { CapesHeader } from '@/components/capes/CapesHeader';
import { CapesFooter } from '@/components/capes/CapesFooter';
import { HandcraftedHeader } from '@/components/handcrafted/HandcraftedHeader';
import { HandcraftedFooter } from '@/components/handcrafted/HandcraftedFooter';

export function VersionLayout({ children }: { children: React.ReactNode }) {
  const { version } = useVersion();

  if (version === 'handcrafted') {
    return (
      <>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <HandcraftedHeader />
        <main id="main-content">{children}</main>
        <HandcraftedFooter />
      </>
    );
  }

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <CapesHeader />
      <main id="main-content">{children}</main>
      <CapesFooter />
    </>
  );
}
