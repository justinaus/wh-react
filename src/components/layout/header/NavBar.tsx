import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  numbers = [1, 2, 3, 4, 5];

  listItems = this.numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/notices" className="nav-link">
            Notice
          </Link>
        </Nav>
      </Navbar>
    );
  }
}
