import React, { lazy } from 'react';
import styles from '../../assets/styles/menu/Menu.module.css';

const MenuLink = lazy(() => import('./MenuLink'));

interface MenuProps {
  active: boolean;
  handleLinkClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const Menu: React.FC<MenuProps> = ({ active, handleLinkClick }) => {
  return (
    <nav
      aria-label="Menu"
      className={`${styles.navigation} ${active ? styles.active : ''}`}
    >
      <ul className={styles.list}>
        <MenuLink to="#hero" handleClick={handleLinkClick}>
          Home
        </MenuLink>
        <MenuLink to="#about" handleClick={handleLinkClick}>
          About
        </MenuLink>
        <MenuLink to="#projects" handleClick={handleLinkClick}>
          Projects
        </MenuLink>
        <MenuLink to="#contact" handleClick={handleLinkClick}>
          Contact
        </MenuLink>
      </ul>
    </nav>
  );
};

export default Menu;
