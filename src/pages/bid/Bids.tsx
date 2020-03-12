import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { MenuId } from '../../enums/MenuId';
import logo from '../../assets/logo.svg';

const Bids = (props: IPageProps) => {
  return (
    <PageLayout {...props} menuId={MenuId.Bid}>
      Bids
      <img src={'/logo192.png'} alt="must have an alt prop" />
      <img src={logo} alt="must have an alt prop" />
    </PageLayout>
  );
};

export default Bids;
