## Requisitos para correr los ejercicios:
- MariaDB
  - MacOS: https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/
  - Windows: https://mariadb.org/download/
- Nodemon
  - `npm i -g nodemon`
- Postman https://www.postman.com/downloads/
  - Aqui un video de como usar Postman https://www.youtube.com/watch?v=qsejysrhJiU
 
## Antes de ejecutar los ejercicios:
Asegurate de crear la base de datos que se utilizará en los ejercicios, si no quieres camibiar el nombre que viene por default en el codigo, haz lo siguiente:
```sh
# Para iniciar el servicio ejecuta el siguiente comando en la terminal
mysql.server start

# Abre MariaDB y crea la base de datos
mysql

CREATE DATABASE my_test_database;
```

## Pasos para descargar el proyecto

En tu consola corre el siguiente comando para clonar el proyecto a tu maquina
```sh
git clone https://github.com/brandonvilla21/backend-nodejs-05.git
```

Entra a la carpeta que se generó:
```sh
cd backend-nodejs-05
```


## Pasos para correr el proyecto
Deberás tener instalado NodeJS en tu computadora. Puedes descargarlo [aquí](https://nodejs.org/en/)

El proyecto cuenta con diferente archivos de JavaScript. Para poder ejecutar un archivo de JavaScript es necesario hacerlo a traves de `node` de la siguiente manera:

```sh
nodemon ejercicio_01/index.js
```

De esta manera puedes ejecutar cualquier archivo de JS dentro del proyecto

## Realiza pruebas desde Postman
Dentro de postamn asegurate de enviar el encabezado (Header) de `Content-type: application/json`

Estos con algunos ejemplos de como deberias enviar la información para algunos endpoints:

#### POST users/
```javascript
{
    "username": "johndoe",
    "email": "john.doe@gmail.com",
    "password": "123123",
    "name": "John",
    "lastName": "Doe"
}
```


#### POST posts/
```javascript
{
    "nombre": "Bases de Datos NoSQL (No relacionales)",
    "texto": "Las bases de datos...",
    "fecha_publicacion": "2020-05-12",
    "etiquetas": "Bases de Datos Relacionales",
    "categorias": "Desarrollo de Software_",
    "UserId": 1 // Es importante verificar que tengamos a un usuario con id: 1
}
```



#### POST comments/
```javascript
{
    "texto": "Muy buen post sobre bases de datos relacionales",
    "fecha_publicacion": "2020-05-12",
    "calificacion": 5,
    "PostId": 1 // Es importante verificar que tengamos un Post con un id: 1
}
```
