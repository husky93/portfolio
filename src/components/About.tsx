import React, { lazy, useState } from 'react';
import { useObserver, useParallax } from '../app/hooks';
import styles from '../assets/styles/About.module.css';

const Image = lazy(() => import('./Image'));
const Curtain = lazy(() => import('./Curtain'));

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const { isVisible, containerRef } = useObserver(0.999);
  const { offset, windowHeight } = useParallax();

  return (
    <section
      id="#about"
      aria-label="About"
      className={`${styles.about} ${isVisible ? styles.in_viewport : ''}`}
      ref={containerRef}
    >
      <div className={styles.content}>
        <div
          className={styles.left}
          style={
            isVisible
              ? {
                  transform: `translateX(0px) translateY(${
                    (windowHeight / offset) * -5
                  }px)`,
                }
              : {}
          }
        >
          <Curtain direction="left" startAnimation={isVisible} delay={750}>
            <Image alt="Placeholder" imgName="placeholder" />
          </Curtain>
        </div>
        <div
          className={styles.right}
          style={
            isVisible
              ? {
                  transform: `translateX(0px) translateY(${
                    (windowHeight / offset) * 5
                  }px)`,
                }
              : {}
          }
        >
          <Curtain direction="right" startAnimation={isVisible} delay={900}>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Curtain>
        </div>
      </div>
    </section>
  );
};

export default About;
