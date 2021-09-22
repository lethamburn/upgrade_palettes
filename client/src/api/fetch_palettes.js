import { GET_PALETTES } from "./fetch_routes";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const getPalettes = async () => {
  const palettes = await fetch(GET_PALETTES, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resPalettes = await palettes.json();
  return resPalettes;
};

export default getPalettes;
