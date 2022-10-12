import React from 'react';
import styles from '../assets/styles/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  navigateTo?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
  hidden?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  navigateTo,
  type,
  hidden,
}) => {
  return navigateTo ? (
    <a
      className={styles.button}
      href={navigateTo}
      target="_blank"
      tabIndex={hidden ? -1 : 1}
    >
      {children}
    </a>
  ) : (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
