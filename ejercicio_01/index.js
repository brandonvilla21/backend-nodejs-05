/**
  Desarrollar una API REST con express 
  npm init
  npm install express body-parser
*/
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware para manejar formatos JSON de los requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.status(200).send({ ok: true, message: 'Bienvenido a la API con express'})
})


app.listen(3000, () => console.log('App listen on port 3000'))