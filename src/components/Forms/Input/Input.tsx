import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Label = styled.label``;

const StyledInput = styled.input<any>``;

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
        <StyledInput {...config} value={value} onChange={onChange} />
      );
      break;
    default:
      inputElement = (
        <StyledInput {...config} value={value} onChange={onChange} />
      );
  }

  return (
    <Container>
      <Label>{label}</Label>
      {inputElement}
    </Container>
  );
};

export default Input;
