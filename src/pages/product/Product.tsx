import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPageProps } from '../../interfaces/IPageProps';
import { ApiPath } from '../../enums/ApiPath';
import http from '../../services/http';
import ITodoModel from '../../interfaces/ITodoModel';
import Input from '../../components/common/input/Input';
import { MenuId } from '../../enums/MenuId';
import Axios, { CancelTokenSource } from 'axios';

const Product = (props: IPageProps) => {
  const [itemData, setData] = useState<ITodoModel | null>(null);

  const [strMyName, setMyName] = useState<string>('');

  const params: any = props.match.params;
  const itemId = params.id || null;

  useEffect(() => {
    if (!itemId) return;

    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    getData(itemId, source);
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [itemId]);

  const getData = (itemId: string, source: CancelTokenSource) => {
    const path = `${ApiPath.Products}/${itemId}`;

    http
      .get(path, { cancelToken: source.token })
      .then(response => {
        const result: ITodoModel = response.data;
        setData(result);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const onChangeInputTitle = (value: string) => {
    if (!itemData) {
      return;
    }

    setData({ ...itemData, title: value });
  };

  return (
    <PageLayout {...props} menuId={MenuId.Product}>
      <div>Product</div>
      <div>
        my name:
        <Input
          value={strMyName}
          placeholder={'input your name'}
          handleChange={(value: string) => setMyName(value)}
          maxLength={3}
        />
      </div>
      {itemData && (
        <div>
          <div>userId: {itemData.userId}</div>
          <div>id: {itemData.id}</div>
          <div>
            title:{' '}
            <Input value={itemData.title} handleChange={onChangeInputTitle} />
          </div>
          <div>completed: {String(itemData.completed)}</div>
        </div>
      )}
    </PageLayout>
  );
};

export default Product;
