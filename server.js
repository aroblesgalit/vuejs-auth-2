const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

// Routes

// Start API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
