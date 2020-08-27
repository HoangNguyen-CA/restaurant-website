import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navlinks = () => {
  const history = useHistory();
  const toHome = () => history.push('/');
  const toSignIn = () => history.push('/signin');
  const toSignUp = () => history.push('/signup');
  return (
    <div>
      <Button onClick={toHome} color="secondary">Home</Button>
      <Button onClick={toSignIn} color="secondary">Sign In</Button>
      <Button onClick={toSignUp} color="secondary">Sign up</Button>
    </div>
  );
};

export default Navlinks;
