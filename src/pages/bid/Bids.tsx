import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { MenuId } from '../../enums/MenuId';
import IPostModel from '../../interfaces/IPostModel';
import { ApiPath } from '../../enums/ApiPath';
import http from '../../services/http';

const Bids = (props: IPageProps) => {
  const [datas, setDatas] = useState<IPostModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    http
      .get(ApiPath.Bids)
      .then(response => {
        const result: IPostModel[] = response.data;
        setDatas(result);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

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
