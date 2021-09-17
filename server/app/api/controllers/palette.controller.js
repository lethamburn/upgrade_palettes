// Cargamos el modelo recien creado
const Palette = require("../models/Palette");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

//Codificamos las operaciones que se podran realizar con relacion a los paletas
module.exports = {
  // Metodo para crear una nueva paleta
  create: function (req, res, next) {
    Palette.create(
      {
        name: req.body.name,
        description: req.body.description,
        colors: req.body.colors,
        author: req.body.author,
      },
      function (err, result) {
        if (err) next(err);
        else
          res.json({ status: 201, message: HTTPSTATUSCODE[201], data: result });
      }
    );
  },
  // Metodo para la busqueda de paletas por ID
  getById: function (req, res, next) {
    console.log(req.body);
    Palette.findById(req.params.paletteId, function (err, paletteInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { palette: paletteInfo },
        });
      }
    });
  },
  //Metodo para retornar todas las paletas registradas en la base de datos
  getAll: function (req, res, next) {
    Palette.find({}, function (err, palettes) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: 200,
          message: HTTPSTATUSCODE[200],
          data: { palettes: palettes },
        });
      }
    })
      .populate("colors")
      .populate("author");
  },
  //Metodo para actualizar algun registro de la base de datos
  updateById: function (req, res, next) {
    Palette.findByIdAndUpdate(
      req.params.paletteId,
      {
        name: req.body.name,
        description: req.body.description,
        colors: req.body.colors,
        author: req.body.author,
      },
      function (err, paletteInfo) {
        if (err) next(err);
        else {
          res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { palette: paletteInfo },
          });
        }
      }
    );
  },
  //Metodo para eliminar algun registro de la base de datos
  deleteById: function (req, res, next) {
    Palette.findByIdAndRemove(
      req.params.paletteId,
      function (err, paletteInfo) {
        if (err) next(err);
        else {
          res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { palette: paletteInfo },
          });
        }
      }
    );
  },
};
