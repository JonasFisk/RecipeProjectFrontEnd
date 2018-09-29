import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateRecipe from '../components/CreateRecipe';
import Header from '../components/Header';
import SelectTags from '../components/SelectTags';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={CreateRecipe} />
        <Route path="/select" component={SelectTags} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
