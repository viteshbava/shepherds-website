'use client';

import React from 'react';
import useScrollReveal from '@/app/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  threshold,
  rootMargin,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(1rem)',
        ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
      }}>
      {children}
    </div>
  );
};

export default ScrollReveal;
