import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import About from './pages/About';
import NoticeList from './pages/notice/NoticeList';

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
