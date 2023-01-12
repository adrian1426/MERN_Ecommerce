require('dotenv').config();

const express = require('express');
const { appConfig } = require('./config');

const PORT = appConfig.port;
const app = express();

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
