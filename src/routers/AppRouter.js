import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateRecipe from '../components/CreateRecipe';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Logout from '../components/Logout';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateRecipe from '../components/CreateRecipe';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Logout from '../components/'

export class AppRouter extends Component {
  render() {

    const { authenticated } = this.props
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/create" component={CreateRecipe} />
             {authenticated ? } <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated.authenticated
});

export default connect(mapStateToProps)(AppRouter);
*/
