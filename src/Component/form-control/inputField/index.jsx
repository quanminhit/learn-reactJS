import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  // form: PropTypes.shape({
  //   formState: PropTypes.shape({
  //     errors: PropTypes.object,
  //     touchedFields: PropTypes.object,
  //   }).isRequired,
  // }).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, lable, disabled } = props;
  const { formState } = form;
  const errorMessage = formState.errors[name]?.message;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={lable}
          disabled={disabled}
          error={!!errorMessage}
          helperText={errorMessage || ''}
          // onBlur={() => form.trigger(name)}
        />
      )}
    />
    // <TextField fullWidth />
  );
}

export default InputField;
