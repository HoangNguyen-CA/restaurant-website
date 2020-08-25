import React from 'react';
import FormInputs from '../Forms/FormInputs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface AuthProps {
  controls: Object;
  onChange: Function;
  title: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

//const Form = styled.form``;

const UserAuth = ({ controls, onChange, title, handleSubmit }: AuthProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">{title}</Typography>
      <FormInputs controls={controls} onChange={onChange} />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default UserAuth;
