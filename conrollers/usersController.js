const db = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  registerUser: async function (req, res) {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(req.body.password, salt)

      const newUser = await db.User.create({
        username: req.body.username,
        password: hash
      })
      res.json(newUser)
      // Redirect to login page
      // res.redirect(307, '/')
    } catch (err) {
      res.status(401).json(err)
    }
  },
  loginUser: function (req, res) {
    res.json(req.user)
    // res.redirect('/')
  },
  logoutUser: function (req, res) {
    req.logout()
    req.session.destroy(function (err) {
      res.json({})
    })
  },
  fetchUser: function (req, res) {
    if (!req.user) {
      res.status(401).json({})
    } else {
      res.json({
        id: req.user._id,
        username: req.user.username
      })
    }
  }
}
