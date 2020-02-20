import React, { Component } from 'react';
import { menuData } from '../../../constants/menuData';
import NavItem from './NavItem';
import { IHasMenu } from '../../../interfaces/IHasMenu';

export default class NavBar extends Component<IHasMenu> {
  getNavItems = () => {
    const { menuId, subMenuId } = this.props;

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

  render() {
    const navItems = this.getNavItems();

    return <ul>{navItems}</ul>;
  }
}
