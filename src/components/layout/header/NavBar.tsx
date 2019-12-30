import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps } from 'react-router-dom';

import { menuData } from '../../../constants/menuData';
import { MenuState } from '../../../store/menu/types';
import { AppState } from '../../../store';

import SubMenu from './SubMenu';

interface IProps {
  menu: MenuState;
}

class NavBar extends Component<IProps> {
  getNavItems = () => {
    return menuData.map(item => {
      return (
        <Nav.Link
          as={NavLink}
          key={item.id}
          to={item.link}
          className={
            item.id === this.props.menu.selectedMenuId0 ? 'selected' : undefined
          }
        >
          {item.text}
        </Nav.Link>
      );
    });
  };

  render() {
    const navItems = this.getNavItems();

    const { selectedMenuId0, selectedMenuId1 } = this.props.menu;

    const selectedMenu0Data = menuData.find(
      item => item.id === selectedMenuId0
    );
    const arrSub = selectedMenu0Data ? selectedMenu0Data.arrSub : null;

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">{navItems}</Nav>
        </Navbar>
        {arrSub && <SubMenu arrSub={arrSub} selectedId={selectedMenuId1!} />}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menu: state.menu,
});
export default connect(mapStateToProps)(NavBar);
