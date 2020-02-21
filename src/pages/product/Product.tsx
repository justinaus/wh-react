import React, { Component } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';
import { ApiPath } from '../../enums/ApiPath';
import http from '../../services/http';
import ITodoModel from '../../interfaces/ITodoModel';

interface IState {
  model: ITodoModel | null;
}

export default class Product extends Component<IPage, IState> {
  private itemId: string | null = null;

  constructor(props: IPage) {
    super(props);

    this.state = { model: null };

    const params: any = this.props.match.params;

    this.itemId = params.id || null;
    if (!this.itemId) return;

    this.getData(this.itemId);
  }

  getData = async (itemId: string) => {
    const path = `${ApiPath.Products}/${itemId}`;

    http
      .get(path)
      .then(response => {
        const result: ITodoModel = response.data;

        this.setState({ model: result });
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  render() {
    const { model } = this.state;

    return (
      <PageLayout {...this.props}>
        <div>
          Product {this.itemId}
          {model && (
            <div>
              <div>userId: {model.userId}</div>
              <div>id: {model.id}</div>
              <div>title: {model.title}</div>
              <div>completed: {String(model.completed)}</div>
            </div>
          )}
        </div>
      </PageLayout>
    );
  }
}
