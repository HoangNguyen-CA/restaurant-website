import React from 'react';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    marginLeft: '3em',
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

  let authLinks = null;

  if (props.isAuth) {
    authLinks = (
      <>
        <Link
          className={classes.link}
          component='button'
          onClick={props.logout}
          color='inherit'
          variant='button'
        >
          Sign Out
        </Link>
      </>
    );
  } else {
    authLinks = (
      <>
        <Link
          className={classes.link}
          component='button'
          onClick={toSignIn}
          color='inherit'
          variant='button'
        >
          Sign In
        </Link>
        <Link
          className={classes.link}
          component='button'
          onClick={toSignUp}
          color='inherit'
          variant='button'
        >
          Sign Up
        </Link>
        {authLinks}
      </>
    );
  }
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Link
        className={classes.link}
        component='button'
        onClick={toHome}
        color='inherit'
        variant='button'
      >
        Home
      </Link>
      {authLinks}
    </div>
  );
};

export default Navlinks;
