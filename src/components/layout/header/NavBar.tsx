import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { menuData } from '../../../constants/menuData';
import IMenuItemData from '../../../constants/IMenuItemData';

import classnames from 'classnames';

import styles from './NavBar.module.css';
import { MenuState } from '../../../store/menu/types';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { MenuId } from '../../../enums/MenuId';

interface NavBarProps {
  menu: MenuState;
}

class NavBar extends Component<NavBarProps> {
  componentDidMount() {
    const { selectedMenuId } = this.props.menu;

    // open dropdown

    // const isOpenDropdown = selectedMenuId === MenuId.
    console.log(123);
  }

  getDropDownItems = (arrMenu: Array<IMenuItemData>) => {
    return arrMenu.map(item => {
      return (
        <NavDropdown.Item
          as={NavLink}
          key={item.id}
          to={item.link}
          className={
            item.id === this.props.menu.selectedMenuId
              ? styles.selectedDropDownItem
              : undefined
          }
        >
          {item.text}
        </NavDropdown.Item>
      );
    });
  };

  getLinkItems = () => {
    return menuData.map(item => {
      if (!item.arrSub) {
        return (
          <Nav.Link
            as={NavLink}
            key={item.id}
            to={item.link}
            className={
              item.id === this.props.menu.selectedMenuId
                ? styles.selected
                : undefined
            }
          >
            {item.text}
          </Nav.Link>
        );
      }

      return (
        <NavDropdown key={item.id} title={item.text} id="basic-nav-dropdown">
          {this.getDropDownItems(item.arrSub!)}
        </NavDropdown>
      );
    });
  };

  navItems = this.getLinkItems();

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">{this.navItems}</Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(NavBar);
