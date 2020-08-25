import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

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
        <TextField {...config} value={value} onChange={e => onChange(e)} />
      );
      break;
    default:
      inputElement = (
        <TextField {...config} value={value} onChange={e => onChange(e)} />
      );
  }

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Typography component={'span'}>{inputElement}</Typography>
    </div>
  );
};

export default Input;
