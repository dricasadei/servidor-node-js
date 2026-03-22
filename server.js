/* Acessando o pacote express */
const express = require("express")

/* Chamando o express e adicionando a constante app */
const app = express()
/* Definindo a porta que estará o servidor */
const porta = 3333

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

/* Iniciando o servidor */
app.listen(porta, mostraPorta)