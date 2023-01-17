import React, { useState, useEffect } from 'react';
import { getProducts } from '../services';
import Loading from './Loading';

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const resProducts = await getProducts();

    if (resProducts.status === 200) {
      setProducts(resProducts.data.products);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default ListProduct;