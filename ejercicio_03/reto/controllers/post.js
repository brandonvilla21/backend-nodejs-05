const sequelize = require('../models')
const { models } = sequelize

async function createPost(request, response) { // POST
  try {
    const post = await models.Post.create(request.body)
    return response.status(202).send(post)
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function getAllPosts(request, response) {// GET
  try {
    const posts = await models.Post.findAll()
    return response.status(200).send(posts)
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function editPost(request, response) { // PUT
  try {
    // Find the element (post)
    const post = await models.Post.findByPk(request.params.id)
    if (post) {
      await post.update({ ...request.body })
      return response.status(200).send(post)
    } else {
      return response.sendStatus(404)
    }
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function deletePost(request, response) { // DELETE
  try {
    const post = await models.Post.findByPk(request.params.id)
    await post.destroy()

    return response.sendStatus(201)
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

module.exports = {
  createPost,
  getAllPosts,
  editPost,
  deletePost
}