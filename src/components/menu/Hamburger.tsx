import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/menu/Hamburger.module.css';

interface HamburgerProps {
  active: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isLoaded: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({
  active,
  handleClick,
  isLoaded,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <div
      className={`${styles.hamburger} ${active ? styles.active : ''} ${
        isLoaded ? styles.loaded : ''
      }`}
    >
      <button
        className={styles.toggler}
        aria-hidden="true"
        onClick={handleClick}
      >
        <svg viewBox="0 0 80 50" width="30" height="40">
          <rect
            width="70"
            height="7"
            rx="8"
            x="5"
            className={`${styles.line} ${loaded ? '' : styles.preload}`}
          ></rect>
          <rect
            y="20"
            width="80"
            height="7"
            rx="8"
            className={`${styles.line} ${loaded ? '' : styles.preload}`}
          ></rect>
          <rect
            y="40"
            width="70"
            height="7"
            rx="8"
            x="5"
            className={`${styles.line} ${loaded ? '' : styles.preload}`}
          ></rect>
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
