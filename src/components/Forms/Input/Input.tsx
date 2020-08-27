import React from 'react';
import TextField from '@material-ui/core/TextField';

interface InputProps {
  type: string;
  label: string;
  config: Object;
  value: string;
  onChange: Function;
}

const Input = ({ type, label, config, value, onChange }: InputProps) => {
  let inputElement = null;

  switch (type) {
    case 'input' as string:
      inputElement = (
        <TextField
          fullWidth
          label={label + ' *'}
          {...config}
          value={value}
          onChange={(e) => onChange(e)}
        />
      );
      break;
    default:
      inputElement = (
        <TextField
          fullWidth
          label={label + ' *'}
          {...config}
          value={value}
          onChange={(e) => onChange(e)}
        />
      );
  }

  return <div>{inputElement}</div>;
};

export default Input;
