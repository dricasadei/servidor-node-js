/* Acessando o pacote express */
const express = require("express")

/* Definindo constante para rotear a função Olá */
const router = express.Router() 

/* Chamando o express e adicionando a constante app */
const app = express()
/* Definindo a porta que estará o servidor */
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

/*  Criar o endereço DA URL */
app.use(router.get("/ola",mostraOla))
/* Iniciando o servidor */
app.listen(porta, mostraPorta)