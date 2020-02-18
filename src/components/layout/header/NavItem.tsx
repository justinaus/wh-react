import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
import classNames from 'classnames/bind';
import IMenuItemData from '../../../constants/IMenuItemData';
import { MenuId } from '../../../enums/MenuId';

const cx = classNames.bind(styles);

interface IProps {
  itemData: IMenuItemData;
  isSelected: boolean;
  subSelectedId?: MenuId | null;
}

export default class NavItem extends Component<IProps> {
  subItems = (arrSub: IMenuItemData[]) => {
    const { subSelectedId } = this.props;

    return (
      <ul className={styles.ul}>
        {arrSub.map(item => {
          return (
            <NavItem
              key={item.id}
              itemData={item}
              isSelected={subSelectedId === item.id}
            />
          );
        })}
      </ul>
    );
  };

  render() {
    const { itemData, isSelected } = this.props;

    const className = cx({
      a: true,
      selected: isSelected,
    });

    return (
      <li>
        <NavLink className={className} to={itemData.link}>
          {itemData.text}
        </NavLink>
        {itemData.arrSub && this.subItems(itemData.arrSub)}
      </li>
    );
  }
}
