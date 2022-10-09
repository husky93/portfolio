import React, { lazy, useRef, useEffect, useState } from 'react';
import { useObserver, useParallax } from '../app/hooks';
import styles from '../assets/styles/About.module.css';

const Image = lazy(() => import('./Image'));
const Curtain = lazy(() => import('./Curtain'));

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const [margin, setMargin] = useState<Array<number>>([0, 0]);
  const aboutRef = useRef<HTMLElement>(null!);
  const { isVisible, containerRef } = useObserver(0.9);
  const { offset } = useParallax(aboutRef);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
      setMargin([80, 60]);
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

  return (
    <div>
      <section
        id="#about"
        aria-label="About"
        className={`${styles.about} ${isVisible ? styles.in_viewport : ''}`}
        ref={aboutRef}
      >
        <div className={styles.content}>
          <div
            className={styles.left}
            style={
              isVisible
                ? {
                    transform: `translateX(0px) translateY(${
                      offset / 8 - margin[0]
                    }px) rotate(-1deg)`,
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
                      offset / 15 - margin[1]
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
