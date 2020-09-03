import React from 'react';
import StyledInput from './Input/Input';

import { Controls } from '../../interfaces/userAuth';

type Props = {
  controls: Controls;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    controlName: string
  ) => void;
};
const FormInputs = ({ controls, onChange }: Props) => {
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
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChange(e, control)}
      />
    );
  }
  return <>{inputElements}</>;
};

export default FormInputs;
