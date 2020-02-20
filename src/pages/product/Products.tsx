import React, { Component } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';

export default class Products extends Component<IPage> {
  render() {
    return <PageLayout {...this.props}>Products</PageLayout>;
  }
}
