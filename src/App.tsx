import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
          <Route path={RouterPath.ABOUT}>
            <About />
          </Route>
          <Route path={RouterPath.NOTICE_LIST}>
            <NoticeList />
          </Route>
          <Route path={RouterPath.HOME}>
            <Redirect to={RouterPath.ABOUT} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
