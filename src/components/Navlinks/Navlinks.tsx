import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface NavProps {
  isAuth: boolean;
  logout: () => void;
}

const Navlinks = (props: NavProps) => {
  const history = useHistory();
  const toHome = () => history.push('/');
  const toSignIn = () => history.push('/signin');
  const toSignUp = () => history.push('/signup');

  let authLinks = null;

  if (props.isAuth) {
    authLinks = (
      <>
        <Button onClick={props.logout} color='secondary'>
          Sign Out
        </Button>
      </>
    );
  } else {
    authLinks = (
      <>
        <Button onClick={toSignIn} color='secondary'>
          Sign In
        </Button>
        <Button onClick={toSignUp} color='secondary'>
          Sign up
        </Button>
        {authLinks}
      </>
    );
  }
  return (
    <div>
      <Button onClick={toHome} color='secondary'>
        Home
      </Button>
      {authLinks}
    </div>
  );
};

export default Navlinks;
