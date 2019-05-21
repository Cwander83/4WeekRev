import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <h1>
    OH NO!! SOMETHING WENT WRONG <Link to="/">CLICK HERE</Link> TO GO BACK TO
    HOME PAGE
  </h1>
);

export default NotFound;
