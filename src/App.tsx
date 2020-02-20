import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { RouterPath } from './enums/RouterPath';
import { MenuId } from './enums/MenuId';

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
      <Suspense fallback={<div>Suspense fallback</div>}>
        <Switch>
          <Route
            path={RouterPath.Products}
            render={props => <Products {...props} menuId={MenuId.Product} />}
          />
          <Route
            path={`${RouterPath.Product}/:id`}
            render={props => <Product {...props} menuId={MenuId.Product} />}
          />
          <Route
            path={RouterPath.Bids}
            render={props => <Bids {...props} menuId={MenuId.Bid} />}
          />
          <Route
            path={`${RouterPath.Bid}/:id`}
            render={props => <Bid {...props} menuId={MenuId.Bid} />}
          />
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
          <Route path={RouterPath.Home}>
            <Redirect to={RouterPath.Products} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
