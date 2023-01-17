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