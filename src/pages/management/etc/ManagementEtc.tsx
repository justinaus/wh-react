import React, { Component } from 'react';
import PageLayout from '../../../components/layout/PageLayout';
import { IPageProps } from '../../../interfaces/IPageProps';
import { MenuId } from '../../../enums/MenuId';

export default class ManagementEtc extends Component<IPageProps> {
  render() {
    return (
      <PageLayout
        {...this.props}
        menuId={MenuId.Management}
        subMenuId={MenuId.ManagementEtc}
      >
        ManagementEtc
      </PageLayout>
    );
  }
}
