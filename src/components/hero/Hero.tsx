import React, { lazy, useEffect } from 'react';
import { useObserver } from '../../app/hooks';
import styles from '../../assets/styles/hero/Hero.module.css';

const HeroBackground = lazy(() => import('./HeroBackground'));
const AnimatedHeading = lazy(() => import('./AnimatedHeading'));
const Marquee = lazy(() => import('./Marquee'));

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  const { isVisible, containerRef } = useObserver(0.001);

  useEffect(() => {
    const htmlElement = document.firstElementChild;
    if (isVisible) {
      htmlElement?.classList.add('dark');
      htmlElement?.classList.remove('light');
    }
    if (!isVisible) {
      htmlElement?.classList.remove('dark');
      htmlElement?.classList.add('light');
    }
  }, [isVisible]);

  return (
    <section className={`${styles.hero} dark`} ref={containerRef}>
      <HeroBackground />
      <div className={styles.content}>
        <h1>
          <AnimatedHeading text="Maciej" />
          <AnimatedHeading text="Sroka" />
        </h1>
        <Marquee
          textFull="Frontend Developer • JavaScript • TypeScript • React"
          textInitial="Frontend Developer"
        />
      </div>
      <div ref={containerRef} style={{ height: '1px' }}></div>
    </section>
  );
};

export default Hero;
