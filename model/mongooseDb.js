const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/c7HideAndSeekMongoose'
mongoose.connect(dbUrl)

module.exports = mongoose
