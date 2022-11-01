import React, { lazy, useRef, useEffect, useState, useCallback } from 'react';
import { useObserver, useParallax } from '../../app/hooks';
import styles from '../../assets/styles/about/About.module.css';

const Image = lazy(() => import('../Image'));
const Curtain = lazy(() => import('./Curtain'));

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const aboutRef = useRef(null!);
  const { isVisible, hasIntersected, containerRef } = useObserver(0.4);
  const { offset, sectionRef, windowHeight } = useParallax();

  useEffect(() => {
    containerRef.current = aboutRef.current;
    sectionRef.current = aboutRef.current;
  }, []);

  const setTransform = useCallback(
    (
      margin: number,
      ratio: number,
      rotation?: number
    ): ParallaxStyleObject | EmptyObject => {
      let lastTranslation;
      if (hasIntersected && !isVisible)
        return {
          transform: `translateX(0px) translateY(${lastTranslation})`,
        };
      let offsetRotation;
      if (rotation)
        offsetRotation =
          rotation + rotation * -((1.75 * offset) / windowHeight.current);
      if (hasIntersected && isVisible) {
        lastTranslation = offset / ratio - margin;
        return {
          transform: `translateX(0px) translateY(${
            offset / ratio - margin
          }px) ${rotation ? `rotate(${offsetRotation}deg)` : ''}`,
        };
      }

      return {};
    },
    [isVisible, hasIntersected, offset]
  );

  return (
    <div id="about">
      <section
        aria-label="About"
        className={`${styles.about} ${isVisible ? styles.in_viewport : ''}`}
        ref={aboutRef}
      >
        <div className={styles.content}>
          <div className={styles.left} style={setTransform(0, 8, -1)}>
            <Curtain
              direction="left"
              startAnimation={hasIntersected}
              delay={500}
            >
              <Image
                alt="Profile"
                imgName="profile"
                blurHash="LHB|QS~V.I^*xBR%E2RiW9xu%Nog"
              />
            </Curtain>
          </div>
          <div className={styles.right} style={setTransform(0, 20)}>
            <Curtain
              direction="right"
              startAnimation={hasIntersected}
              delay={1000}
            >
              <div className={styles.about_text}>
                <h2 className={`${styles.heading} h2`}>About Me</h2>
                <p className={styles.desc}>
                  Ever since I was a kid I was very tech-savvy and fascinated by
                  <strong className={styles.highlighted}>
                    {' '}
                    World Wide Web{' '}
                  </strong>
                  and its potential. My interest in{' '}
                  <strong className={styles.highlighted}>
                    {' '}
                    web development{' '}
                  </strong>
                  started when I was around 13. Thats when I created my first
                  website based on jPortal2 CMS.
                </p>

                <p className={styles.desc}>
                  After many years I decided to revisit old passion of mine and
                  learn{' '}
                  <strong className={styles.highlighted}>
                    computer science and programming.
                  </strong>{' '}
                  I have instantly felt like fish in the water, and got hooked
                  into the world of coding. Over the last few years I have
                  gained solid knowledge of{' '}
                  <strong className={styles.highlighted}>
                    frontend development
                  </strong>{' '}
                  and programming in general. Although there is still a lot for
                  me to learn I believe I can be a valuable asset to a Frontend
                  Development team and continue my growth working on real world
                  projects. So if you're looking for a motivated,
                  willing-to-learn, developer with a solid knowledge and passion
                  to build fast, functional, accessible, responsive UIs - hit me
                  up 😁!
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
