import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import { styled } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import FirebaseContext from '../firebase/FirebaseContext';

import { useHistory } from 'react-router-dom';

import Navlinks from '../components/Navlinks/Navlinks';

const StyledBox = styled(Box)({
  cursor: 'pointer',
});
interface Props {
  isAuthenticated: boolean;
}

const Navbar = (props: Props) => {
  const firebase: any = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogout = async () => {
    await firebase.auth.signOut();
  };

  const handleGotoHome = () => {
    history.push('/');
  };

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <StyledBox my={1} onClick={handleGotoHome}>
          <img
            src={require('../resources/logo.png')}
            alt='icon'
            width='80'
            height='80'
          />
        </StyledBox>
        <Navlinks isAuth={props.isAuthenticated} logout={handleLogout} />
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: { user: { user: {} | null } }) => ({
  isAuthenticated: state.user.user !== null,
});

export default connect(mapStateToProps)(Navbar);
