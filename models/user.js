const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User