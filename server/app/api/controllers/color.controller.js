// Cargamos el modelo recien creado
const Color = require("../models/Color");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

//Metodo para retornar todos los colors registrados en la base de datos
//Se le añade paginación
const getAllColors = async (req, res, next) => {
  try {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const colors = await Color.find().skip(skip).limit(20);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { colors: colors },
      });
    } else {
      const colors = await Color.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { colors: colors },
      });
    }
  } catch (err) {
    return next(err);
  }
};

// Metodo para la busqueda de colors por ID
const getColorById = async (req, res, next) => {
  try {
    const { colorId } = req.params;
    const colorById = await Color.findById(colorId);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { colors: colorById }
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllColors,
  getColorById,
}

