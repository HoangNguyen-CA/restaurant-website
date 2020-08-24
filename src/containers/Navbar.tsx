import React from 'react';
import styled from 'styled-components';

import Navlinks from '../components/Navlinks/Navlinks';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  align-items: center;
  padding: 1em;
`;

const Brand = styled.h5`
  font-size: 1.2rem;
  letter-spacing: 0.05em;
`;

const Navbar = () => {
  return (
    <Container>
      <Brand>Chipotle</Brand>
      <Navlinks />
    </Container>
  );
};

export default Navbar;
