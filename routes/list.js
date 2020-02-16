const express = require('express')
const User = require('../model/user')
const list = express.Router()
list.get('/list', async (req, res) => {
  const users = await User.find()
  res.render('list.html', { users })
})
module.exports = list