import React from 'react';
import styles from '../assets/styles/Footer.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      Copyright © 2022 <span className={styles.highlighted}>Maciej Sroka</span>
    </footer>
  );
};

export default Footer;
