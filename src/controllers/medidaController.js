var medidaModel = require("../models/medidaModel");

function buscarLuminosidade(req, res) {

    const limite_linhas = 10;

    var id = req.params.id;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarLuminosidade(id, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarTemperatura(req, res) {

    var id = req.params.id;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTemperatura(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

    function buscarUmidade(req, res) {

    var id = req.params.id;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUmidade(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarLuminosidade,
    buscarTemperatura,
    buscarUmidade,
}