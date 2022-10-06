import React, { lazy } from 'react';
import { Canvas, ThreeElements } from '@react-three/fiber';

const AnimatedStars = lazy(() => import('./AnimatedStars'));

interface HeroBackgroundProps {}

const HeroBackground: React.FC<HeroBackgroundProps> = ({}) => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <AnimatedStars />
    </Canvas>
  );
};

export default HeroBackground;
