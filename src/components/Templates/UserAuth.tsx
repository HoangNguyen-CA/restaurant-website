import React from 'react';
import FormInputs from '../Forms/FormInputs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

interface AuthProps {
  error?: string | null;
  controls: Object;
  onChange: Function;
  title: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserAuth = ({
  controls,
  onChange,
  title,
  handleSubmit,
  error,
}: AuthProps) => {
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Alert severity='error'>{error}</Alert> : null}
      <Typography variant='h5'>{title}</Typography>
      <FormInputs controls={controls} onChange={onChange} />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default UserAuth;
