import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    marginLeft: '3em',
    color: 'white',
  },
});

interface NavProps {
  isAuth: boolean;
  logout: () => void;
}

const Navlinks = (props: NavProps) => {
  const classes = useStyles();
  const history = useHistory();
  const toHome = () => history.push('/');
  const toSignIn = () => history.push('/signin');
  const toSignUp = () => history.push('/signup');
  const toCart = () => history.push('/cart');
  const toOrderBuilder = () => history.push('/orderbuilder');

  let authLinks = null;

  if (props.isAuth) {
    authLinks = (
      <>
        <Button
          className={classes.link}
          onClick={toCart}
          disableElevation
          disableRipple
          size='large'
        >
          Cart
        </Button>
        <Button
          className={classes.link}
          onClick={props.logout}
          disableElevation
          disableRipple
          size='large'
        >
          Sign Out
        </Button>
      </>
    );
  } else {
    authLinks = (
      <>
        <Button
          className={classes.link}
          onClick={toSignIn}
          disableElevation
          disableRipple
          size='large'
        >
          Sign In
        </Button>
        <Button
          className={classes.link}
          onClick={toSignUp}
          disableElevation
          disableRipple
          size='large'
        >
          Sign Up
        </Button>
      </>
    );
  }
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Button
        className={classes.link}
        onClick={toHome}
        disableElevation
        disableRipple
        size='large'
      >
        Home
      </Button>
      <Button
        className={classes.link}
        onClick={toOrderBuilder}
        disableElevation
        disableRipple
        size='large'
      >
        Order Builder
      </Button>
      {authLinks}
    </div>
  );
};

export default Navlinks;
