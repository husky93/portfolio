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
      aria-hidden={!active}
    >
      <ul className={styles.list} aria-hidden={!active}>
        <MenuLink to="#hero" handleClick={handleLinkClick} active={active}>
          Home
        </MenuLink>
        <MenuLink to="#about" handleClick={handleLinkClick} active={active}>
          About
        </MenuLink>
        <MenuLink to="#projects" handleClick={handleLinkClick} active={active}>
          Projects
        </MenuLink>
        <MenuLink to="#contact" handleClick={handleLinkClick} active={active}>
          Contact
        </MenuLink>
      </ul>
    </nav>
  );
};

export default Menu;
