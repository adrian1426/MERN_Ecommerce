const Product = require('../models/Product');

async function addProduct(req, res) {
  try {
    const { name, size, unitaryPrice, description } = req.body;

    const product = Product({ name, size, unitaryPrice, description });

    if (req.file) {
      const { filename } = req.file;
      product.setImgUrl(filename);
    }

    const productStored = await product.save();

    res.status(201).send({ success: true, productStored });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

async function getProducts(req, res) {
  const products = await Product.find().lean().exec();
  res.status(200).send({ success: true, products });
};

module.exports = {
  addProduct,
  getProducts
};