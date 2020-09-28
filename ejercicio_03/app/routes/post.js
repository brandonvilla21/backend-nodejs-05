const express = require('express')
const router = express.Router()

const { createPost, getAllPosts, editPost, deletePost } = require('../controllers/post')

// localhost:3000/posts
router.post('/', createPost)
router.get('/', getAllPosts)
router.put('/:id', editPost)
router.delete('/:id', deletePost)

module.exports = router
