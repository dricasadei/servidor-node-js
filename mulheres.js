/* Acessando o pacote express */
const express = require("express")
const router = express.Router() /* definindo constante para rotear caminho /mulher */
const { v4: uuidv4 } = require('uuid')
//import { v4 as uuidv4 } from 'uuid'

/* Chamando o express e adicionando a constante app */
const app = express()
app.use(express.json()) /* Habilitando o uso do JSON */
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
        nome: "Adriana Casadei",
        imagem: "https://avatars.githubusercontent.com/u/95434653?v=4&size=64",
        minibio: "Data Scientist."
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

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher){
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)


    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)

}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher){
        if (mulher.id != request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

/* GET - Criando endereço da rota /mulheres */ 
app.use(router.get("/mulheres", monstraMulheres))

//POST /mulheres
app.use(router.post('/mulheres', criaMulher))

//PATCH /mulheres/:id
app.use(router.patch('/mulheres/:id', corrigeMulher))

//DELETE /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher))

/* Iniciando o servidor */
app.listen(porta, mostraPorta)