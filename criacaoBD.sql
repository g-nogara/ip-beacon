CREATE DATABASE sa;

USE sa;

CREATE TABLE usuarios (
    idUser int PRIMARY KEY auto_increment
    ,endereco varchar(100)
    ,localizacao GEOMETRY (point, 4326)
    ,nivel enum("Iniciante","Medio","Avançado")
    ,telefone varchar(15)
    ,dataCadastro date not null
);

CREATE TABLE hobbies (
    idHobby int PRIMARY KEY auto_increment
    ,descricao varchar(45)
    ,INDEX fk_usuarios_idUser (idUser)
    ,CONSTRAINT fk_usuarios_idUser (idUser) REFERENCES usuarios (idUser)
);

CREATE TABLE matches (
    idMatch int PRIMARY KEY
    ,
)

CREATE TABLE usuarios_