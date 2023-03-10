const bcrypt = require("bcrypt");
const User = require("../model/user");

const register = async (req,res) => {

  const { nombre, correo, contraseña } = req.body;

  User.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({
        message: "Ya existe un usuario con el correo ingresado",
      });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({ message: "Algun dato no fue ingresado" });
    } else {
      bcrypt.hash(contraseña, 15, (error, contraseñaHashed) => {
        if(error) res.json({ error });
        else {
          const newUser = new User({
            nombre,
            correo,
            contraseña: contraseñaHashed,
          });

          newUser.save().then((usuario) => {
            res.json({ message: "Usuario creado correctamente" });
          })
          .catch((error)=>{ console.error(error)});
        }
      });
    }
  });
};

module.exports = register
