/* Acessando o pacote express */
const express = require("express")
const router = express.Router() /* definindo constante para rotear caminho /mulher */

/* Chamando o express e adicionando a constante app */
const app = express()
/* Definindo a porta que estará o servidor */
const porta = 3333

function monstraMulher(request, response) {
    response.json({
        nome: "Simara Conceição",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "Desenvolvedora e Instrutora na área de Tecnologia."
    })
}

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

/* Criando endereço da rota /mulher */
app.use(router.get("/mulher", monstraMulher))
/* Iniciando o servidor */
app.listen(porta, mostraPorta)