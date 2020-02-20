import React, { Component } from 'react';
import NavBar from './NavBar';
import { IHasMenu } from '../../../interfaces/IHasMenu';

export default class Header extends Component<IHasMenu> {
  render() {
    return (
      <header>
        <NavBar {...this.props} />
      </header>
    );
  }
}
