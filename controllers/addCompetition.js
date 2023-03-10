const Gymnast = require("../model/gymnast");

const addCompetition = async (req, res) => {
  const gymnast = await Gymnast.findById(req.params);
  const { nombre, notaSuelo, notaArzones, notaAnillas, notaSalto, notaParalelas, notaBarra } = req.body;
  const notaAA = notaSuelo + notaArzones + notaAnillas + notaSalto + notaParalelas + notaBarra
  const newCompetition = {
    nombre,
    notaSuelo, 
    notaArzones, 
    notaAnillas, 
    notaSalto, 
    notaParalelas, 
    notaBarra,
    notaAA
  };
  gymnast.competitions.push(newCompetition);
  await gymnast.save();
  res.json({ message: "Competencia añadida" });
};

module.exports = addCompetition;
