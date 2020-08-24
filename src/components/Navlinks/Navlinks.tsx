import React from 'react';
import styled from 'styled-components';

import Navlink from './Navlink/Navlink';

const Container = styled.div``;

const Navlinks = () => {
  return (
    <Container>
      <Navlink>Home</Navlink>
      <Navlink>Orders</Navlink>
      <Navlink>Contact</Navlink>
    </Container>
  );
};

export default Navlinks;
