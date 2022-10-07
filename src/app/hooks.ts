import React, { useRef, useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useObserver = (threshold: number) => {
  const containerRef: RefObject<HTMLElement> = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return { containerRef, isVisible };
};
