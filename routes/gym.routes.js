

const express = require("express");

const router = express.Router();

const controllers = require('../controllers')

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.get("/user/:id", controllers.getUserById);

router.post("/register", controllers.register);

router.post("/login", controllers.login);

router.get("/code", controllers.cop);

router.post("/creategymnast/:_id", controllers.createGymnast);

router.get("/getgymnasts/:_id", controllers.getGymnasts);

router.get("/getonegymnast/:_id", controllers.getOneGymnast);

router.post("/addelement/:_id", controllers.addElement);

router.post("/addcompetition/:_id", controllers.addCompetition);

router.get("/notices", (req, res) => {
  res.send("noticias");
});


module.exports = router;
