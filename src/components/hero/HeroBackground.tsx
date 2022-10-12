import React, { lazy, Suspense } from 'react';
import Loading from '../Loading';

const Sphere = lazy(() => import('./Sphere'));

interface HeroBackgroundProps {}

const HeroBackground: React.FC<HeroBackgroundProps> = ({}) => {
  return (
    <Suspense fallback={<div></div>}>
      <Sphere />
    </Suspense>
  );
};
export default HeroBackground;
