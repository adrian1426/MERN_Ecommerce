const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('Conected to db'));

async function connectDB({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  mongoose.set('strictQuery', false);
  await mongoose.connect(uri, { useNewUrlParser: true });
}

module.exports = connectDB;