/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ObserverObject {
  containerRef: RefObject<HTMLElement>;
  isVisible: boolean;
  hasIntersected: boolean;
}

interface ParallaxObject {
  offset: number;
  windowHeight: React.MutableRefObject<number>;
  sectionRef: React.MutableRefObject<HTMLElement | null>;
}

interface ParallaxStyleObject {
  transform: string;
}

type EmptyObject = {
  [K in any]: never;
};

type SkillsObject = {
  icon: React.ReactNode;
  title: string;
};
