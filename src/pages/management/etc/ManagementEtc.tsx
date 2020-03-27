import React from 'react';
import PageLayout from '../../../components/layout/PageLayout';
import { IPageProps } from '../../../interfaces/IPageProps';
import { MenuId } from '../../../enums/MenuId';
import useOnlineStatus from '../../../hooks/useOnlineStatus';

const ManagementEtc = (props: IPageProps) => {
  const isOnline = useOnlineStatus();

  return (
    <PageLayout
      {...props}
      menuId={MenuId.Management}
      subMenuId={MenuId.ManagementEtc}
    >
      ManagementEtc
      <div>isOnline: {String(isOnline)}</div>
    </PageLayout>
  );
};

export default ManagementEtc;
