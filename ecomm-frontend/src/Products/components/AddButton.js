import PropTypes from 'prop-types';
import { Container, Section, Button } from 'react-bulma-components';

const AddButton = (props) => {
  const { onClick } = props;

  return (
    <Section>
      <Container>
        <div className="is-pulled-right">
          <Button
            onClick={onClick}
            color='primary'
          >
            Add
          </Button>
        </div>
      </Container>
    </Section>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddButton;