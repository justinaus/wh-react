import React, { Component, lazy } from 'react';
import { IPage } from '../../interfaces/IPage';
import { Route, Switch } from 'react-router-dom';
import { RouterPath } from '../../enums/RouterPath';
import { MenuId } from '../../enums/MenuId';

const ManagementUsers = lazy(() => import('./user/ManagementUsers'));
const ManagementUser = lazy(() => import('./user/ManagementUser'));
const ManagementEtc = lazy(() => import('./etc/ManagementEtc'));

export default class Management extends Component<IPage> {
  render() {
    return (
      <Switch>
        <Route
          path={RouterPath.ManagementUsers}
          render={props => (
            <ManagementUsers
              {...props}
              menuId={MenuId.Management}
              subMenuId={MenuId.ManagementUser}
            />
          )}
        />
        <Route
          path={`${RouterPath.ManagementUser}/:id`}
          render={props => (
            <ManagementUser
              {...props}
              menuId={MenuId.Management}
              subMenuId={MenuId.ManagementUser}
            />
          )}
        />
        <Route
          path={RouterPath.ManagementEtc}
          render={props => (
            <ManagementEtc
              {...props}
              menuId={MenuId.Management}
              subMenuId={MenuId.ManagementEtc}
            />
          )}
        />
      </Switch>
    );
  }
}
