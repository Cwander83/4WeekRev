import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <header>
      <NavLink exact activeClassName="live" to="/">
        <h1>Four Week Revolution</h1>
      </NavLink>
    </header>

    <ul className="headerNav">
      <li />
      <li>
        <NavLink activeClassName="live" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="live" to="/mealplan">
          Meal Plan
        </NavLink>
      </li>
    </ul>
  </>
);

export default Header;
