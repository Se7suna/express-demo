const mongoose = require('mongoose')

const User = mongoose.Schema
const userSchema = new User({
  username: String,
  age: Number,
  sex: String,
  email: String,
  hobbits: [String],
  college: String,
  enterDate: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', userSchema)