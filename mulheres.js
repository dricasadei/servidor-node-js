/* Acessando o pacote express */
const express = require("express")
const router = express.Router() /* definindo constante para rotear caminho /mulher */
import { v4 as uuidv4 } from 'uuid'

/* Chamando o express e adicionando a constante app */
const app = express()
/* Definindo a porta que estará o servidor */
const porta = 3333

const mulheres = [
    {
        id: '1',
        nome: "Simara Conceição",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "Desenvolvedora e Instrutora na área de Tecnologia."
    },
    {
        id: '2',
        nome: "Iana Chan",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "CEO & Founder da Programaria."
    },
    {
        id: '3',
        nome: "Luana Pimentel",
        imagem: "https://avatars.githubusercontent.com/u/50921892?v=4",
        minibio: "Senior Staff Software Engineer."
    }

]

//GET
function monstraMulheres(request, response) {
    response.json(mulheres)
}

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

//POST
function criaMulher(request, response) {

 const novaMulher = {

   id: uuidv4(),
   nome: request.body.nome,
   imagem: request.body.imagem,
   minibio: request.body.minibio

 }

mulheres.push(novaMulher) // Adiciona nova mulher a lista de mulehres já existente

response.json(mulheres)

}

/* GET - Criando endereço da rota /mulheres */ 
app.use(router.get("/mulheres", monstraMulheres))

//POST /mulheres
app.use(router.post('/mulheres', criaMulher))

/* Iniciando o servidor */
app.listen(porta, mostraPorta)