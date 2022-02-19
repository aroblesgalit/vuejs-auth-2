const router = require('express').Router()
const postsController = require('../../conrollers/postsController')

// Matches with '/api/posts'
router
  .route('/')
  .get(postsController.fetchPosts)
  .post(postsController.createPost)

module.exports = router
