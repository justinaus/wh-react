import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

export default class PageLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />

        <Content>{children}</Content>

        <Footer />
      </div>
    );
  }
}
