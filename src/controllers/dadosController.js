var dadosModel = require("../models/dadosModel");

function salvarDados(req, res) {
    var dadosTemp = req.body.dadosTemp;
    var dadosLux = req.body.dadosLux;
    var dadosUmid = req.body.dadosUmid

    if (dadosTemp == undefined || dadosLux == undefined || dadosUmid == undefined) {
        res.status(400).send("Faltam dados para salvar o resultado.");
    } else {
        dadosModel.salvarDados(dadosTemp, dadosLux, dadosUmid)
            .then(function (resultado) {
                res.status(200).json({
                    mensagem: "Resultado salvo com sucesso!",
                    dados: resultado
                });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar resultado:", erro);
                res.status(500).json(erro);
            });
    }
}

module.exports = {
    salvarDados
};

