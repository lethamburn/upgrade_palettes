// Cargamos el módulo de mongoose
const mongoose = require("mongoose");
// Cargamos el módulo de bcrypt
const bcrypt = require("bcrypt");
// Definimos el factor de costo, el cual controla cuánto tiempo se necesita para calcular un solo hash de BCrypt. Cuanto mayor sea el factor de costo, más rondas de hash se realizan. Cuanto más tiempo sea necesario, más difícil será romper el hash con fuerza bruta.
const saltRounds = 10;
// Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const UserSchema = new Schema({
  name: { type: String, trim: true, required: true },
  emoji: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  favPalettes: [{ type: Schema.Types.ObjectId, ref: "palettes" }], 
});
// Antes de almacenar la contraseña en la base de datos la encriptamos con Bcrypt
UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
/* UserSchema.pre("save", (next) => {
  password = bcrypt.hashSync(password, saltRounds);
  next();
}) */
// Exportamos el modelo para usarlo en otros ficheros
const User = mongoose.model("users", UserSchema);
module.exports = User;
