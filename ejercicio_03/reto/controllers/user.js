const sequelize = require('../models')
const { models } = sequelize

// createUser
async function createUser( request, response ) {

    try {

      const user = await models.User.create(request.body);
      return response.status(201).send(user);

    } catch(error) {
        throw error;
    }

}

module.exports = {
  createUser
}