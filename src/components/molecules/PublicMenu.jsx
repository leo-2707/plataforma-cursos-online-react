import React from 'react'
import { NavLink } from 'react-router-dom';

const PublicMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
    </ul>
  );
}

export default PublicMenu
