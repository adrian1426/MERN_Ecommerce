import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form as FormBulma, Button } from 'react-bulma-components';
const { Field, Control, Label, Input } = FormBulma;

const Form = (props) => {
  const { handleSubmit } = props;

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    unitaryPrice: '',
    size: ''
  });

  const imageInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    })
    );
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit({ ...formValues, imagen: imageInputRef.current.files[0] });
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input
            placeholder='Ingresa el nombre'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Description</Label>
        <Control>
          <Input
            placeholder='Ingresa la descripción'
            name='description'
            value={formValues.description}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Unitary price</Label>
        <Control>
          <Input
            placeholder='Ingresa el precio unitario'
            type='number'
            name='unitaryPrice'
            value={formValues.unitaryPrice}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Size</Label>
        <Control>
          <Input
            placeholder='Ingresa la cantidad existente'
            type='number'
            name='size'
            value={formValues.size}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Selecciona la imagen</Label>
        <Control>
          <input
            type="file"
            ref={imageInputRef}
          />
        </Control>
      </Field>

      <Button color='primary' type='submit'>
        Save
      </Button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;