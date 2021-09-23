import axios from "axios";
import authHeader from "./auth-header";
import { LOGIN_USER } from "../../api/fetch_routes";

const getUser = () => {
  return axios.get(LOGIN_USER, { headers: authHeader() });
};

export default { getUser };
