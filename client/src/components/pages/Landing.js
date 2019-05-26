import React from 'react';
import { Link } from 'react-router-dom';

//import cage from '../../images/Untitled2.png'
//import powerRack from '../../images/Power-Cage2.png'

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="title">
          <h4>welcome to</h4>

          <h1>the revolution</h1>
          <p>
            This is a 4 week kick your butt into shape kinda workout!!
            <br /> Check out the sample workout and meal plans.
            <br /> If ready to get started, head over to the dashboard and get
            started.
          </p>
        </div>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/workoutpreview">Workout Preview</Link>
          </li>
          <li>
            <Link to="/mealplans">Meal Plans</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Landing;
