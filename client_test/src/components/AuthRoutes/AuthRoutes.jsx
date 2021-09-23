import React from "react";
import { Redirect, Route } from "react-router";

const AuthRoutes = (props) => {
  if (props.user === null) {
    return <div> Loading... </div>;
  }

  if (props.user === false) {
    return <Redirect to="/login" />;
  }

  if (props.user) {
    return <Route {...props} />;
  }
};

export default AuthRoutes;
