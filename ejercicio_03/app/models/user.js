/**
  Modelo: User  
  id
  username: stirng
  email: string
  password: string
  name: string
  last_name: string
 */

const { DataTypes } = require('sequelize');

 function define( sequelize ) {

    sequelize.define('User', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        last_name: DataTypes.STRING
    });    

 }
 
module.exports = define
