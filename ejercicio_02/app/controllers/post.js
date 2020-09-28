const sequelize = require('../models')
const { models } = sequelize

async function createPost(request, response) {
  return response.status(202).send({})
}

async function getPost(request, response) {
  return response.status(200).send([])
}

async function editPost(request, response) {
  return response.status(201).send({})
}

async function deletePost(request, response) {
  return response.status(201)
}

module.exports = {
  createPost,
  getPost,
  editPost,
  deletePost
}