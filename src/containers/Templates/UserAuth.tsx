import React, { useState } from 'react';
import FormInputs from '../../components/Forms/FormInputs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';

const checkFilled = (controls: any): boolean => {
  for (let control in controls) {
    if (!controls[control].value) return false;
  }
  return true;
};

type Props = {
  controls: any;
  title: string;
  setControls: (control: any) => void;
  onSubmit: () => void;
};

const UserAuth = ({ controls, title, setControls, onSubmit }: Props) => {
  const [error, setError] = useState('');

  const handleOnChange = (
    e: React.FormEvent<HTMLInputElement>,
    controlName: string
  ) => {
    const updatedControls: any = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: (e.target as HTMLInputElement).value,
      },
    };
    setControls(updatedControls);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');

    try {
      await onSubmit();
    } catch (e) {
      if (e.message) setError(e.message);
    }
  };

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ minHeight: '100vh' }}
    >
      <form onSubmit={handleSubmit} style={{ width: '90%', maxWidth: '16em' }}>
        <Box textAlign='center' mt={4}>
          <Typography variant='h4' color='primary'>
            {title}
          </Typography>
        </Box>
        <Box my={2}>
          {error ? <Alert severity='error'>{error}</Alert> : null}
        </Box>

        <FormInputs controls={controls} onChange={handleOnChange} />
        <Box mt={4}>
          {checkFilled(controls) ? (
            <Button fullWidth variant='contained' color='primary' type='submit'>
              Submit
            </Button>
          ) : (
            <Button
              disabled
              fullWidth
              variant='contained'
              color='primary'
              type='submit'
            >
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Grid>
  );
};

export default UserAuth;
