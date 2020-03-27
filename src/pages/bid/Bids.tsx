import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { MenuId } from '../../enums/MenuId';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { createGetBidsAction } from '../../store/bid/actions';
import useFetch from '../../hooks/useFetch';

const Bids = (props: IPageProps) => {
  const bidsState = useSelector((state: RootState) => state.bids);
  const datas = bidsState.datas;

  useFetch(createGetBidsAction);

  const items = datas.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
      </tr>
    );
  });

  return (
    <PageLayout {...props} menuId={MenuId.Bid}>
      <table>
        <tbody>{items}</tbody>
      </table>
    </PageLayout>
  );
};

export default Bids;
