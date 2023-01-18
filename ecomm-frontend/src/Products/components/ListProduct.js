import React, { useState, useEffect } from 'react';
import { getProducts } from '../services';
import Loading from './Loading';

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const resProducts = await getProducts();

    if (resProducts.status === 200) {
      setProducts(resProducts.data.products);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (products.length === 0) {
    return <h2 className="title has-text-centered">You don't have any products</h2>;
  }

  return (
    <div>
      <h2>Listado de productos</h2>
    </div>
  );
};

export default ListProduct;