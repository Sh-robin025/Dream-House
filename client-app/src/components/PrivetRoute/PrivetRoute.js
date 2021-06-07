import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
// import { UserContext } from "../../App";

const PrivetRoute = ({ children, ...rest }) => {
  const user = useSelector(state => state.user.loggedInUser)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
