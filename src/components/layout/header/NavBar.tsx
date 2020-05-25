import React from 'react';
import { menuData } from '../../../constants/menuData';
import NavItem from './NavItem';
import { IHasMenu } from '../../../interfaces/IHasMenu';

import styles from './NavBar.module.css';

type Props = IHasMenu;

const NavBar = ({ menuId }: Props) => {
  const getNavItems = () => {
    return menuData.map(item => {
      return (
        <NavItem key={item.id} itemData={item} isSelected={item.id === menuId}>
          {item.text}
        </NavItem>
      );
    });
  };

  const navItems = getNavItems();

  return <nav className={styles.wrapper}>{navItems}</nav>;
};

export default NavBar;
