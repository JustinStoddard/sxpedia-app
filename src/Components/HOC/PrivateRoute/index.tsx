import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * HOC for making sure a user is authorized before using a route
 * @Returns Authenticated Route
 */ 
export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user } = useAuth0();
 
  if (user) return <Route {...rest} component={(props: any) => <Component {...props} />} />
  return <Redirect to="/" />
};