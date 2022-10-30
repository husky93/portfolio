import React from 'react';
import styles from '../../assets/styles/menu/Menu.module.css';

interface MenuLinkProps {
  active: boolean;
  children: React.ReactNode;
  toggleMenu: React.MouseEventHandler<HTMLAnchorElement>;
  to: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  active,
  children,
  to,
  toggleMenu,
}) => {
  const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    toggleMenu(e);
    setTimeout(() => {
      const href = (e.target as HTMLAnchorElement).getAttribute('href');
      if (href !== null)
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
        });
    }, 300);
  };

  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={to}
        onClick={handleLinkClick}
        tabIndex={active ? 1 : -1}
        aria-hidden={!active}
      >
        {children}
      </a>
    </li>
  );
};

export default MenuLink;
