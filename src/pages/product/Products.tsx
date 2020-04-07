import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { Link } from 'react-router-dom';
import { RouterPath } from '../../enums/RouterPath';
import { MenuId } from '../../enums/MenuId';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { createGetProductsAction } from '../../store/product/actions';
import useFetch from '../../hooks/useFetch';
import Radio from '../../components/common/radio/Radio';

const Products = (props: IPageProps) => {
  const productsState = useSelector((state: RootState) => state.products);
  const datas = productsState.datas;

  useFetch(createGetProductsAction);

  const [selectedId, setSelectedId] = useState<string>('0');

  const radioDatas = [
    { id: '0', text: 'radio 0' },
    { id: '1', text: 'radio 1' },
    { id: '2', text: 'radio 2' },
  ];

  const onChangeRadio = (toId: string) => {
    setSelectedId(toId);
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
      <Radio
        datas={radioDatas}
        selectedId={selectedId}
        onChange={onChangeRadio}
      />
      <table>
        <tbody>{items}</tbody>
      </table>
    </PageLayout>
  );
};

export default Products;
