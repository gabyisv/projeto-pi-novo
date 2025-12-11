var database = require("../database/config");

function buscarLuminosidade(fk_quadros, limite_linhas) {

    var instrucaoSql = `SELECT 
	luminosidade,
    fk_quadros
    FROM medida
    WHERE fk_quadros = ${fk_quadros}
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTemperatura(fk_quadros, limite_linhas) {

    var instrucaoSql = `SELECT 
	dht11_temperatura,
    fk_quadros
    FROM medida
    WHERE fk_quadros = ${fk_quadros}
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmidade(fk_quadros, limite_linhas) {

    var instrucaoSql = `SELECT 
	dht11_umidade,
    fk_quadros
    FROM medida
    WHERE fk_quadros = ${fk_quadros}
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPI

function MaxTemperatura(fk_quadros) {
    var instrucaoSql = `
    SELECT
	MAX(dht11_temperatura),
    horarioMedida
    FROM medida
    GROUP BY horarioMedida, fk_quadros
    WHERE fk_quadros = ${fk_quadros};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MaxLuminosidade(fk_quadros) {
    var instrucaoSql = `
    SELECT
	MAX(luminosidade),
    horarioMedida
    FROM medida
    GROUP BY horarioMedida, fk_quadros
     WHERE fk_quadros = ${fk_quadros};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MaxUmidade(fk_quadros) {
    var instrucaoSql = `
    SELECT
	MAX(dht11_umidade),
    horarioMedida
    FROM medida
    GROUP BY horarioMedida, fk_quadros
    WHERE fk_quadros = ${fk_quadros};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MinTemperatura(fk_quadros) {
    var instrucaoSql = `
    SELECT
	MIN(dht11_temperatura),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros
    WHERE fk_quadros = ${fk_quadros};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MinLuminosidade(fk_quadros) {
    var instrucaoSql = `
    SELECT
	MIN(luminosidade),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;
    WHERE fk_quadros = ${fk_quadros};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MinUmidade(fk_quadros) {
    var instrucaoSql = `
    SELECT
	MIN(dht11_umidade),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros
    WHERE fk_quadros = ${fk_quadros};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarLuminosidade,
    buscarTemperatura,
    buscarUmidade,
    MaxLuminosidade,
    MaxTemperatura,
    MaxUmidade,
    MinTemperatura,
    MinLuminosidade,
    MinUmidade
}
