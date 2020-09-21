import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartObject from '../../components/CartObject/CartObject';
import { CartItem } from '../../store/types/common.types';

import { styled } from '@material-ui/core/styles';
import { Container, Typography, Box, Button } from '@material-ui/core';

type Props = {
  cart: any;
};

type State = {};

const StyledGrid = styled(Container)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2em',
  padding: '2em',
  backgroundColor: '#eee',
});

const StyledContainer = styled(Container)({
  marginTop: '2em',
  marginBottom: '2em',
});

class Cart extends Component<Props, State> {
  render() {
    let items = this.props.cart.map((item: CartItem, index: number) => {
      return (
        <CartObject
          key={item.id}
          name={item.name}
          meat={item.meat}
          rice={item.rice}
          beans={item.beans}
          sides={item.sides}
        ></CartObject>
      );
    });
    return (
      <StyledContainer>
        <Box mb={2}>
          <Typography variant='h1' align='center'>
            Cart
          </Typography>
        </Box>
        <StyledGrid>
          {items}
          <Button variant='contained' color='primary' size='large'>
            Check Out
          </Button>
        </StyledGrid>
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
