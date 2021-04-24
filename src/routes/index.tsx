import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Overview from '../pages/Overview';
import Transactions from '../pages/Transactions';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/overview" />
        <Route path="/overview" component={Overview} />
        <Route path="/transactions" component={Transactions} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
