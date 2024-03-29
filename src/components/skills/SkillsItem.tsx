import React from 'react';
import styles from '../../assets/styles/skills/SkillsItem.module.css';

interface SkillsItemProps {
  children: React.ReactNode;
  title: string;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ title, children }) => {
  return (
    <li className={styles.item} aria-label={title}>
      <div className={styles.icon}>{children}</div>
      <span className={styles.title}>{title}</span>
    </li>
  );
};

export default SkillsItem;
