const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config()
const session = require('express-session')
const passport = require('./config/passport')

const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(cors())

// Use sessions to keep track of user's login status
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session)

// Routes
app.use(routes)

// Connect to DB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('Connected to DB!')
  }
)

// Start API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
