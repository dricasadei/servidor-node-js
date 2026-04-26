/* Acessando o pacote express */
const express = require("express")
const router = express.Router() /* definindo constante para rotear caminho /mulher */
const cors = require('cors') /* Acessando o pacote cors para permitir que a API seja acessada por outros domínios */
const cors = require('cors') /* Habilitando o uso do cors  que permite consumir essa api no front end */
//importando conexao do banco de dados
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados() //chamando a funcao que conecta ao banco de dados 
// importando o modelo de mulher
const Mulher = require('./mulherModel')

/* Chamando o express e adicionando a constante app */
const app = express()
app.use(express.json()) /* Habilitando o uso do JSON */
/* Definindo a porta que estará o servidor */
app.use(cors()) /* Habilitando o uso do cors  que permite consumir essa api no front end */
const porta = 3333

//GET
async function monstraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find() /* Encontrando as mulheres no banco de dados */
        response.json(mulheresVindasDoBancoDeDados) /* Respondendo a requisição com as mulheres vindas do banco de dados */
    }
    catch (error) {
        console.error(error)
    }
}

/* Criando a função que imprime qual porta está o servidor */
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

//POST
async function criaMulher(request, response) {

    const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem, 
    minibio: request.body.minibio,
    citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save() // Salva a nova mulher no banco de dados
        response.status(201).json(mulherCriada)
    } catch (error) {
        console.error(error)
    }
}


//PATCH
async function corrigeMulher(request, response) {

    try {
        const mulherEncontrada = await Mulher.findById(request.params.id) /* Encontrando a mulher no banco de dados pelo ID */
        
        if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
        }

        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizada = await mulherEncontrada.save() /* Salvando as alterações no banco de dados */
        response.json(mulherAtualizada)
    }
    catch (error) {
        console.error(error)
    }

}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id) /* Encontrando a mulher no banco de dados pelo ID e deletando */
        response.json({ message: "Mulher deletada com sucesso!" })
    }
    catch (error) {
        console.error(error)
    }
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