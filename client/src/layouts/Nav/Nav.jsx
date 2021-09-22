import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/palettes">
        <button>Palettes</button>
      </Link>
      <Link to="/colors">
        <button>Colors</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Nav;
