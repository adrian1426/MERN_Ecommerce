import React from 'react';
import AddButton from './AddButton';
import Header from './Header';
import Loading from './Loading';

const ProductLayout = () => {
  return (
    <>
      <Header
        title="Products app"
      />

      <AddButton />

      <Loading />
    </>
  );
};

export default ProductLayout;