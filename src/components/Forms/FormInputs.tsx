import React from 'react';
import StyledInput from './Input/Input';

interface FormProps {
  controls: any;
  onChange: Function;
}
const FormInputs = ({ controls, onChange }: FormProps) => {
  const inputElements = [];
  for (let control in controls) {
    let properties = controls[control];
    inputElements.push(
      <StyledInput
        key={control}
        type={properties.type}
        label={control}
        config={properties.config}
        value={properties.value}
        onChange={(e: Event) => onChange(e, control)}
      />
    );
  }
  return <>{inputElements}</>;
};

export default FormInputs;
