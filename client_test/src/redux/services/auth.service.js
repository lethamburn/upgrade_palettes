import axios from "axios";
import { REGISTER_USER, LOGIN_USER } from "../../api/fetch_routes";

const register = (data) => {
  return axios.post(REGISTER_USER, {
    data,
  });
};

const login = async (data) => {
  debugger
  const infoLogin = {
    email: data.email,
    password: data.password,
  };
  const res = await axios.post(LOGIN_USER, infoLogin);

  //TODO HACER CLASE Y NO DEVOLVER UN NULL
  const response = res
    ? window.localStorage.setItem("user", JSON.stringify(res.data))
    : null;

  return response;
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
