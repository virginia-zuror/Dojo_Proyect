import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { userAuth } from '../Context/UserContext';

const Header = () => {
  const { logout } = userAuth();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={''}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'gallery'}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={'about'}>About</NavLink>
          </li>
          {localStorage.getItem('user') && (
            <li>
              <NavLink to={'users'}>Users</NavLink>
            </li>
          )}
          {localStorage.getItem('user') && (
            <button onClick={() => logout()}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
