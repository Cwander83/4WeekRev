import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import MealPlan from '../pages/MealPlan';
import WorkoutPreview from '../pages/WorkoutPreview';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mealplan" component={MealPlan} />
        <Route path="/workoutpreview" component={WorkoutPreview} />
        <Route path="/dashboard" component={Dashboard} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default AppRouter;
