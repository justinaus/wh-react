import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { menuData } from '../../../constants/menuData';
import IMenuItemData from '../../../constants/IMenuItemData';

export default class NavBar extends Component {
  getDropDown = (menuItemData: IMenuItemData) => (
    <NavDropdown
      key={menuItemData.id}
      title={menuItemData.text}
      id="basic-nav-dropdown"
    >
      {this.getLinkElement(menuItemData.arrSub!, 'dropdown-item')}
    </NavDropdown>
  );

  getLinkElement = (arrMenu: Array<IMenuItemData>, className = 'nav-link') => {
    return arrMenu.map(item => {
      if (item.arrSub) {
        return this.getDropDown(item);
      }

      return (
        <Link key={item.id} to={item.link} className={className}>
          {item.text}
        </Link>
      );
    });
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">{this.getLinkElement(menuData)}</Nav>
      </Navbar>
    );
  }
}
