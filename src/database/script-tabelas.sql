-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE illuminart;
USE illuminart;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(500),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table quadros (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nomePintor VARCHAR(45),
	titulo VARCHAR(100),
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	luminosidade INT,
	dht11_temperatura DECIMAL(4,2),
    dht11_umidade INT,
	horarioMedida DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_quadros INT,
	FOREIGN KEY (fk_quadros) REFERENCES quadros(id)
);

-- INSERÇÃO DE EMPRESAS
insert into empresa (razao_social, codigo_ativacao, cnpj) values ('Vitalis', '2345678', '40028922123457');
insert into empresa (razao_social, codigo_ativacao, cnpj) values ('Masp', '9876543', '60664745000187');

-- QUADROS DE CADA EMPRESA

-- EMPRESA 1
insert into quadros (nomePintor, titulo, descricao, fk_empresa) values ('Caravaggio', 'São Jerônimo que Escreve', 'Mostra São Jerônimo, um doutor da Igreja Católica, imerso na tradução das Escrituras Sagradas para o latim (a Vulgata).', 1);
insert into quadros (nomePintor, titulo, descricao, fk_empresa) values ('Johannes Vermeer', 'Moça com Brinco de Pérola', 'Olhar cativante, lábios entreabertos, fundo escuro que realça a figura, e o famoso brinco de pérola (provavelmente de vidro) pintado com pinceladas simples. 
', 1);

-- EMPRESA 2
insert into quadros (nomePintor, titulo, descricao, fk_empresa) values ('Claude Monet', 'Impressão, Nascer do Sol', 'A pintura iniciou a arte moderna valorizando a percepção subjetiva e a experiência do artista, influenciando profundamente a forma como a arte passou a representar o mundo.', 2);
insert into quadros (nomePintor, titulo, descricao, fk_empresa) values ('Michelangelo', 'A Criação de Adão', 'O dedo estendido de Adão, quase tocando o de Deus, simboliza o homem recebendo o livre-arbítrio e a capacidade de buscar o divino, em contraste com o dedo de Deus mais firme e determinado.', 2);

-- INSERÇÃO DE MEDIDAS

-- EMPRESA 1

-- QUADRO 1
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (100, 18, 45, 1);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (120, 20.2 ,50, 1);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (250, 30, 20, 1);

-- UMIDADE IDEAL = 40% A 60%
-- TEMPERATURA IDEAL = 18 A 22
-- LUMINOSIDADE IDEAL (LUX) = 50 A 100

-- QUADRO 2
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (115, 20, 35, 2);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (130, 19.3, 62, 2);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (300, 35.5, 10, 2);

-- EMPRESA 2

-- QUADRO 3
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (100, 18, 45, 3);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (100, 18, 45, 3);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (100, 18, 45, 3);

-- QUADRO 4
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (115, 20, 35, 4);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (115, 20, 35, 4);
insert into medida (luminosidade, dht11_temperatura, dht11_umidade, fk_quadros) values (115, 20, 35, 4);

-- SELECTS
-- SELECT DA LUMINOSIDADE DO QUADRO
SELECT 
	luminosidade,
    fk_quadros
FROM medida;

-- SELECT DA TEMPERATURA DO QUADRO
SELECT 
	dht11_temperatura,
    fk_quadros
FROM medida;

-- SELECT DA UMIDADE DO QUADRO
SELECT 
	dht11_umidade,
    fk_quadros
FROM medida;



-- KPIS 
-- MAIOR TEMPERATURA DO DIA COM O HORÁRIO
SELECT
	MAX(dht11_temperatura),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;

-- MAIOR LUMINOSIDADE DO DIA COM O HORÁRIO
SELECT
	MAX(luminosidade),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;

-- MAIOR UMIDADE DO DIA COM O HORÁRIO
SELECT
	MAX(dht11_umidade),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;

-- MENOR TEMPERATURA DO DIA COM O HORÁRIO
SELECT
	MIN(dht11_temperatura),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;

-- MENOR LUMINOSIDADE DO DIA COM O HORÁRIO
SELECT
	MIN(luminosidade),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;

-- MENOR UMIDADE DO DIA COM O HORÁRIO
SELECT
	MIN(dht11_umidade),
    horarioMedida
FROM medida
GROUP BY horarioMedida, fk_quadros;