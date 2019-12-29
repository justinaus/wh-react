import React, { Component, SyntheticEvent } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { menuData } from '../../../constants/menuData';
import IMenuItemData from '../../../constants/IMenuItemData';

import styles from './NavBar.module.css';
import { MenuState } from '../../../store/menu/types';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { MenuId } from '../../../enums/MenuId';

interface IProps {
  menu: MenuState;
}

interface IState {
  isOpenDropdown: boolean;
}

class NavBar extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    console.log('Navbar 생성자');

    this.state = { isOpenDropdown: false };
  }

  componentWillMount() {
    console.log('componentWillMount');
    const needToOpen = this.props.menu.selectedMenuId0 === MenuId.Product;
    const { isOpenDropdown } = this.state;

    if (needToOpen === isOpenDropdown) return;

    this.setState({ isOpenDropdown: needToOpen });
  }

  onToggleDropdown = (
    isOpen: boolean,
    event: SyntheticEvent,
    metadata: {
      source: 'select' | 'click' | 'rootClose' | 'keydown';
    }
  ) => {
    this.setState({ isOpenDropdown: isOpen });
  };

  getDropDownItems = (arrMenu: Array<IMenuItemData>) => {
    return arrMenu.map(item => {
      return (
        <NavDropdown.Item
          as={NavLink}
          key={item.id}
          to={item.link}
          className={
            item.id === this.props.menu.selectedMenuId1
              ? styles.selected
              : undefined
          }
        >
          {item.text}
        </NavDropdown.Item>
      );
    });
  };

  getNavItems = () => {
    return menuData.map(item => {
      if (!item.arrSub) {
        return (
          <Nav.Link
            as={NavLink}
            key={item.id}
            to={item.link}
            className={
              item.id === this.props.menu.selectedMenuId0
                ? 'selected'
                : undefined
            }
          >
            {item.text}
          </Nav.Link>
        );
      }

      return (
        <NavDropdown
          key={item.id}
          title={item.text}
          id="basic-nav-dropdown"
          show={this.state.isOpenDropdown}
          onToggle={this.onToggleDropdown}
        >
          {this.getDropDownItems(item.arrSub!)}
        </NavDropdown>
      );
    });
  };

  render() {
    console.log('render');

    const navItems = this.getNavItems();

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">{navItems}</Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(NavBar);
