'use client';

import { useState } from 'react';

const STORAGE_KEY = 'melt-visited';

export function useFirstVisit() {
  const [isFirstVisit] = useState<boolean>(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const markVisited = (): void => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // localStorage unavailable (SSR, private browsing, etc.)
    }
  };

  return { isFirstVisit, markVisited };
}
