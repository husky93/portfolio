import React from 'react';
import styles from '../assets/styles/AnimatedHeading.module.css';

interface AnimatedHeadingProps {
  text: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{text}</h2>
    </div>
  );
};

export default AnimatedHeading;
