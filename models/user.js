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

userSchema.methods.validatePassword = async function validatePassword (data) {
  return bcrypt.compare(data, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
