import React from 'react';
import PageLayout from '../../../components/layout/PageLayout';
import { IPageProps } from '../../../interfaces/IPageProps';
import { MenuId } from '../../../enums/MenuId';
import useOnlineStatus from '../../../hooks/useOnlineStatus';

import styles from './ManagementEtc.module.scss';

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
      <div className={styles.box}></div>
    </PageLayout>
  );
};

export default ManagementEtc;
