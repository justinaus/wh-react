import React, { Component } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';

export default class Product extends Component<IPage> {
  render() {
    const params: any = this.props.match.params;

    return (
      <PageLayout {...this.props}>
        <div>Product {params.id || ''}</div>
      </PageLayout>
    );
  }
}
