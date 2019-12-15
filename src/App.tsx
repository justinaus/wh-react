import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { RouterPath } from './enums/RouterPath';

const About = lazy(() => import('./pages/About'));
const NoticeList = lazy(() => import('./pages/notice/NoticeList'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path={RouterPath.About}>
            <About />
          </Route>
          <Route path={RouterPath.NoticeList}>
            <NoticeList />
          </Route>
          <Route path={RouterPath.Home}>
            <Redirect to={RouterPath.About} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
