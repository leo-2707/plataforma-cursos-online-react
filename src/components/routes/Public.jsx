import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Public = (props) => {
  const isLogged = true;

  if (isLogged) {
    return <Redirect to='/' />;
  }
  return <Route {...props} component={props.component} />;
};

export default Public;
