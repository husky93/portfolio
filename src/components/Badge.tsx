import React from 'react';
import styles from '../assets/styles/Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
