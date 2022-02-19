const router = require('express').Router()
const postsController = require('../../conrollers/postsController')

// Matches with '/api/posts'
router
  .route('/')
  .get(postsController.fetchPosts)
  .post(postsController.createPost)

// Matches with '/api/posts/:id'
router.route('/:id').get(postsController.fetchPostById)

module.exports = router
