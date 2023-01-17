import React, { useState } from 'react';
import Loading from './Loading';

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default ListProduct;