'use client';

import { useVersion } from '@/lib/version-context';
import { CapesHero } from '@/components/capes/CapesHero';
import { CapesServicesWheel } from '@/components/capes/CapesServicesWheel';
import { CapesStats } from '@/components/capes/CapesStats';
import { CapesFeaturedWork } from '@/components/capes/CapesFeaturedWork';
import { CapesWhyMelt } from '@/components/capes/CapesWhyMelt';
import { CapesAwards } from '@/components/capes/CapesAwards';
import { CapesClientLogos } from '@/components/capes/CapesClientLogos';
import { CapesTestimonials } from '@/components/capes/CapesTestimonials';
import { CapesContactCTA } from '@/components/capes/CapesContactCTA';

function CapesHome() {
  return (
    <>
      <CapesHero />
      <CapesServicesWheel />
      <CapesStats />
      <CapesFeaturedWork />
      <CapesWhyMelt />
      <CapesAwards />
      <CapesClientLogos />
      <CapesTestimonials />
      <CapesContactCTA />
    </>
  );
}

import { HandcraftedHero } from '@/components/handcrafted/HandcraftedHero';

function HandcraftedHome() {
  return <HandcraftedHero />;
}

export default function Home() {
  const { version } = useVersion();
  return version === 'handcrafted' ? <HandcraftedHome /> : <CapesHome />;
}
