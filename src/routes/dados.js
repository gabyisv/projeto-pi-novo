var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/salvar", function (req, res) {
    dadosController.salvarDados(req, res);
});

module.exports = router;