import React, { Suspense, lazy, Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { RouterPath } from './enums/RouterPath';
import { MenuId } from './enums/MenuId';
import Progressbar from './components/layout/progressbar/Progressbar';
import { connect } from 'react-redux';
import { AppState } from './store';
import { ProgressbarState } from './store/progressbar/types';

const Products = lazy(() => import('./pages/product/Products'));
const Product = lazy(() => import('./pages/product/Product'));
const Bids = lazy(() => import('./pages/bid/Bids'));
const Bid = lazy(() => import('./pages/bid/Bid'));
const Management = lazy(() => import('./pages/management/Management'));

interface IProps {
  progressbarState: ProgressbarState;
}

class App extends Component<IProps> {
  render() {
    const { progressbarState } = this.props;

    return (
      <div>
        <Router>
          <Suspense fallback={<div>Suspense fallback</div>}>
            <Switch>
              <Route
                path={RouterPath.Products}
                render={props => (
                  <Products {...props} menuId={MenuId.Product} />
                )}
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
        {progressbarState.isShow && <Progressbar />}
      </div>
    );
  }
}

// const App: React.FC = () => {
//   return (
//     <div>
//       <Router>
//         <Suspense fallback={<div>Suspense fallback</div>}>
//       </Router>
//       <Progressbar />
//     </div>
//   );
// };

const mapStateToProps = (state: AppState) => ({
  progressbarState: state.progressbar,
});

export default connect(mapStateToProps)(App);
