const Usuario = require("../model/user");

const getUserById = async (req, res) => {
  const { id } = req.params

  if (id.length === 24) {
    Usuario.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({ message: "Usuario no encontrado" });
      } else {
        const { _id, contraseña, _v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    return res.json({ message: "estas enviando un id incorrecto" });
  }
};

module.exports = getUserById;
