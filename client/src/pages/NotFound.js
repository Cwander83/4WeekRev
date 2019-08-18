import React from 'react';
import { Link } from 'react-router-dom';
import homeAlone from '../images/Home-Alone.jpg';

const NotFound = () => (
  <div className="notFound">
    <div className="box">
      <img src={homeAlone} alt="404 not found" />
      <h1>
        OH NO!! Something went wrong! <Link to="/">CLICK HERE</Link> TO GO BACK
        TO HOME PAGE
      </h1>
    </div>
  </div>
);

export default NotFound;
