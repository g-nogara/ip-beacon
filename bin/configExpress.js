const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/closeBy", (req,res) => {
    const coordUser;//pega info do banco
    const arrayCord;//Todas coordenadas disponíveis no banco

});


