import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navlinks from '../components/Navlinks/Navlinks';

//For putting title to left and buttons(links) to right
const flexGrow = {
  flexGrow: 1,
};

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4" style={flexGrow}>Chipotle</Typography>
        <Navlinks />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
