import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Texts from '../pages/Texts';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/texts" component={Texts} />
  </Switch>
);

export default Routes;
