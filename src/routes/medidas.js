var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/luxBuscar/:id", function (req, res) {
    medidaController.buscarLuminosidade(req, res);
});

router.get("/temperaturaBuscar/:id", function (req, res) {
    medidaController.buscarTemperatura(req, res);
})

router.get("/umidadeBuscar/:id", function (req, res) {
    medidaController.buscarUmidade(req, res);
})

module.exports = router;