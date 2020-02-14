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
import { MenuId } from '../../../enums/MenuId';

interface IProps {
  menu: MenuState;
}
interface IState {
  selectedSubMenuDatas: IMenuItemData[] | null;
  overedSubMenuDatas: IMenuItemData[] | null;
}

class NavBar extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    const { selectedMenuId0 } = this.props.menu;
    const arrSub = selectedMenuId0 ? this.getSubMenus(selectedMenuId0) : null;
    this.state = {
      selectedSubMenuDatas: arrSub,
      overedSubMenuDatas: null,
    };
  }

  onMouseOverLink = (item: IMenuItemData) => {
    if (!item.arrSub) return;

    this.setState({ overedSubMenuDatas: item.arrSub });
  };

  onMouseOutLink = (item: IMenuItemData) => {
    this.setState({ overedSubMenuDatas: null });
  };

  getNavItems = () => {
    return menuData.map(item => {
      return (
        <NavItem
          key={item.id}
          link={item.link}
          text={item.text}
          isSelected={item.id === this.props.menu.selectedMenuId0}
          onMouseOver={() => this.onMouseOverLink(item)}
          onMouseOut={() => this.onMouseOutLink(item)}
        >
          {item.text}
        </NavItem>
      );
    });
  };

  getSubMenus = (selectedMenuId0: MenuId): IMenuItemData[] | null => {
    const selectedMenu0Data = menuData.find(
      item => item.id === selectedMenuId0
    );

    if (!selectedMenu0Data) return null;

    const { arrSub } = selectedMenu0Data;

    return arrSub || null;
  };

  render() {
    const navItems = this.getNavItems();

    const { selectedMenuId1 } = this.props.menu;
    const { selectedSubMenuDatas, overedSubMenuDatas } = this.state;

    const subMenus = selectedSubMenuDatas || overedSubMenuDatas || null;

    return (
      <div className={styles.wrapper}>
        <NavLink to="/">
          <img src={logo} className={styles.logo} alt="logo" />
        </NavLink>

        {navItems}

        {subMenus && (
          <SubMenu arrSub={subMenus} selectedId={selectedMenuId1!} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menu: state.menu,
});
export default connect(mapStateToProps)(NavBar);
