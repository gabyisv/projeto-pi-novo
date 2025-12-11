var database = require("../database/config");

function salvarDados(dadosTemp, dadosLux, dadosUmid) {

    var instrucao = "";

     for (var i = 0; i < dadosTemp.length; i++) {
        instrucao = `
            insert into resultadoQuiz (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros)
            values (${dadosLux[i]}, ${dadosTemp[i]}, ${dadosUmid[i]}, '${Math.floor(Math.random() * 4 + 1)}');
        `;

        return database.executar(instrucao);
    }
}

module.exports = {
    salvarDados,
};
