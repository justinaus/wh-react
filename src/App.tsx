import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const About = lazy(() => import('./pages/About'));
const NoticeList = lazy(() => import('./pages/notice/NoticeList'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/notices">
            <NoticeList />
          </Route>
          <Route path="/">
            <Redirect to="about" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
