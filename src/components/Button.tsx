import React from 'react';
import styles from '../assets/styles/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  navigateTo: string;
}

const Button: React.FC<ButtonProps> = ({ children, navigateTo }) => {
  return (
    <a className={styles.button} href={navigateTo} target="_blank">
      {children}
    </a>
  );
};

export default Button;
