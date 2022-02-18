const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')

require('dotenv').config()

const PORT = process.env.PORT || 3000

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
