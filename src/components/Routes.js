import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Settings from './Settings';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

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