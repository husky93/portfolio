import React from 'react';
import styles from '../assets/styles/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  navigateTo?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
}

const Button: React.FC<ButtonProps> = ({ children, navigateTo, type }) => {
  return navigateTo ? (
    <a className={styles.button} href={navigateTo} target="_blank">
      {children}
    </a>
  ) : (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
