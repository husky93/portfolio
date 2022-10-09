import React from 'react';
import styles from '../assets/styles/SkillsItem.module.css';

interface SkillsItemProps {
  children: React.ReactNode;
  title: string;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ title, children }) => {
  return (
    <li className={styles.item}>
      <div className={styles.icon}>{children}</div>
      <span className={styles.title}>{title}</span>
    </li>
  );
};

export default SkillsItem;
