import React from 'react';

import Navbar from '../containers/Navbar';
import { Container } from '@material-ui/core/';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container)({
  padding: '0',
});

type Props = {
  children: React.ReactNode;
  header?: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <StyledContainer maxWidth='xl'>
        <>{props.children}</>
      </StyledContainer>
    </>
  );
};

export default Layout;
