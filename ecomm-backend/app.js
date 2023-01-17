const express = require('express');
const productsRoute = require('./routes/products');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use('/api/v1', productsRoute);

module.exports = app;