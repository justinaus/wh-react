import React, { Component } from 'react';

export default class Nav extends Component {
  numbers = [1, 2, 3, 4, 5];

  listItems = this.numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));

  render() {
    return (
      <nav>
        <ul>{this.listItems}</ul>
      </nav>
    );
  }
}
