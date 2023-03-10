const CodeOfPoints = require("../api/codeOfPoints");

const cop = async (req, res) => {
  const { descripcion, nombre, aparato, grupo, valor } = req.body;

  const elegido = CodeOfPoints.map((ejercicio) => {
    if (ejercicio.aparato === aparato) {
        return ejercicio; 
    }
  });

  res.send(elegido);
};

module.exports = cop;
