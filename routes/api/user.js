const db = require('../../models')
const passport = require('../../config/passport')
const router = require('express').Router()
const usersController = require('../../conrollers/usersController')

router.post('/login', passport.authenticate('local'), usersController.loginUser)
// router.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// )

router.post('/register', usersController.registerUser)

router.get('/logout', usersController.logoutUser)

router.get('/', usersController.fetchUser)

module.exports = router
