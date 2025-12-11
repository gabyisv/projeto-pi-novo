setTimeout(() => {

    var dadosTemperatura = []
    var dadosLuminosidade = []
    var dadosUmidade = []

    for (var i = 0; i < 9; i++) {        
        dadosTemperatura.push(Math.floor(Math.random()* 10 +16));
        dadosLuminosidade.push(Math.floor(Math.random()* 250));
        dadosUmidade.push(Math.floor(Math.random()* 40 + 30));
    }

    fetch("/dados/salvar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                dadosTemp: dadosTemperatura,
                dadosLux: dadosLuminosidade,
                dadosUmid: dadosUmidade
            })
        })
        .then(res => res.json())
        .then(json => console.log("Temperatura Inserida:", json))
        .catch(erro => console.error("Erro na Temperatura:", erro)
    );

}, 20000);
