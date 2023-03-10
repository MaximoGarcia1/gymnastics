const bcrypt = require("bcrypt");
const User = require("../model/user");

const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  User.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({ message: "Usuario no encontrado" });
    }
    bcrypt.compare(contraseña, usuario.contraseña).then((isTrue) => {
      if (isTrue) {
        const { id, nombre } = usuario;
        res.json({
          message: "Usuario loggeado correctamente",
          usuario: {
            id,
            nombre,
          },
        });
      } else { 
        return res.json({ message: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;
