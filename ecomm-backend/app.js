const express = require('express');
const productsRoute = require('./routes/products');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', productsRoute);

module.exports = app;