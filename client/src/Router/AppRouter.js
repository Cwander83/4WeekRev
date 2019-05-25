import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../components/pages/Landing';
import MealPlans from '../components/pages/MealPlans';
import WorkoutPreview from '../components/pages/WorkoutPreview';
import NotFound from '../components/pages/NotFound';
import Dashboard from '../components/pages/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mealplan" component={MealPlans} />
        <Route path="/workoutpreview" component={WorkoutPreview} />
        <Route path="/dashboard" component={Dashboard} />

        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;
