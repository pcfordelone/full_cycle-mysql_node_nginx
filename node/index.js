const { json } = require("express")
const express = require("express")
const app = express()
const port = 3000
const mysql = require('mysql')

const db_config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(db_config)

const insert_sql = `INSERT INTO people(name) values('Paulo Cesar Fordelone')`
connection.query(insert_sql)

const sql_select = `SELECT * FROM people`

let people = connection.query(sql_select, (error, result, rows) => {
    people = result
})

connection.end()

app.get('/', (req,res) => {
    let variavel;
    variavel = "<h2>Lista de Pessoas Cadastradas:</h2>"
    variavel += "<p>"
    people.map((item) => {
        variavel += "<strong>Nome: </strong>" + item.name + "<br/>"
    })
    variavel += "</p>"

    res.send('<h1>Full Cycle</h1>' + variavel)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})