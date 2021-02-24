import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ commponent: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          // <Redirect to="/login" msg={true} />
          <Redirect
            to={{
              pathname: '/login',
              state: { id: '123' },
            }}
          />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
