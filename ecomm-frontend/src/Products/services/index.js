import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProducts() {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export async function addProduct(product) {
  try {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('unitaryPrice', product.unitaryPrice);
    formData.append('size', product.size);
    formData.append('imagen', product.imagen);

    const response = await axios.post(`${baseUrl}/products`, formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};