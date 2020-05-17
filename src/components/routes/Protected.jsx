import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = (props) => {
  const isLogged = localStorage.getItem('token');

  if (!isLogged) {
    return <Redirect to='/login' />;
  }
  return <Route {...props} component={props.component} />;
};

export default Protected;
