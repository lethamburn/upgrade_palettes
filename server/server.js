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
const cors = require("cors");

//Conectamos con la db
connect();

//Config app
const app = express();

app.set("secretKey", "nodeRestApi"); // jwt secret token

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
}));

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
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
})

app.disable('x-powered-by')
//Levantamos el servidor
app.listen(3000, () => {
  console.log("Node server listening on port 3000");
});
