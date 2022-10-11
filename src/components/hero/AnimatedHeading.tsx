import React from 'react';
import styles from '../../assets/styles/hero/AnimatedHeading.module.css';

interface AnimatedHeadingProps {
  text: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>{text}</span>
    </div>
  );
};

export default AnimatedHeading;
