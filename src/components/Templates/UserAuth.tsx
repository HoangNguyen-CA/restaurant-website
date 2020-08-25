import React from 'react';
import FormInputs from '../Forms/FormInputs';
import styled from 'styled-components';

import { Button } from '../UI';

interface AuthProps {
  controls: Object;
  onChange: Function;
  title: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = styled.form``;

const UserAuth = ({ controls, onChange, title, handleSubmit }: AuthProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      {title}
      <FormInputs controls={controls} onChange={onChange}></FormInputs>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default UserAuth;
