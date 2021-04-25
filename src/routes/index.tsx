import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Overview from '../pages/Overview';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Transactions from '../pages/Transactions';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={Register} />

        <Route path="/overview" component={Overview} isPrivate />
        <Route path="/transactions" component={Transactions} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
