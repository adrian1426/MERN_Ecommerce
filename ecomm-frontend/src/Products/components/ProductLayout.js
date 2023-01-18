import React, { useState } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProduct from './ListProduct';
import { Modal } from 'react-bulma-components';

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onModalOpen = () => {
    setIsModalOpen(true);
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
          <Modal.Card.Header>Formulario</Modal.Card.Header>

          <Modal.Card.Body>
            Body formulario
          </Modal.Card.Body>

        </Modal.Card>
      </Modal>
    </>
  );
};

export default ProductLayout;