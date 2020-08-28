import React from 'react';
import FormInputs from '../Forms/FormInputs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';

interface AuthProps {
  error?: string | null;
  controls: Object;
  onChange: Function;
  title: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const checkFilled = (controls: any): boolean => {
  for (let control in controls) {
    if (!controls[control].value) return false;
  }
  return true;
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
      direction='column'
      justify='center'
      alignItems='center'
      style={{ minHeight: '100vh' }}
    >
      <form onSubmit={handleSubmit} style={{ width: '90%', maxWidth: '16em' }}>
        {error ? <Alert severity='error'>{error}</Alert> : null}
        <Box textAlign='center'>
          <img src={require('../../resources/logo.png')} alt="icon" width="100" height="100" />
        </Box>
        <Box textAlign='center' mt={4}>
          <Typography variant='h4' color='primary'>
              {title}
          </Typography>
        </Box>
        <FormInputs controls={controls} onChange={onChange} />
        <Box mt={4}>
          {checkFilled(controls) ? (
            <Button fullWidth variant='contained' color='primary' type='submit'>
              Submit
            </Button>
          ) : (
            <Button disabled fullWidth variant='contained' color='primary' type='submit'>
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Grid>
  );
};

export default UserAuth;
