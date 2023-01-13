const express = require('express');

const api = express.Router();

api.post('/products', (req, res) => res.send({ success: true }));

module.exports = api;