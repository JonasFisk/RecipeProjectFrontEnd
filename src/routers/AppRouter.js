import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateRecipe from '../components/CreateRecipe';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Logout from '../components/Logout';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
