const { model, Schema } = require("mongoose");

const GymnastSchema = new Schema({
  nombre: { type: String, Required: true },
  apellido: { type: String, Required: true },
  edad: { type: String, Required: true },
  elements : {type: Array},
  competitions: {type: Array},
  author: { type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = model("Gymnast", GymnastSchema);
