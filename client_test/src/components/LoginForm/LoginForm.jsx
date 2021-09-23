import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth";

const LoginForm = (props) => {
  const history = useHistory();
  const [error, setError] = useState("");

  const submitForm = async (ev) => {
    ev.preventDefault();
    setError("");

    try {
      const { email, password } = ev.target;
      const data = {
        email: email.value,
        password: password.value,
      };
      console.log("data", data);
      login(data);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
