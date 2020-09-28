const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('my_test_database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: console.log,
})

const modelDefiners = [
  require('./post'),
  require('./comment')
]

for(const modelDefiner of modelDefiners)  {
  modelDefiner(sequelize)
}

sequelize.sync()

module.exports = sequelize

