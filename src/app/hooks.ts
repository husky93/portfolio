import { useRef, useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useObserver = (threshold: number): ObserverObject => {
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

export const useParallax = (
  ref: React.MutableRefObject<HTMLElement>
): ParallaxObject => {
  const [offset, setOffset] = useState(0);
  const windowHeight = useRef(window.innerHeight);
  const sectionDistanceTop = useRef(0);

  useEffect(() => {
    sectionDistanceTop.current =
      ref.current.getBoundingClientRect().top + window.pageYOffset;
    const onScroll = () => {
      setOffset(window.scrollY - sectionDistanceTop.current);
    };

    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { offset, windowHeight };
};
