import express from "express"
const app = express()
const port = 3000

    const pessoa = {
    nome: "Renato Augusto",
    email: "ReinatoAugusto@email.com",
    idade: 35,
    hobbies: ["Tiro ao alvo","Corrida de Kart"]
    }

    const pessoa2 = {
    nome: "Fágner Lemos",
    email: "MelhorDireito@email.com",
    idade: 33,
    hobbies: ["Jiu-Jitsu","Fazer um churásco"]
    }

    const pessoa3 = {
    nome: "Róger Guedes",
    email: "CalvoGuedes@email.com",
    idade: 26,
    hobbies: ["Cortar cabelo","Fazer gol"]
    }

app.get('/pessoa', (req, res)=>{
    const pessoa1 = JSON.stringify(pessoa)
    res.setHeader("Content-Type", "application/json")
    res.send(pessoa1)
})

app.get('/listaPessoas', (req, res)=>{
    const lista = [pessoa, pessoa2, pessoa3]
    const listaPessoas = JSON.stringify(lista)
    res.setHeader("Content-Type", "application/json")
    res.send(listaPessoas)
    }
)


app.listen(port, ()=>{
    console.log('App executando na porta ' + port)
})