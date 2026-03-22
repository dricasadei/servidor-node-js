/* Acessando o pacote express */
const express = require("express")
const router = express.Router() /* definindo constante para rotear caminho /mulher */

/* Chamando o express e adicionando a constante app */
const app = express()
/* Definindo a porta que estará o servidor */
const porta = 3333

const mulheres = [
    {
        nome: "Simara Conceição",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "Desenvolvedora e Instrutora na área de Tecnologia."
    },
    {
        nome: "Iana Chan",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "CEO & Founder da Programaria."
    },
    {
        nome: "Luana Pimentel",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "Senior Staff Software Engineer."
    }

]
function monstraMulheres(request, response) {
    response.json(mulheres)
}

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

/* Criando endereço da rota /mulher */
app.use(router.get("/mulheres", monstraMulheres))
/* Iniciando o servidor */
app.listen(porta, mostraPorta)