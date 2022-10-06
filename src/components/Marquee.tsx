import React, { useEffect, useState } from 'react';
import styles from '../assets/styles/Marquee.module.css';

interface MarqueeProps {
  textInitial: string;
  textFull: string;
}

const Marquee: React.FC<MarqueeProps> = ({ textFull, textInitial }) => {
  const [renderElements, setRenderElements] = useState<Array<React.ReactNode>>(
    []
  );
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    let delay = 50;
    const elementsArray = textInitial.split('').map((letter, index) => {
      delay += 75;
      return (
        <span
          key={`letter-${index}`}
          className={styles.marqueeletter}
          style={{ animationDelay: `${delay}ms` }}
        >
          {letter === ' ' ? String.fromCharCode(160) : letter}
        </span>
      );
    });
    setDelay(delay);
    setRenderElements(elementsArray);
  }, [textInitial]);

  useEffect(() => {
    const renderMarquee = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay + 1500));
      const marquee = (
        <div className={styles.marquee} key={`marquee`}>
          <div className={styles.marquee_inner} aria-hidden="true">
            <span className={styles.span}>{textFull}</span>
            <span>&nbsp;•&nbsp;</span>
            <span className={styles.span}>{textFull}</span>
            <span>&nbsp;•&nbsp;</span>
            <span className={styles.span}>{textFull}</span>
          </div>
        </div>
      );
      setRenderElements([marquee]);
    };

    if (delay > 0) {
      renderMarquee();
    }
  }, [delay, textFull]);

  return <div className={styles.container}>{renderElements}</div>;
};

export default Marquee;
