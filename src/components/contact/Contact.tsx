import React, { lazy } from 'react';
import { useObserver } from '../../app/hooks';
import styles from '../../assets/styles/contact/Contact.module.css';

const AnimatedHeading = lazy(() => import('../hero/AnimatedHeading'));

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const { hasIntersected, containerRef } = useObserver(0.5);

  return (
    <section
      id="contact"
      aria-label="Contact"
      className={styles.contact}
      ref={containerRef}
    >
      <div className={`${hasIntersected ? `${styles.visible}` : ''}`}>
        <h2 className={styles.heading}>
          <AnimatedHeading
            text="Want to get in contact?"
            active={hasIntersected}
            sm
          />
        </h2>
        <p className={styles.email}>sroka.maciej93@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
