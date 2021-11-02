const express = require('express')
const Room = require('../model/roomMongoose')
const Match = require('../model/match')
const admin = require('sriracha-admin')

const app = express()
const port = 3000

app.use('/admin', admin())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

