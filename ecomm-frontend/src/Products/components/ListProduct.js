import PropTypes from 'prop-types';
import Loading from './Loading';
import { Card, Columns, Container, Section, Content, Heading } from 'react-bulma-components';

const ListProduct = (props) => {
  const { isLoading, products } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (products.length === 0) {
    return <h2 className="title has-text-centered">You don't have any products</h2>;
  }

  return (
    <Section>
      <Container>
        <Columns>
          {
            products.map(product => (
              <Columns.Column size={4} key={product._id}>
                <Card>
                  <Card.Image size='16by9' src={product.imgUrl} />
                  <Card.Content>
                    <Content>
                      <Heading>{product.name}</Heading>
                      <Heading subtitle size={6}>{product.description}</Heading>
                      <hr />
                      <label>Precio Unitario: {product.unitaryPrice}</label>
                      <br />
                      <label>Cantidad en Stock: {product.size}</label>
                    </Content>
                  </Card.Content>
                </Card>
              </Columns.Column>
            ))
          }
        </Columns>
      </Container>
    </Section>
  );
};

ListProduct.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
};

export default ListProduct;