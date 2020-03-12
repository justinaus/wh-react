import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import ITodoModel from '../../interfaces/ITodoModel';
import { ApiPath } from '../../enums/ApiPath';
import http from '../../services/http';
import { Link } from 'react-router-dom';
import { RouterPath } from '../../enums/RouterPath';
import { MenuId } from '../../enums/MenuId';

const Products = (props: IPageProps) => {
  const [datas, setDatas] = useState<ITodoModel[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    http
      .get(ApiPath.Products)
      .then(response => {
        const result: ITodoModel[] = response.data;
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
        <td>
          <Link to={`${RouterPath.Product}/${item.id}`}>{item.title}</Link>
        </td>
      </tr>
    );
  });

  return (
    <PageLayout {...props} menuId={MenuId.Product}>
      <table>
        <tbody>{items}</tbody>
      </table>
    </PageLayout>
  );
};

export default Products;
