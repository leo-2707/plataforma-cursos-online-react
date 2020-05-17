import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = (props) => {
  const isLogged = true;

  if (!isLogged) {
    return <Redirect to='/login' />;
  }
  return <Route {...props} component={props.component} />;
};

export default Protected;
