import React from 'react';
import styles from '../assets/styles/RevealAnimation.module.css';

interface RevealAnimationProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
  startAnimation: boolean;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  direction,
  children,
  startAnimation,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.curtain} ${
          startAnimation ? styles[direction] : ''
        }`}
      ></div>
      {children}
    </div>
  );
};

export default RevealAnimation;
