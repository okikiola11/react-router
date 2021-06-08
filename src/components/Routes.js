import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './Nav';
import Profile from './Profile';
import Banner from './Banner';
import BannerDetail from './BannerDetail';

const Routes = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/banner'>
          <Banner />
        </Route>
        <Route exact path='/'>
          <App />
        </Route>
        <Route exact path='/banner/:id' component={BannerDetail} />
      </Switch>
    </Router>
  )
}

export default Routes;