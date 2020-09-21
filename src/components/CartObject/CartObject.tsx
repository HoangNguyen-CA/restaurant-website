import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

type Props = {
  name?: string;
  meat: string;
  rice: string;
  beans: string;
  sides: string[];
};

const StyledContainer = styled(Container)({
  padding: '1em',
  backgroundColor: 'white',
});

const CartItem = ({ name, meat, rice, beans, sides }: Props) => {
  return (
    <StyledContainer>
      {name ? (
        <Typography variant='h5'>{name}</Typography>
      ) : (
        <Typography variant='h5'>[Unnamed Order]</Typography>
      )}
      <Typography variant='h6'>Meat: {meat}</Typography>
      <Typography variant='h6'>Rice: {rice}</Typography>
      <Typography variant='h6'>Beans: {beans}</Typography>
      <Typography variant='h6'>Sides:</Typography>
      <ul>
        {sides.map((side) => (
          <li key={side}>side</li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default CartItem;
