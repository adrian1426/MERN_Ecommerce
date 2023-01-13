const express = require('express');
const productsRoute = require('./routes/products');

const app = express();

app.use('/api/v1', productsRoute);

module.exports = app;