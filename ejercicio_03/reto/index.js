/**
 Reto:
  -. Completar el controlador para users (PEDIENTE)
  -. Crear el controlador para comments (PENDIENTE)

  -. Para crear un Post relacionado a un User
    (hay que enviar en la request el UserId)
  
  Reto 2:
  -. Crear el endpoint para enviar el ID del usuario y obtener los Posts por User
    Asi es como debe de lucir e endpoint:  /users/:id/posts
  -. Crear el endpoint para enviar el ID del post y obtener los Comments por Post
    Asi es como debe de lucir e endpoint:  /posts/:id/comments

*/

const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./models')
const postsRoutes = require('./routes/post')
const usersRoutes = require('./routes/user')

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
app.use('/users', usersRoutes)


app.listen(3000, () => console.log('App listen on port 3000'))