// Cargamos el modelo recien creado
const User = require("../models/User");
// Cargamos el módulo de bcrypt
const bcrypt = require("bcrypt");
// Cargamos el módulo de jsonwebtoken
const jwt = require("jsonwebtoken");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
module.exports = {
  create: function (req, res, next) {
    User.create(
      {
        name: req.body.name,
        emoji: req.body.emoji,
        email: req.body.email,
        password: req.body.password,
      },
      function (err, result) {
        if (err) next(err);
        else
          res.json({ status: 201, message: HTTPSTATUSCODE[201], data: null });
      }
    );
  },
  authenticate: function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );
          res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { user: userInfo, token: token },
          });
        } else {
          res.json({ status: 400, message: HTTPSTATUSCODE[400], data: null });
        }
      }
    });
  },
  
};
