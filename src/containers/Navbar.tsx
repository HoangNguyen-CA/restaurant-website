import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Navlinks from '../components/Navlinks/Navlinks';

import { connect } from 'react-redux';

import FirebaseContext from '../firebase/FirebaseContext';

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = (props: NavbarProps) => {
  const firebase: any = useContext(FirebaseContext);

  const handleLogout = async () => {
    await firebase.auth.signOut();
  };

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Box my={1}>
          <img
            src={require('../resources/logo.png')}
            alt='icon'
            width='80'
            height='80'
          />
        </Box>
        <Navlinks isAuth={props.isAuthenticated} logout={handleLogout} />
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.user.user !== null,
});

export default connect(mapStateToProps)(Navbar);
