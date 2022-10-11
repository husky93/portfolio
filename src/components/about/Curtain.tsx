import React from 'react';
import styles from '../../assets/styles/about/Curtain.module.css';

interface CurtainProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
  startAnimation: boolean;
  delay: number;
}

const Curtain: React.FC<CurtainProps> = ({
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

export default Curtain;
