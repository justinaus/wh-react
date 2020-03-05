import React, { Component } from 'react';
import indicator from '../../../assets/indicator.svg';
import styles from './Progressbar.module.css';

export default class Progressbar extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src={indicator} />
      </div>
    );
  }
}
