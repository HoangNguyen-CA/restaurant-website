import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navlinks from '../components/Navlinks/Navlinks';

import { connect } from 'react-redux';

import FirebaseContext from '../firebase/FirebaseContext';

//For putting title to left and buttons(links) to right
const flexGrow = {
  flexGrow: 1,
};

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = (props: NavbarProps) => {
  const firebase: any = useContext(FirebaseContext);

  const handleLogout = async () => {
    await firebase.auth.signOut();
  };

  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h4' style={flexGrow}>
          Chipotle
        </Typography>
        <Navlinks isAuth={props.isAuthenticated} logout={handleLogout} />
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.user.user !== null,
});

export default connect(mapStateToProps)(Navbar);
