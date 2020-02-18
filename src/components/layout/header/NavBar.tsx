import React, { Component } from 'react';
import { connect } from 'react-redux';
import { menuData } from '../../../constants/menuData';
import { MenuState } from '../../../store/menu/types';
import { AppState } from '../../../store';
import NavItem from './NavItem';

interface IProps {
  menu: MenuState;
}

class NavBar extends Component<IProps> {
  getNavItems = () => {
    const { selectedMenuId0, selectedMenuId1 } = this.props.menu;

    return menuData.map(item => {
      return (
        <NavItem
          key={item.id}
          itemData={item}
          isSelected={item.id === selectedMenuId0}
          subSelectedId={selectedMenuId1}
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

const mapStateToProps = (state: AppState) => ({
  menu: state.menu,
});
export default connect(mapStateToProps)(NavBar);
