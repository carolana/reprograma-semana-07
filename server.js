const { response } = require("express")
const express = require("express")
const app = express()

const cidades = require("./data/estados-cidades.json")


app.get("/estados/todos", (request, response) => {
    response.status(200).send(cidades)
})

app.get("/estados/?", (request, response) => {
    const siglaRequisitada = request.query["sigla"]
    response.status(200).send(cidades.find(cidade => cidade.sigla == siglaRequisitada))
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})