import React from 'react';
import { menuData } from '../../../constants/menuData';
import NavItem from './NavItem';
import { IHasMenu } from '../../../interfaces/IHasMenu';

type Props = IHasMenu;

// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

const NavBar = ({ menuId, subMenuId }: Props) => {
  const getNavItems = () => {
    return menuData.map(item => {
      return (
        <NavItem
          key={item.id}
          itemData={item}
          isSelected={item.id === menuId}
          subSelectedId={subMenuId}
        >
          {item.text}
        </NavItem>
      );
    });
  };

  const navItems = getNavItems();

  return <ul>{navItems}</ul>;
};

export default NavBar;
