import React, { Component } from 'react';
import styles from './SubMenu.module.css';
import { NavLink } from 'react-router-dom';
import IMenuItemData from '../../../constants/IMenuItemData';
import { MenuId } from '../../../enums/MenuId';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
  arrSub: IMenuItemData[];
  selectedId: MenuId;
}

export default class SubMenu extends Component<IProps> {
  getItems = () => {
    const { arrSub, selectedId } = this.props;

    return arrSub.map(item => {
      const className = cx({
        item,
        selected: item.id === selectedId,
      });

      return (
        <li key={item.id}>
          <NavLink className={className} to={item.link}>
            {item.text}
          </NavLink>
        </li>
      );
    });
  };

  render() {
    const items = this.getItems();

    return <ul className={styles.wrapper}>{items}</ul>;
  }
}
