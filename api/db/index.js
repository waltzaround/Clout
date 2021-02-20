const Mongoose = require('mongoose');

async function establishDatabaseConnection() {
  return await Mongoose.connect(process.env.DATABASE_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
  establishDatabaseConnection,
}