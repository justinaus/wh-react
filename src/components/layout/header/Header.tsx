import React from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import styles from './Header.module.css';

const Header = () => {
  const selectMenuState = (state: RootState) => {
    return state.menu;
  };

  const menuState = useSelector(selectMenuState);

  return (
    <header className={styles.wrapper}>
      <NavBar menuId={menuState.menuId} />
    </header>
  );
};

export default Header;
