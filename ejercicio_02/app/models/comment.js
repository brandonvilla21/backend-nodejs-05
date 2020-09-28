const { DataTypes } = require('sequelize')

function define(sequelize) {
  sequelize.define('Comment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    texto: DataTypes.STRING,
    fecha_publicacion: DataTypes.DATEONLY,
    calificacion: DataTypes.INTEGER,
  })
}

module.exports = define
