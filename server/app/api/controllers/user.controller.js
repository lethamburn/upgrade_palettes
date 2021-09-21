// Cargamos el modelo recien creado
const User = require("../models/User");
// Cargamos el módulo de bcrypt
const bcrypt = require("bcrypt");
// Cargamos el módulo de jsonwebtoken
const jwt = require("jsonwebtoken");
// Cargamos el fichero de los HTTPSTATUSCODE
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
const createUser = async (req, res, next) => {
  try {
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.emoji = req.body.emoji;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.favPalettes = [];

    //comprobar si el user existe
    const userDb = await newUser.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: null
    });
    //fuera return y llamamos a autenticuate. o creamos token no se!
  } catch (err) {
    return next(err);
  }
}

const authenticate = async (req, res, next) => {
  try{
    const userInfo = await User.findOne({email : req.body.email})

    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password=null
      const token = jwt.sign(
        { 
          id: userInfo._id,
          name: userInfo.name 
        }, 
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      //eliminar el password de user id
      userInfo.password = null;
      //console.log('userInfo, ',userInfo)
      //console.log('token, ',token)
      
      
      
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { user: userInfo, token: token },
      });
    } else {
      return res.json({ status: 400, message: HTTPSTATUSCODE[400], data: null });
    }
  }catch(err){
    return next(err);
  }
}
  
const logout =  (req, res, next) => {
  try{
    return res.json({ 
      status: 200, 
      message: HTTPSTATUSCODE[200], 
      token: null 
    });
  }catch(err){
    return next(err)
  }
}


module.exports = {
  createUser,
  authenticate,
  logout
}


