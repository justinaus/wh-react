import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface IProps {
  link: string;
  text: string;
  isSelected: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

export default class NavItem extends Component<IProps> {
  render() {
    const { link, text, isSelected, onMouseOver, onMouseOut } = this.props;

    const className = cx({
      wrapper: true,
      selected: isSelected,
    });

    return (
      <NavLink
        className={className}
        to={link}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {text}
      </NavLink>
    );
  }
}
