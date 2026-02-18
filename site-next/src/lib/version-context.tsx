'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
export type SiteVersion = 'capes' | 'handcrafted';

interface VersionContextType {
  version: SiteVersion;
  setVersion: (v: SiteVersion) => void;
  toggleVersion: () => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

const STORAGE_KEY = 'melt-site-version';

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersionState] = useState<SiteVersion>('capes');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as SiteVersion | null;
    if (stored === 'capes' || stored === 'handcrafted') {
      setVersionState(stored);
    }
    setMounted(true);
  }, []);

  const setVersion = useCallback((v: SiteVersion) => {
    setVersionState(v);
    localStorage.setItem(STORAGE_KEY, v);
  }, []);

  const toggleVersion = useCallback(() => {
    setVersion(version === 'capes' ? 'handcrafted' : 'capes');
  }, [version, setVersion]);

  // Prevent flash of wrong version on hydration
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <VersionContext.Provider value={{ version, setVersion, toggleVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

// Default fallback for SSR/static prerendering (no provider available)
const defaultContext: VersionContextType = {
  version: 'capes',
  setVersion: () => {},
  toggleVersion: () => {},
};

export function useVersion() {
  const context = useContext(VersionContext);
  // Return default during SSR prerendering; on client, VersionProvider will be present
  return context ?? defaultContext;
}
