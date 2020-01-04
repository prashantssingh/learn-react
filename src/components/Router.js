import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Router exact path="/" component={StorePicker} />
      <Router path="/store/:id" component={App} />
      <Router component={NotFound} />    
    </Switch>
  </BrowserRouter>
);

export default Router;