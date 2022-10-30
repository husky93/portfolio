import React from 'react';
import styles from '../../assets/styles/hero/AnimatedHeading.module.css';

interface AnimatedHeadingProps {
  text: string;
  active: boolean;
  sm?: boolean;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  sm,
  active,
}) => {
  return (
    <div className={styles.container}>
      <span
        className={`${styles.heading} ${active ? styles.active : ''} ${
          sm ? styles.sm : ''
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default AnimatedHeading;
