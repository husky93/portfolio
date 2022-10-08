/// <reference types="vite/client" />

interface ObserverObject {
  containerRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

interface ParallaxObject {
  offset: number;
  windowHeight: number;
}
