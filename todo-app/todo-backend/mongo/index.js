const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

if (MONGO_URL && !mongoose.connection.readyState) {
  const connectWithRetry = () => {
    mongoose.connect(MONGO_URL)
      .then(() => {
        console.log('Connected to MongoDB')
      })
      .catch((err) => {
        console.error('MongoDB connection error, retrying in 3 seconds...', err.message)
        setTimeout(connectWithRetry, 3000)
      })
  }
  connectWithRetry()
}

module.exports = {
  Todo
}
