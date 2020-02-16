const express = require('express')
const User = require('../model/user')
const main = express.Router()
main.get('/main', (req, res) => {
  res.render('index')
})
main.post('/add', async (req, res) => {
  const user = req.body
  try {
    await User.create(user)
  } catch (error) {
    res.send(error)
  }
  res.writeHead(302, {
    location: '/list'
  })
  res.end()
})
module.exports = main