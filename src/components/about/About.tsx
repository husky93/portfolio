import React, { lazy, useRef, useEffect, useState, useCallback } from 'react';
import { useObserver, useParallax } from '../../app/hooks';
import styles from '../../assets/styles/about/About.module.css';

const Image = lazy(() => import('../Image'));
const Curtain = lazy(() => import('./Curtain'));

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const [margin, setMargin] = useState<Array<number>>([0, 0]);
  const aboutRef = useRef(null!);
  const { isVisible, containerRef } = useObserver(0.4);
  const { offset, sectionRef, windowHeight } = useParallax();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMargin([0, 0]);
    }
    if (window.innerWidth < 768) {
      if (window.innerHeight > 740 && window.innerHeight < 800) {
        setMargin([30, 0]);
      }
      if (window.innerHeight > 800) {
        setMargin([20, -30]);
      }
      if (window.innerHeight <= 700) {
        setMargin([0, -40]);
      }
    }
    containerRef.current = aboutRef.current;
    sectionRef.current = aboutRef.current;
  }, []);

  const setTransform = useCallback(
    (
      margin: number,
      ratio: number,
      rotation?: number
    ): ParallaxStyleObject | EmptyObject => {
      let offsetRotation;
      if (rotation)
        offsetRotation =
          rotation + rotation * -((2 * offset) / windowHeight.current);
      return isVisible
        ? {
            transform: `translateX(0px) translateY(${
              offset / ratio - margin
            }px) ${rotation ? `rotate(${offsetRotation}deg)` : ''}`,
          }
        : {};
    },
    [isVisible, offset]
  );

  return (
    <div id="about">
      <section
        aria-label="About"
        className={`${styles.about} ${isVisible ? styles.in_viewport : ''}`}
        ref={aboutRef}
      >
        <div className={styles.content}>
          <div className={styles.left} style={setTransform(margin[0], 8, -1)}>
            <Curtain direction="left" startAnimation={isVisible} delay={500}>
              <Image
                alt="Placeholder"
                imgName="placeholder"
                blurHash="LPOM~fxuaeNG_3RjWBaz~qWBWBxu"
              />
            </Curtain>
          </div>
          <div className={styles.right} style={setTransform(margin[1], 20)}>
            <Curtain direction="right" startAnimation={isVisible} delay={1000}>
              <div className={styles.about_text}>
                <h2 className={`${styles.heading} h2`}>About Me</h2>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Curtain>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
