import React, { Component } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';
import { ApiPath } from '../../enums/ApiPath';
import http from '../../services/http';
import ITodoModel from '../../interfaces/ITodoModel';
import logo from '../../assets/logo.svg';
import Input from '../../components/common/input/Input';

interface IState {
  model: ITodoModel | null;
  strTest: string;
}

export default class Product extends Component<IPage, IState> {
  private itemId: string | null = null;

  constructor(props: IPage) {
    super(props);

    this.state = { model: null, strTest: '' };

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

  onChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { model } = this.state;
    if (!model) return;

    model.title = e.currentTarget.value;

    this.setState({ model: model });
  };

  onChangeInputTest = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ strTest: e.currentTarget.value });
  };

  render() {
    const { model, strTest } = this.state;

    return (
      <PageLayout {...this.props}>
        <div>
          Product {this.itemId}
          <Input
            value={strTest}
            placeholder={'input here'}
            handleChange={this.onChangeInputTest}
            maxLength={2}
          />
          {model && (
            <div>
              <div>userId: {model.userId}</div>
              <div>id: {model.id}</div>
              <div>
                title:{' '}
                <Input
                  value={model.title}
                  handleChange={this.onChangeInputTitle}
                />
              </div>
              <div>completed: {String(model.completed)}</div>
            </div>
          )}
          <img src={'/logo192.png'} />
          <img src={logo} />
        </div>
      </PageLayout>
    );
  }
}
