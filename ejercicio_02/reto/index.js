/**
  Reto:
  -. Crea el modelo usuario (https://sequelize.org/master/manual/model-basics.html)
  -. Investiga en la documentacion como se pueden crear las relaciones entre: (https://sequelize.org/master/manual/assocs.html)
  -. Usuarios, Posts y Comments

*/

const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./models')

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


app.listen(3000, () => console.log('App listen on port 3000'))