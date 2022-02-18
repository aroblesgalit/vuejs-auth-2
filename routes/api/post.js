const router = require('express').Router()

// Matches with '/api/posts'
router.route('/').get((req, res) => {
  res.send('We are on posts')
})

module.exports = router
