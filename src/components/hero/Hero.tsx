import React, { lazy, useState, useEffect } from 'react';
import styles from '../../assets/styles/hero/Hero.module.css';

const Sphere = lazy(() => import('./Sphere'));
const AnimatedHeading = lazy(() => import('./AnimatedHeading'));
const AlternatingText = lazy(() => import('./AlternatingText'));

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p
            className={`${styles.introduction} ${loaded ? styles.loaded : ''}`}
          >
            Hi, my name is
          </p>
          <h1 className={styles.header}>
            <AnimatedHeading text="Maciej" active />
            <AnimatedHeading text="Sroka" active />
          </h1>
          <AlternatingText
            text={[
              'JavaScript Developer',
              'TypeScript',
              'React',
              'Node.js + Express',
            ]}
          />
        </div>
        <Sphere />
      </div>
    </section>
  );
};

export default Hero;
