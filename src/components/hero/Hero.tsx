import React, { lazy } from 'react';
import styles from '../../assets/styles/hero/Hero.module.css';

const HeroBackground = lazy(() => import('./HeroBackground'));
const AnimatedHeading = lazy(() => import('./AnimatedHeading'));
const AlternatingText = lazy(() => import('./AlternatingText'));

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className={styles.hero} id="hero">
      <HeroBackground />
      <div className={styles.content}>
        <p className={styles.introduction}>Hi, my name is</p>
        <h1 className={styles.header}>
          <AnimatedHeading text="Maciej" />
          <AnimatedHeading text="Sroka" />
        </h1>
        <AlternatingText
          text={['Frontend Developer', 'JavaScript', 'TypeScript', 'React']}
        />
      </div>
    </section>
  );
};

export default Hero;
