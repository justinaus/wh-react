import React, { Component } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';
import ITodoModel from '../../interfaces/ITodoModel';
import { ApiPath } from '../../enums/ApiPath';
import http from '../../services/http';
import { Link } from 'react-router-dom';
import { RouterPath } from '../../enums/RouterPath';

interface IState {
  datas: ITodoModel[];
}

export default class Products extends Component<IPage, IState> {
  constructor(props: IPage) {
    super(props);

    this.state = {
      datas: [],
    };

    this.getData();
  }

  getData = async () => {
    const path = ApiPath.Products;

    http
      .get(path)
      .then(response => {
        const result: ITodoModel[] = response.data;

        this.setState({ datas: result });
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  render() {
    const { datas } = this.state;

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
      <PageLayout {...this.props}>
        <table>
          <tbody>{items}</tbody>
        </table>
      </PageLayout>
    );
  }
}
