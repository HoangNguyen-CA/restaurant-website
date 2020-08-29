import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface InputProps {
  type: string;
  label: string;
  config: Object;
  value: string;
  onChange: Function;
}

const Input = ({ type, label, config, value, onChange }: InputProps) => {
  let inputElement = null;
  const [state, setstate] = React.useState(false);
  const handleState = () => setstate(!state);

  switch (type) {
    case 'input' as string:
      inputElement = (
        <TextField
          fullWidth
          label={label + ' *'}
          {...config}
          value={value}
          type={label !== "Password" ? 'text' : (state ? 'text' : 'password')}
          onChange={(e) => onChange(e)}
          InputProps={{endAdornment:
            <InputAdornment position="end">
              {label === "Password" ? (
                <IconButton onClick={handleState}>
                  {state ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ) : <div />}
            </InputAdornment> 
          }}
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
          type={state ? 'text' : 'password'}
          onChange={(e) => onChange(e)}
          InputProps={{endAdornment:
            <InputAdornment position="end">
              {label === "Password" ? (
                <IconButton onClick={handleState}>
                  {state ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ) : null}
            </InputAdornment> 
          }}
        />
      );
  }

  return <div>{inputElement}</div>;
};

export default Input;
