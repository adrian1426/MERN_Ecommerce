import PropTypes from 'prop-types';
import Loading from './Loading';

const ListProduct = (props) => {
  const { isLoading, products } = props;

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

ListProduct.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
};

export default ListProduct;