import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouterPath } from '../../enums/RouterPath';

const ManagementUsers = lazy(() => import('./user/ManagementUsers'));
const ManagementUser = lazy(() => import('./user/ManagementUser'));
const ManagementEtc = lazy(() => import('./etc/ManagementEtc'));

const Management = () => {
  return (
    <Switch>
      <Route path={RouterPath.ManagementUsers} component={ManagementUsers} />
      <Route
        path={`${RouterPath.ManagementUser}/:id`}
        component={ManagementUser}
      />
      <Route path={RouterPath.ManagementEtc} component={ManagementEtc} />
    </Switch>
  );
};

export default Management;
