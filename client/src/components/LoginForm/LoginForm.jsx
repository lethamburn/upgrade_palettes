import React, { useState } from "react";
import loginUser from "../../api/fetch_user";

const LoginForm = (props) => {
  const [error, setError] = useState("");

  const submitForm = async (ev) => {
    ev.preventDefault();
    setError("");

    try {
      const { email, password } = ev.target;
      const form = {
        email: email.value,
        password: password.value,
      };

      const user = await loginUser(form);
      props.saveUser(user.data.user);
      
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
