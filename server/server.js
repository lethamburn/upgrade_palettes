//Imports
const express = require("express");
const logger = require("morgan");
//Importamos la conexion a la db
const {connect} = require("./app/config/database");
//Importamos las rutas
const users = require("./app/api/routes/user.routes");
const colors = require("./app/api/routes/color.routes");
const palettes = require("./app/api/routes/palette.routes");
//Otras importaciones
const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");

//Conectamos con la db
connect();

//Config app
const app = express();

app.set("secretKey", "nodeRestApi"); // jwt secret token

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// public route
app.use("/users", users);
app.use("/colors", colors);
app.use("/palettes", palettes);

app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

// handle errors
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

//Levantamos el servidor
app.listen(3000, () => {
  console.log("Node server listening on port 3000");
});
