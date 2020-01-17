import React, { Component } from 'react';

import styles from './Content.module.css';

export default class Content extends Component {
  render() {
    const { children } = this.props;

    return <div className={styles.wrapper}>{children}</div>;
  }
}
