import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { MenuId } from '../../enums/MenuId';

const Bid = (props: IPageProps) => {
  return (
    <PageLayout {...props} menuId={MenuId.Bid}>
      Bid
    </PageLayout>
  );
};

export default Bid;
