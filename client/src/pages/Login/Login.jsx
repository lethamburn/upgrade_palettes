import React from "react";
import { LoginForm } from "../../components";
const Login = (props) => {
  return (
    <div>
      <h3>Login</h3>
      <LoginForm props={props} />
    </div>
  );
};

export default Login;
