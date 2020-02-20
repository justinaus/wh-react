import React, { Component } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';

export default class Bid extends Component<IPage> {
  render() {
    return <PageLayout {...this.props}>Bid</PageLayout>;
  }
}
