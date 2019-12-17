import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { menuData } from '../../../constants/menuData';
import IMenuItemData from '../../../constants/IMenuItemData';

import classnames from 'classnames';

import styles from './NavBar.module.css';

export default class NavBar extends Component {
  getDropDownItems = (arrMenu: Array<IMenuItemData>) => {
    return arrMenu.map(item => {
      return (
        <NavDropdown.Item as={Link} key={item.id} to={item.link} className={styles.selectedDropDownItem}>
          {item.text}
        </NavDropdown.Item>
      );
    });
  };

  getLinkItems = () => {
    return menuData.map(item => {
      if (!item.arrSub) {
        return (
          <Nav.Link as={Link} key={item.id} to={item.link} className={styles.selected}>
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
  }

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
