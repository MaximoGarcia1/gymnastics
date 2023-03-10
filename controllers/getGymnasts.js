const User = require("../model/user");
const Gymnast = require("../model/gymnast");

const getGymnasts = async (req, res) => {
  const user = await User.findById(req.params).populate("gimnastas");
  res.json(user.gimnastas);
};



module.exports = getGymnasts

