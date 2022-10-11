import React, { useEffect, useState } from 'react';
import styles from '../../assets/styles/hero/AlternatingText.module.css';

interface AlternatingTextProps {
  text: Array<string>;
}

const AlternatingText: React.FC<AlternatingTextProps> = ({ text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const textArrayLength = text.length;
    setTimeout(async () => {
      setActive(false);
      await setTimeout(() => {
        if (currentIndex + 1 === textArrayLength) {
          setCurrentIndex(0);
        }
        if (currentIndex + 1 < textArrayLength) {
          setCurrentIndex((prevState) => prevState + 1);
        }
        setActive(true);
      }, 400);
    }, 3000);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <h1 className={`${styles.text} ${active ? styles.active : ''}`}>
        {text[currentIndex]}
      </h1>
    </div>
  );
};

export default AlternatingText;
