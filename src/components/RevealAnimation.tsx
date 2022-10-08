import React from 'react';
import styles from '../assets/styles/RevealAnimation.module.css';

interface RevealAnimationProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
  startAnimation: boolean;
  delay: number;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  direction,
  children,
  startAnimation,
  delay,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.curtain} ${
          startAnimation ? styles[direction] : ''
        }`}
        style={{ animationDelay: delay + 'ms' }}
      ></div>
      {children}
    </div>
  );
};

export default RevealAnimation;
