import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./fetch_routes";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const loginUser = async (form) => {
  const loginFetch = await fetch(LOGIN_USER, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(form),
  });
  const res = await loginFetch.json();
  if (!loginFetch.ok) {
    throw new Error("No se ha podido efectuar el login", res.message);
  }
  return res;
};

export default loginUser;
