import React from 'react';
import styles from '../assets/styles/Menu.module.css';

interface MenuLinkProps {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLAnchorElement>;
  to: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ children, to, handleClick }) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href={to} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

export default MenuLink;
