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
      className={`transition-[opacity,transform] duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
};

export default ScrollReveal;
