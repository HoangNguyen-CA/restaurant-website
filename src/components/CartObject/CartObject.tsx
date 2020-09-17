import React from 'react';

type Props = {
  meat: string;
};
const CartItem = ({ meat }: Props) => {
  return (
    <div>
      <h1>{meat}</h1>
    </div>
  );
};

export default CartItem;
