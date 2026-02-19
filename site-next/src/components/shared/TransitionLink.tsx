'use client';

import { useCallback, type ReactNode, type MouseEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTransitionContext } from '@/hooks/useTransition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TransitionLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: unknown;
}

export default function TransitionLink({
  to,
  children,
  className,
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const transitionCtx = useTransitionContext();
  const prefersReduced = useReducedMotion();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) onClick(e);
      if (transitionCtx?.isTransitioning) return;
      if (pathname === to) return;

      if (prefersReduced || !transitionCtx) {
        router.push(to);
      } else {
        transitionCtx.startTransition(to);
      }
    },
    [to, router, pathname, transitionCtx, prefersReduced, onClick]
  );

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
