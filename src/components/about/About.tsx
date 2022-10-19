import React, { lazy, useRef, useEffect, useState, useCallback } from 'react';
import { useObserver, useParallax } from '../../app/hooks';
import styles from '../../assets/styles/about/About.module.css';

const Image = lazy(() => import('../Image'));
const Curtain = lazy(() => import('./Curtain'));

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  const aboutRef = useRef(null!);
  const { isVisible, containerRef } = useObserver(0.4);
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
          <div className={styles.left} style={setTransform(0, 8, -1)}>
            <Curtain direction="left" startAnimation={isVisible} delay={500}>
              <Image
                alt="Profile"
                imgName="profile"
                blurHash="LHB|QS~V.I^*xBR%E2RiW9xu%Nog"
              />
            </Curtain>
          </div>
          <div className={styles.right} style={setTransform(0, 20)}>
            <Curtain direction="right" startAnimation={isVisible} delay={1000}>
              <div className={styles.about_text}>
                <h2 className={`${styles.heading} h2`}>About Me</h2>
                <p className={styles.desc}>
                  Ever since I was a kid I was very tech-savvy and fascinated by
                  <strong className={styles.highlighted}>
                    {' '}
                    World Wide Web{' '}
                  </strong>
                  and its potential. I had an internet access since it started
                  gaining popularity in Poland (around 2001). I witnessed it
                  transform from websites with bunch of links and text and
                  barely any style at all to global, fast, functional, modern
                  social media platforms we have today.
                </p>
                <p className={styles.desc}>
                  My interest in{' '}
                  <strong className={styles.highlighted}>
                    {' '}
                    web development{' '}
                  </strong>
                  started when i was around 13. Thats when I created my first
                  website based on jPortal2 CMS. I didn't follow up on my
                  passion back then, as it seemed very hard to do things on a
                  web for a 13 y.o. without communities like StackOverflow and
                  decent Google SE algorithm 😆.
                </p>
                <p className={styles.desc}>
                  After many years I decided to revisit old passion of mine and
                  learn{' '}
                  <strong className={styles.highlighted}>
                    computer science and programming
                  </strong>{' '}
                  through the internet. I got instantly hooked in and over the
                  last few years I have gained solid knowledge of{' '}
                  <strong className={styles.highlighted}>
                    frontend development
                  </strong>{' '}
                  and programming in general. Although there is still a lot to
                  learn I believe I can be a valuable asset to a Frontend
                  Development team and continue my growth with a company that is
                  willing to help me with it. So if you're looking for a
                  motivated, willing-to-learn, developer with a solid knowledge
                  and passion to build fast, accessible, responsive UIs - hit me
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
