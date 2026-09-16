'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 450,
  className = '',
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
          // Release GPU composite layer after animation completes
          const timer = setTimeout(() => {
            setAnimationFinished(true);
          }, duration + delay + 50);
          return () => clearTimeout(timer);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, duration, delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)';
      case 'down':
        return 'translate3d(0, -24px, 0)';
      case 'left':
        return 'translate3d(24px, 0, 0)';
      case 'right':
        return 'translate3d(-24px, 0, 0)';
      case 'scale':
        return 'scale3d(0.96, 0.96, 1)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  // Once animation completes, remove all transforms to restore 100% native 60/120fps scrolling
  if (animationFinished) {
    return <div ref={domRef} className={className}>{children}</div>;
  }

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translate3d(0, 0, 0)' : getInitialTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: isRevealed ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
