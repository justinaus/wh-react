import React from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Header = () => {
  const selectMenuState = (state: RootState) => {
    return state.menu;
  };

  const menuState = useSelector(selectMenuState);

  return (
    <header>
      <NavBar menuId={menuState.menuId} subMenuId={menuState.subMenuId} />
    </header>
  );
};

export default Header;
