'use client';

import dynamic from 'next/dynamic';
import { useVersion } from '@/lib/version-context';

// Version A (Capes) — lazy loaded, only compiles when version=capes
const CapesLetterboxScroll = dynamic(() => import('@/components/capes/CapesLetterboxScroll'), { ssr: false });
const CapesServicesWheel = dynamic(() => import('@/components/capes/CapesServicesWheel').then(m => ({ default: m.CapesServicesWheel })), { ssr: false });
const CapesStats = dynamic(() => import('@/components/capes/CapesStats').then(m => ({ default: m.CapesStats })), { ssr: false });
const CapesFeaturedWork = dynamic(() => import('@/components/capes/CapesFeaturedWork').then(m => ({ default: m.CapesFeaturedWork })), { ssr: false });
const CapesWhyMelt = dynamic(() => import('@/components/capes/CapesWhyMelt').then(m => ({ default: m.CapesWhyMelt })), { ssr: false });
const CapesTestimonials = dynamic(() => import('@/components/capes/CapesTestimonials').then(m => ({ default: m.CapesTestimonials })), { ssr: false });
const CapesContactCTA = dynamic(() => import('@/components/capes/CapesContactCTA').then(m => ({ default: m.CapesContactCTA })), { ssr: false });

// Version B (Handcrafted) — lazy loaded, only compiles when version=handcrafted
const HandcraftedHero = dynamic(() => import('@/components/handcrafted/HandcraftedHero').then(m => ({ default: m.HandcraftedHero })), { ssr: false });
const HCStatsBar = dynamic(() => import('@/components/handcrafted/HCStatsBar').then(m => ({ default: m.HCStatsBar })), { ssr: false });
const HCIntroduction = dynamic(() => import('@/components/handcrafted/HCIntroduction').then(m => ({ default: m.HCIntroduction })), { ssr: false });
const HCWorkSlider = dynamic(() => import('@/components/handcrafted/HCWorkSlider').then(m => ({ default: m.HCWorkSlider })), { ssr: false });
const HCAboutInterlude = dynamic(() => import('@/components/handcrafted/HCAboutInterlude').then(m => ({ default: m.HCAboutInterlude })), { ssr: false });
const HCWorkGrid = dynamic(() => import('@/components/handcrafted/HCWorkGrid').then(m => ({ default: m.HCWorkGrid })), { ssr: false });
const HCMission = dynamic(() => import('@/components/handcrafted/HCMission').then(m => ({ default: m.HCMission })), { ssr: false });
const HCTeamRoster = dynamic(() => import('@/components/handcrafted/HCTeamRoster').then(m => ({ default: m.HCTeamRoster })), { ssr: false });

function CapesHome() {
  return (
    <>
      <CapesLetterboxScroll />
      <CapesServicesWheel />
      <CapesStats />
      <CapesFeaturedWork />
      <CapesWhyMelt />
      <CapesTestimonials />
      <CapesContactCTA />
    </>
  );
}

function HandcraftedHome() {
  return (
    <>
      <HandcraftedHero />
      <HCStatsBar />
      <HCIntroduction />
      <HCWorkSlider />
      <HCAboutInterlude />
      <HCWorkGrid />
      <HCMission />
      <HCTeamRoster />
    </>
  );
}

export default function Home() {
  const { version } = useVersion();
  return version === 'handcrafted' ? <HandcraftedHome /> : <CapesHome />;
}
