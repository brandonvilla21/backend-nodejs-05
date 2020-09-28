/**
  Desarrollar una API REST con express y sequelize
  
  * Sequelize es un ORM (Object Relational Mapping). Un ORM sirve como
  intermediario entre nuestro codigo y la base de datos a la cual queremos
  realizar consultas

  Sin un ORM, tendriamos que realizar consultas directamente a la base de
  datos con lenguaje SQL. Es mas tardado y puede producir brechas de seguridad
  si no conocemos como realizar consultas SQL de la manera correct
  
  
  Recordando, un modelo de datos nos permite describir las estructuras de
  datos así como las restricciones de integridad.
  
  Sequelize es un ORM basado en promesas para Postgres, MySQL, MariaDB,
  SQLite y Microsoft SQL Server
  
  Para nuestro ejemplo de API utilizaremos MariaDB como nuestro SGBD y
  Sequelize como ORM

  Requisitos:
  - Tener instalado mariaDB en el sistema
  - Iniciar el servicio de MariaDB en nuesto sistema local corriendo el
    siguiente comando: mysql.server start

  Pasos:
  -. CREATE DATABASE my_test_database; => Crear la base de datos
  -. \u my_test_database; => Usar la base de datos
  -. Crear modelos para Post y Comment

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