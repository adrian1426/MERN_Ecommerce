import PropTypes from 'prop-types';
import { Container, Section } from 'react-bulma-components';

const Header = (props) => {
  const { title } = props;

  return (
    <Section>
      <Container>
        <h1 className="title has-text-centered">{title}</h1>
      </Container>
    </Section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;