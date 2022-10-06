import React, { useState, useCallback } from 'react';
import styles from '../assets/styles/Hamburger.module.css';

interface HamburgerProps {}

const Hamburger: React.FC<HamburgerProps> = ({}) => {
  const [active, setActive] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback((): void => {
      setActive((prevState) => !prevState);
    }, []);

  return (
    <div className={`${styles.hamburger} ${active ? styles.active : ''}`}>
      <button
        className={styles.toggler}
        aria-label="Menu"
        onClick={handleClick}
      >
        <svg viewBox="0 0 80 50" width="30" height="40">
          <rect
            width="70"
            height="7"
            rx="8"
            x="5"
            className={styles.line}
          ></rect>
          <rect
            y="20"
            width="80"
            height="7"
            rx="8"
            className={styles.line}
          ></rect>
          <rect
            y="40"
            width="70"
            height="7"
            rx="8"
            x="5"
            className={styles.line}
          ></rect>
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
