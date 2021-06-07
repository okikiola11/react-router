import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './Nav';
import Profile from './Profile';
import Settings from './Settings';

const Routes = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Route exact path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;