import React from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import logo from '../../../assets/logo.svg';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const selectMenuState = (state: RootState) => {
    return state.menu;
  };

  const menuState = useSelector(selectMenuState);

  return (
    <header className={styles.wrapper}>
      <NavLink className={styles.home} to="/">
        <img className={styles.img} src={logo} />
      </NavLink>
      <NavBar menuId={menuState.menuId} />
      <a className={styles.rightButton} href="http://github.com">
        Github
      </a>
    </header>
  );
};

export default Header;
