// config inicial
//importação dos pacotes que estão no node_modulos
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar req

    res.json({ message: "Oi Express!" })
})

// 140596

// mongodb+srv://brennopacheco:<140596>@apicluster.kwbhp.mongodb.net/bancoDaAPI?retryWrites=true&w=majority

// entregar uma porta 
const DB_USER = 'brennopacheco'
const DB_PASSAWORD = encodeURIComponent('140596')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSAWORD}@apicluster.kwbhp.mongodb.net/bancodaapi?retryWrites=true&w=majority` ,
    )
    .then(() => {
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

