import React, { lazy, useRef, useEffect, useState, useCallback } from 'react';
import { useObserver, useParallax } from '../app/hooks';
import styles from '../assets/styles/About.module.css';

const Image = lazy(() => import('./Image'));
const Curtain = lazy(() => import('./Curtain'));

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const [margin, setMargin] = useState<Array<number>>([0, 0]);
  const { isVisible, containerRef } = useObserver(0.9);
  const { offset, sectionRef } = useParallax();

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
      setMargin([80, 80]);
    }
    if (window.innerWidth < 768) {
      if (window.innerHeight > 740 && window.innerHeight < 800) {
        setMargin([30, 0]);
      }
      if (window.innerHeight > 800) {
        setMargin([20, -30]);
      }
      if (window.innerHeight <= 700) {
        setMargin([-15, -40]);
      }
    }
  }, []);

  const setTransform = useCallback(
    (
      margin: number,
      ratio: number,
      rotation?: number
    ): ParallaxStyleObject | EmptyObject => {
      return isVisible
        ? {
            transform: `translateX(0px) translateY(${
              offset / ratio - margin
            }px) ${rotation ? `rotate(${rotation}deg)` : ''}`,
          }
        : {};
    },
    [isVisible, offset]
  );

  return (
    <div>
      <section
        id="#about"
        aria-label="About"
        className={`${styles.about} ${isVisible ? styles.in_viewport : ''}`}
        ref={sectionRef}
      >
        <div className={styles.content}>
          <div className={styles.left} style={setTransform(margin[0], 8, -1)}>
            <Curtain direction="left" startAnimation={isVisible} delay={750}>
              <Image alt="Placeholder" imgName="placeholder" />
            </Curtain>
          </div>
          <div className={styles.right} style={setTransform(margin[1], 15)}>
            <Curtain direction="right" startAnimation={isVisible} delay={900}>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Curtain>
          </div>
        </div>
      </section>
      <div className={styles.observer} ref={containerRef}></div>
    </div>
  );
};

export default About;
