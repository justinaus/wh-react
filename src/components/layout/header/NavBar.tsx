import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps } from 'react-router-dom';

import { menuData } from '../../../constants/menuData';
import IMenuItemData from '../../../constants/IMenuItemData';
import { MenuState } from '../../../store/menu/types';
import { AppState } from '../../../store';

import NavItem from './NavItem';
import SubMenu from './SubMenu';

import styles from './NavBar.module.css';

import logo from '../../../assets/logo.svg';

interface IProps {
  menu: MenuState;
}

class NavBar extends Component<IProps> {
  onMouseOverLink = (item: IMenuItemData) => {
    if (!item.arrSub) return;

    console.log(item);
  };

  getNavItems = () => {
    return menuData.map(item => {
      return (
        <NavItem
          key={item.id}
          link={item.link}
          text={item.text}
          isSelected={item.id === this.props.menu.selectedMenuId0}
          // onMouseOver={() => this.onMouseOverLink(item)}
        >
          {item.text}
        </NavItem>
      );
    });
  };

  render() {
    const navItems = this.getNavItems();

    // const { selectedMenuId0, selectedMenuId1 } = this.props.menu;

    // const selectedMenu0Data = menuData.find(
    //   item => item.id === selectedMenuId0
    // );
    // const arrSub = selectedMenu0Data ? selectedMenu0Data.arrSub : null;

    return (
      <div className={styles.wrapper}>
        <NavLink to="/">
          <img src={logo} className={styles.logo} alt="logo" />
        </NavLink>

        {navItems}

        {/* {arrSub && <SubMenu arrSub={arrSub} selectedId={selectedMenuId1!} />} */}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menu: state.menu,
});
export default connect(mapStateToProps)(NavBar);
