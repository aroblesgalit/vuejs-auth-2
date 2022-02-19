const db = require('../models')

module.exports = {
  fetchPosts: function (req, res) {
    db.Post.find({})
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err))
  },
  createPost: function (req, res) {
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  fetchPostById: function (req, res) {
    db.Post.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  updatePost: function (req, res) {
    db.Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description
      },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deletePost: function (req, res) {
    db.Post.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
