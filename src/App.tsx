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
const Management = lazy(() => import('./pages/management/Management'));

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Suspense fallback</div>}>
          <Switch>
            <Route path={RouterPath.Products} component={Products} />
            <Route path={`${RouterPath.Product}/:id`} component={Product} />
            <Route path={RouterPath.Bids} component={Bids} />
            <Route path={`${RouterPath.Bid}/:id`} component={Bid} />
            <Route path={RouterPath.Management} component={Management} />
            <Route path={RouterPath.Home}>
              <Redirect to={RouterPath.Products} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
