import React, { lazy } from 'react';
import styles from '../assets/styles/Hero.module.css';

const HeroBackground = lazy(() => import('./HeroBackground'));
const AnimatedHeading = lazy(() => import('./AnimatedHeading'));
const Marquee = lazy(() => import('./Marquee'));

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className={styles.hero}>
      <HeroBackground />
      <div className={styles.content}>
        <div>
          <AnimatedHeading text="Maciej" />
          <AnimatedHeading text="Sroka" />
        </div>
        <Marquee
          textFull="Frontend Developer • JavaScript • TypeScript • React"
          textInitial="Frontend Developer"
        />
      </div>
    </section>
  );
};

export default Hero;
