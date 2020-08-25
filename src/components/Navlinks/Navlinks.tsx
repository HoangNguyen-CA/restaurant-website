import React from 'react';
import styled from 'styled-components';

import Navlink from './Navlink/Navlink';

const Container = styled.div``;

const Navlinks = () => {
  return (
    <Container>
      <Navlink to='/'>Home</Navlink>
      <Navlink to='signin'>Sign In</Navlink>
      <Navlink to='signup'>Sign up</Navlink>
    </Container>
  );
};

export default Navlinks;
