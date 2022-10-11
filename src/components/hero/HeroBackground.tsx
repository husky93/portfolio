import React, { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loading from '../Loading';

const AnimatedStars = lazy(() => import('./AnimatedStars'));

interface HeroBackgroundProps {}

const HeroBackground: React.FC<HeroBackgroundProps> = ({}) => {
  return (
    <Suspense fallback={<div></div>}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedStars />
      </Canvas>
    </Suspense>
  );
};

export default HeroBackground;
