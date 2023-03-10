const User = require("../model/user");
const Gymnast = require("../model/gymnast");

const createGymnast = async (req, res) => {
  const { nombre, apellido, edad } = req.body;
  const user = await User.findById(req.params);
  const newGymnast = new Gymnast({
    nombre,
    apellido,
    edad, 
    author: user,
  });
  await newGymnast.save();
  user.gimnastas.push(newGymnast);
  await user.save();
  res.json({ message: "Gimnasta creado" });
};

module.exports = createGymnast;
