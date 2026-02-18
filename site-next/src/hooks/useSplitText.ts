'use client';

import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

export function useSplitText(options: Partial<{ types: 'lines' | 'words' | 'chars' | 'lines, words' | 'lines, chars' | 'words, chars' | 'lines, words, chars' }> = { types: 'lines' }) {
  const ref = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    splitRef.current = new SplitType(ref.current, options as Record<string, unknown>);

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, split: splitRef };
}
