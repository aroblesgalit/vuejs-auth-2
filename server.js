const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

// Middlewares
app.use('/posts', () => {
  console.log('This is a middleware running')
})

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.get('/posts', (req, res) => {
  res.send('We are on posts')
})

// Start API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
