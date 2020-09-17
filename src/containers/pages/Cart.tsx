import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartObject from '../../components/CartObject/CartObject';
import { CartItem } from '../../store/types/common.types';

type Props = {
  cart: any;
};

type State = {};

class Cart extends Component<Props, State> {
  render() {
    let items = this.props.cart.map((item: CartItem) => {
      return <CartObject meat={item.meat}></CartObject>;
    });
    return <div>{items}</div>;
  }
}

const mapStateToProps = (state: any) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
