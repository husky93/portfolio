import React from 'react';
import styles from '../../assets/styles/menu/Menu.module.css';

interface MenuLinkProps {
  active: boolean;
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLAnchorElement>;
  to: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  active,
  children,
  to,
  handleClick,
}) => {
  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={to}
        onClick={handleClick}
        tabIndex={active ? 1 : -1}
        aria-hidden={!active}
      >
        {children}
      </a>
    </li>
  );
};

export default MenuLink;
