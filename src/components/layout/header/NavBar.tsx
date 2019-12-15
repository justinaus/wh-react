import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { menuData } from '../../../constants/menuData';
import IMenuItemData from '../../../constants/IMenuItemData';

import classnames from 'classnames';

import styles from './NavBar.module.css';

export default class NavBar extends Component {
  test = (getDropDownItems = (arrMenu: Array<IMenuItemData>) => {
    return arrMenu.map(item => {
      return (
        <NavDropdown.Item as={Link} key={item.id} to={item.link}>
          {item.text}
        </NavDropdown.Item>
      );
    });
  });

  navItems = () => {
    console.log(menuData);
    return menuData.map(item => {
      if (!item.arrSub) {
        return (
          <Nav.Link as={Link} key={item.id} to={item.link}>
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

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">{this.navItems}</Nav>
      </Navbar>
    );
  }
}
