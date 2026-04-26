const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {

        console.log("Conexão com banco de dados iniciada...")
        
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conectado ao banco de dados!')
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error)
    }
}

module.exports = conectaBancoDeDados