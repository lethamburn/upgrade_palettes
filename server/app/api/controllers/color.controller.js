// Cargamos el modelo recien creado
const Color = require("../models/Color");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

//Codificamos las operaciones que se podran realizar con relacion a los colores

// Metodo para crear un nuevo color
/* const newColor = async (req, res, next) => {
  try {
    const newColor = new Color(req.body);
    const colorDb = await newColor.save()
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { colors: colorDb }
    });
  } catch (err) {
    return next(err);
  }
} */

//Metodo para retornar todos los colors registrados en la base de datos
//se le añade paginación
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

//Metodo para eliminar algun registro de la base de datos
/* const deleteColorById = async (req, res, next) => {
  try {
    const { colorId } = req.params;
    const colorDeleted = await Color.findByIdAndDelete(colorId);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { colors: colorDeleted }
    });
  } catch (err) {
    return next(err);
  }
};
 */
//Metodo para actualizar algun registro de la base de datos
/* const updateColorById = async (req, res, next) => {
  try {
    const { colorId } = req.params;
    const colorToUpdate = req.body;
    const colorUpdated = await Color.findByIdAndUpdate(colorId, colorToUpdate);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { colors: colorUpdated }
    });
  } catch (err) {
    return next(err);
  }
} */

module.exports = {
  //newColor,
  getAllColors,
  getColorById,
  /* deleteColorById,
  updateColorById */
}

