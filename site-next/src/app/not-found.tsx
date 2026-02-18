'use client';

import Link from 'next/link';
import { useVersion } from '@/lib/version-context';

function Capes404() {
  return (
    <div
      className="container"
      style={{
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: "'Industry', sans-serif",
          fontSize: 'clamp(6rem, 15vw, 12rem)',
          fontWeight: 900,
          color: 'var(--color-gray-200)',
          lineHeight: 1,
          marginBottom: 'var(--space-md)',
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: 'var(--space-sm)' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-xl)', maxWidth: '400px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '14px 32px',
          background: 'var(--color-royal-blue)',
          color: 'var(--color-white)',
          borderRadius: 'var(--radius-sm)',
          fontFamily: "'Industry', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

function Handcrafted404() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-black)',
        color: 'var(--color-white)',
        textAlign: 'center',
        padding: 'var(--space-4xl) var(--grid-gutter)',
      }}
    >
      <h1
        style={{
          fontFamily: "'Industry', sans-serif",
          fontSize: 'clamp(6rem, 20vw, 16rem)',
          fontWeight: 900,
          color: 'rgba(255, 255, 255, 0.08)',
          lineHeight: 1,
          marginBottom: 'var(--space-md)',
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontFamily: "'Industry', sans-serif",
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(255, 255, 255, 0.5)',
          marginBottom: 'var(--space-xl)',
        }}
      >
        Nothing Here
      </h2>
      <Link
        href="/"
        style={{
          fontFamily: "'Industry', sans-serif",
          fontSize: '13px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'rgba(255, 255, 255, 0.5)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          paddingBottom: '2px',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default function NotFound() {
  const { version } = useVersion();
  return version === 'handcrafted' ? <Handcrafted404 /> : <Capes404 />;
}
