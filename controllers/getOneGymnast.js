const Gymnast = require('../model/gymnast')

const getOneGymnast = async (req, res) => {
    const gymnast = await Gymnast.findById(req.params);
    res.json(gymnast);
};

  module.exports = getOneGymnast