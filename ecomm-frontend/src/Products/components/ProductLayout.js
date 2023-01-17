import React from 'react';
import AddButton from './AddButton';
import Header from './Header';
import ListProduct from './ListProduct';

const ProductLayout = () => {

  return (
    <>
      <Header
        title="Products app"
      />

      <AddButton />

      <ListProduct />
    </>
  );
};

export default ProductLayout;