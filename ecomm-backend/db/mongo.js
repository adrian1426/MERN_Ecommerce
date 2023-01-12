const mongoose = require('mongoose');

async function connectDB({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  mongoose.set('strictQuery', false);
  mongoose.connect(uri, { useNewUrlParser: true });
}

module.exports = connectDB;