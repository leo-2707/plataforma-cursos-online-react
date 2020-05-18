import React from 'react';
import { NavLink } from 'react-router-dom';

const logout = () => {
  localStorage.removeItem('token');
  window.location = '/login';
};

const PrivateMenu = () => {
  return (
    <ul>
      <li>
        <NavLink exact to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/courses'>Courses</NavLink>
      </li>
      <li>
        <NavLink to='/specialities'>Specialities</NavLink>
      </li>
      <li>
        <NavLink to='/teachers'>Teachers</NavLink>
      </li>
      <li>
        <span onClick={() => logout()}>Logout</span>
      </li>
    </ul>
  );
};

export default PrivateMenu;
