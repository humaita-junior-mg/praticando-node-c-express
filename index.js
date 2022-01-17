const express = require('express')
const app = express()


let methodone = (req, res, next)=>{
    console.log(req.body)
    next()
}

let methodtwo = (req, res)=>{
    res.send('Tudo funcionando corretamente')
}

let sucesso = (req, res)=>{
    res.send('Salvo com sucesso, obrigado por usar nossos serviços')
}

app.get('/', methodtwo)
app.post('/', express.json(), methodone, sucesso)

app.listen(3000, ()=>{
    console.log('Servidor rodando com NODE.JS')
})