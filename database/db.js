const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);
dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnection;
