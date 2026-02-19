'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

interface TransitionContextValue {
  isTransitioning: boolean;
  transitionProgress: number;
  setTransitionProgress: (progress: number) => void;
  startTransition: (targetPath: string) => void;
  onMidpoint: () => void;
  onComplete: () => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function useTransitionContext(): TransitionContextValue | null {
  return useContext(TransitionContext);
}

interface TransitionProviderProps {
  children: ReactNode;
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const navigateRef = useRef<string | null>(null);
  const router = useRouter();

  const startTransition = useCallback(
    (targetPath: string) => {
      if (isTransitioning) return;
      navigateRef.current = targetPath;
      setIsTransitioning(true);
    },
    [isTransitioning]
  );

  const onMidpoint = useCallback(() => {
    if (navigateRef.current) {
      router.push(navigateRef.current);
    }
  }, [router]);

  const onComplete = useCallback(() => {
    setIsTransitioning(false);
    setTransitionProgress(0);
    navigateRef.current = null;
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        transitionProgress,
        setTransitionProgress,
        startTransition,
        onMidpoint,
        onComplete,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
