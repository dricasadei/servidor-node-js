/* Acessando o pacote express */
const express = require("express")
const router = express.Router() /* definindo constante para rotear caminho /mulher */

/* Chamando o express e adicionando a constante app */
const app = express()
/* Definindo a porta que estará o servidor */
const porta = 3333

function mostraHora(request, response) {

    const data = new Date()

    const hora = data.toLocaleTimeString('pt-BR')

    response.send(hora)

}

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

/* Criando endereço da rota /mulher */
app.use(router.get("/hora", mostraHora))
/* Iniciando o servidor */
app.listen(porta, mostraPorta)