import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
import classNames from 'classnames/bind';
import IMenuItemData from '../../../interfaces/IMenuItemData';

const cx = classNames.bind(styles);

interface IProps {
  itemData: IMenuItemData;
  isSelected: boolean;
}

export default class NavItem extends Component<IProps> {
  render() {
    const { itemData, isSelected } = this.props;

    const className = cx('a', {
      selected: isSelected,
    });

    return (
      <NavLink className={className} to={itemData.link} data-cy="link">
        {itemData.text}
      </NavLink>
    );
  }
}
