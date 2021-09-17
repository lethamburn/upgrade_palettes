// Cargamos el modelo recien creado
const Color = require("../models/Color");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

//Codificamos las operaciones que se podran realizar con relacion a los colores
module.exports = {
  // Metodo para crear un nuevo color
  create: function (req, res, next) {
    Color.create(
      {
        hex: req.body.hex,
        name: req.body.name,
        rgb: req.body.rgb,
      },
      function (err, result) {
        if (err) next(err);
        else
          res.json({ status: 201, message: HTTPSTATUSCODE[201], data: result });
      }
    );
  },
  // Metodo para la busqueda de colors por ID
  getById: function (req, res, next) {
    console.log(req.body);
    Color.findById(req.params.colorId, function (err, colorInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { color: colorInfo },
        });
      }
    });
  },
};
