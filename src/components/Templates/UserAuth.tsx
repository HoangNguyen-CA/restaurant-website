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
    <Grid
      container
      spacing={10}
      direction="column"
      justify="center"
      alignItems="center"
      style={{minHeight: '100vh'}}
    >
      <form onSubmit={handleSubmit}>
        {error ? <Alert severity='error'>{error}</Alert> : null}
        <Typography variant='h5' color="primary">{title}</Typography>
        <FormInputs controls={controls} onChange={onChange} />
        <Button fullWidth variant="contained" color="primary" type='submit'>Submit</Button>
      </form>
    </Grid>
  );
};

export default UserAuth;
