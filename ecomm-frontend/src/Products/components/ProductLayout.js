import React, { useState, useEffect } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProduct from './ListProduct';
import { Modal } from 'react-bulma-components';
import Form from './Form';
import { addProduct, getProducts } from '../services';

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    setIsLoading(true);
    const resProducts = await getProducts();

    if (resProducts.status === 200) {
      setProducts(resProducts.data.products);
    }

    setIsLoading(false);
  };

  const _addProduct = async (product) => {
    const response = await addProduct(product);

    if (response.status === 201) {
      setIsModalOpen(false);
      loadProducts();
    } else {
      console.log('Error: ', response.data);
    }
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (data) => {
    _addProduct(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header
        title="Products app"
      />
      <AddButton onClick={onModalOpen} />

      <ListProduct
        isLoading={isLoading}
        products={products}
      />

      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Card>
          <Modal.Card.Header showClose={false}>
            <Modal.Card.Title>Add Product</Modal.Card.Title>
          </Modal.Card.Header>

          <Modal.Card.Body>
            <Form handleSubmit={handleSubmit} />
          </Modal.Card.Body>

        </Modal.Card>
      </Modal>
    </>
  );
};

export default ProductLayout;