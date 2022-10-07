import React from 'react';
import styles from '../assets/styles/Menu.module.css';

interface MenuLinkProps {
  children: React.ReactNode;
  to: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ children, to }) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={to}>
        {children}
      </a>
    </li>
  );
};

export default MenuLink;
