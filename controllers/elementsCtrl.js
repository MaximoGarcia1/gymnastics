const Gymnast = require("../model/gymnast");

const addElement = async (req, res) => {
  const gymnast = await Gymnast.findById(req.params);
  const { descripcion, nombre, aparato, grupo, valor, ejecucion } = req.body;
  const newElement = {
    descripcion, 
    nombre,
    aparato,
    grupo,
    valor,
    ejecucion, 
  };
  gymnast.elements.push(newElement);
  await gymnast.save();
  res.json({ message: "Elemento añadido" });
};

module.exports = addElement;
