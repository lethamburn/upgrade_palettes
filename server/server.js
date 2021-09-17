//Imports
const express = require("express");
const logger = require("morgan");
const users = require("./app/api/routes/user.routes");
const colors = require("./app/api/routes/color.routes");
const mongoose = require("./app/config/database");
const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");

//Config
const app = express();
mongoose.connect();
app.set("secretKey", "nodeRestApi"); // jwt secret token
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// public route
app.use("/users", users);
app.use("/colors", colors);

app.use(function (req, res, next) {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

// handle errors
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404)
    res.status(404).json({ message: HTTPSTATUSCODE[404] });
  else res.status(500).json({ message: HTTPSTATUSCODE[500] });
});
app.listen(3000, function () {
  console.log("Node server listening on port 3000");
});
