import React, { lazy } from 'react';
import styles from '../assets/styles/Menu.module.css';

const MenuLink = lazy(() => import('./MenuLink'));

interface MenuProps {
  active: boolean;
}

const Menu: React.FC<MenuProps> = ({ active }) => {
  return (
    <nav
      aria-hidden={active ? 'false' : 'true'}
      aria-label="Menu"
      className={`${styles.navigation} ${active ? styles.active : ''}`}
    >
      <ul className={styles.list}>
        <MenuLink to="#hero">Home</MenuLink>
        <MenuLink to="#hero">About</MenuLink>
        <MenuLink to="#hero">Projects</MenuLink>
        <MenuLink to="#hero">Contact</MenuLink>
      </ul>
    </nav>
  );
};

export default Menu;
