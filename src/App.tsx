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
const Management = lazy(() => import('./pages/management/Management'));

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
            path={RouterPath.Management}
            render={props => (
              <Management {...props} menuId={MenuId.Management} />
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
