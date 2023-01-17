import React, { useState } from 'react';
import AddButton from './AddButton';
import Header from './Header';
import Loading from './Loading';

const ProductLayout = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header
        title="Products app"
      />

      <AddButton />

      {
        isLoading
          ? <Loading />
          : 'Mostrar resultados'
      }
    </>
  );
};

export default ProductLayout;