require('dotenv').config();

const express = require('express');
const { appConfig, dbConfig } = require('./config');
const connectMongoDB = require('./db/mongo');

const PORT = appConfig.port;
const app = express();

connectMongoDB(dbConfig)
  .then(() => console.log('Conectado a BD'))
  .catch(err => console.log('Error de conexión a bd, ', err));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
