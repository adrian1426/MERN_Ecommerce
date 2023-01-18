import React, { useState } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProduct from './ListProduct';
import { Modal } from 'react-bulma-components';
import Form from './Form';
import { addProduct } from '../services';

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const _addProduct = async (product) => {
    const response = await addProduct(product);

    if (response.status === 201) {
      console.log(response.data);
    } else {
      console.log('Error: ', response.data);
    }
  };

  const handleSubmit = (data) => {
    _addProduct(data);
  };

  return (
    <>
      <Header
        title="Products app"
      />
      <AddButton onClick={onModalOpen} />
      <ListProduct />

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