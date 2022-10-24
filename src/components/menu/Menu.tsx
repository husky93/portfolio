import React, { lazy } from 'react';
import styles from '../../assets/styles/menu/Menu.module.css';

const MenuLink = lazy(() => import('./MenuLink'));

interface MenuProps {
  active: boolean;
  toggleMenu: React.MouseEventHandler<HTMLAnchorElement>;
  isLoaded: boolean;
}

const Menu: React.FC<MenuProps> = ({ active, toggleMenu, isLoaded }) => {
  return (
    <nav
      aria-label="Menu"
      className={`${styles.navigation} ${active ? styles.active : ''} ${
        isLoaded ? styles.loaded : ''
      }`}
      aria-hidden={!active}
    >
      <ul className={styles.list} aria-hidden={!active}>
        <MenuLink to="#hero" toggleMenu={toggleMenu} active={active}>
          Home
        </MenuLink>
        <MenuLink to="#about" toggleMenu={toggleMenu} active={active}>
          About
        </MenuLink>
        <MenuLink to="#projects" toggleMenu={toggleMenu} active={active}>
          Projects
        </MenuLink>
        <MenuLink to="#contact" toggleMenu={toggleMenu} active={active}>
          Contact
        </MenuLink>
      </ul>
    </nav>
  );
};

export default Menu;
