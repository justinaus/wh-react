import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { Link } from 'react-router-dom';
import { RouterPath } from '../../enums/RouterPath';
import { MenuId } from '../../enums/MenuId';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { createGetProductsAction } from '../../store/product/actions';
import useFetch from '../../hooks/useFetch';

const Products = (props: IPageProps) => {
  const productsState = useSelector((state: RootState) => state.products);
  const datas = productsState.datas;

  useFetch(createGetProductsAction);

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
