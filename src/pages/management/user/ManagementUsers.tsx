import React from 'react';
import PageLayout from '../../../components/layout/PageLayout';
import { IPageProps } from '../../../interfaces/IPageProps';
import { MenuId } from '../../../enums/MenuId';
import useOnlineStatus from '../../../hooks/useOnlineStatus';

import styles from './ManagementUsers.module.css';

const onClickBox = (e: React.MouseEvent) => {
  const box = e.target as HTMLElement;

  // console.log(getComputedStyle(box).marginLeft);

  box.style.marginLeft = e.clientX + 'px';
};

const ManagementUsers = (props: IPageProps) => {
  const isOnline = useOnlineStatus();

  return (
    <PageLayout
      {...props}
      menuId={MenuId.Management}
      subMenuId={MenuId.ManagementUser}
    >
      ManagementUsers
      <div>isOnline: {String(isOnline)}</div>
      <div className={styles.box}></div>
      <div className={styles.box2} onClick={onClickBox}></div>
      <div className={styles.box3}></div>
    </PageLayout>
  );
};

export default ManagementUsers;
