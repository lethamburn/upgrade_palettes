import { GET_COLORS } from "./fetch_routes";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const getColors = async () => {
  const colors = await fetch(GET_COLORS, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resColors = await colors.json();
  return resColors;
};

export default getColors;
