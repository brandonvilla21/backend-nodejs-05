const { DataTypes } = require('sequelize')

function define(sequelize) {
  sequelize.define('Post', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: DataTypes.STRING,
    texto: DataTypes.STRING,
    fecha_publicacion: DataTypes.DATEONLY,
    etiquetas: DataTypes.STRING,
    categorias: DataTypes.STRING,
  })
}

module.exports = define
