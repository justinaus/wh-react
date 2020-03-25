import React, { useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { MenuId } from '../../enums/MenuId';
import { useDispatch, useSelector } from 'react-redux';
import { createGetBidsActionAsync } from '../../store/bid/actions';
import { RootState } from '../../store';

const Bids = (props: IPageProps) => {
  const bidsState = useSelector((state: RootState) => state.bids);
  const datas = bidsState.datas;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('get bids datas');
    dispatch(createGetBidsActionAsync());
  }, [dispatch]);

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
