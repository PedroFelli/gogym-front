import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Matriculas from '../pages/Matriculas';
import PlansEdit from '../pages/Plan/Edit';
import PlansList from '../pages/Plan/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/matriculas" component={Matriculas} isPrivate />
      <Route path="/plano/" exact component={PlansList} isPrivate />
      <Route path="/plano/:id" component={PlansEdit} isPrivate />
    </Switch>
  );
}
