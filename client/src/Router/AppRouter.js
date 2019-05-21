import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../components/pages/Landing';
import MealPlans from '../components/pages/MealPlans';
import WorkoutPreview from '../components/pages/WorkoutPreview';
import NotFound from '../components/pages/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mealplan" component={MealPlans} />
        <Route path="/workoutpreview" component={WorkoutPreview} />
        
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
