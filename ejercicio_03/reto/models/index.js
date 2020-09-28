const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('my_test_database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: console.log,
})

const modelDefiners = [
  require('./post'),
  require('./comment'),
  require('./user')
]

for (const modelDefiner of modelDefiners)  {
  modelDefiner(sequelize)
}

// Definir relaciones
// User has many Posts
sequelize.models.User.hasMany(sequelize.models.Post)
sequelize.models.Post.belongsTo(sequelize.models.User)

// Post has many Comments
sequelize.models.Post.hasMany(sequelize.models.Comment)
sequelize.models.Comment.belongsTo(sequelize.models.Post)

sequelize.sync({ alter: true })

module.exports = sequelize

