import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { RouterPath } from './enums/RouterPath';

const Products = lazy(() => import('./pages/product/Products'));
const Product = lazy(() => import('./pages/product/Product'));
const Bids = lazy(() => import('./pages/bid/Bids'));
const Bid = lazy(() => import('./pages/bid/Bid'));
const ManagementUsers = lazy(() =>
  import('./pages/management/user/ManagementUsers')
);
const ManagementUser = lazy(() =>
  import('./pages/management/user/ManagementUser')
);
const ManagementEtc = lazy(() =>
  import('./pages/management/etc/ManagementEtc')
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path={RouterPath.Products}>
            <Products />
          </Route>
          <Route path={RouterPath.Product}>
            <Product />
          </Route>
          <Route path={RouterPath.Bids}>
            <Bids />
          </Route>
          <Route path={RouterPath.Bid}>
            <Bid />
          </Route>
          <Route path={RouterPath.ManagementUsers}>
            <ManagementUsers />
          </Route>
          <Route path={RouterPath.ManagementUser}>
            <ManagementUser />
          </Route>
          <Route path={RouterPath.ManagementEtc}>
            <ManagementEtc />
          </Route>
          <Route path={RouterPath.Home}>
            <Redirect to={RouterPath.Products} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
