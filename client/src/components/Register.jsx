import React, { useState } from "react";
import { register } from "../redux/actions/registerActions";

const Register = () => {
  const submitForm = async (ev) => {
    ev.preventDefault();

    try {
      const { email, password } = ev.target;
      const data = {
        email: email.value,
        password: password.value,
      };
      console.log("data", data);
      register(data);
    } catch (error) {}
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

export default Register;
