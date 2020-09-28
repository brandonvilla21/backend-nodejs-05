/**
  Crear las rutas para consumir la API

  HTTP VERBOSE:
  GET
  POST
  PUT
  DELETE


  Para probar la API sera necesario instalar Postman
*/

const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./models')
const postsRoutes = require('./routes/post')

sequelize.authenticate()
  .then(() => console.log('Authenticated'))
  .catch(error => console.log(error))

const app = express()

// Middleware para manejar formatos JSON de los requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.status(200).send({ ok: true, message: 'Bienvenido a la API con express'})
})

app.use('/posts', postsRoutes)


app.listen(3000, () => console.log('App listen on port 3000'))