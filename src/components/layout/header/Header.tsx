import React, { Component } from 'react';
import NavBar from './NavBar';

import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.wrapper}>
        <NavBar />
      </header>
    );
  }
}
