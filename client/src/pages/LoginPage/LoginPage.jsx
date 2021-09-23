import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions";

const LoginPage = (props) => {
  const componentDidMount = () => {
    this.props.getUsers();
  };
  const handleDeleteUser = (id) => {
    return (e) => this.props.deleteUser(id);
  };

  const { user, users } = this.props;
  return <div></div>;
};

export default LoginPage;