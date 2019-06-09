import React from 'react';
import { Link } from 'react-router-dom';

const NavBox = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Main Page</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/mealplan">Meal Plan</Link>
      </li>
    </ul>
  </nav>
);

export default NavBox;
