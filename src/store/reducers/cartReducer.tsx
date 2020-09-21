import { Action } from '../types/common.types';
import { ADD_CART, REMOVE_CART } from '../actions/actionTypes';
import { CartItem } from '../types/common.types';

interface CartState {
  cart: CartItem[];
}

interface CartAction extends Action {}

const initialState: CartState = {
  cart: [
    {
      id: '123',
      meat: 'chicken',
      rice: 'brown',
      beans: 'black',
      sides: ['side1', 'side2'],
    },
    {
      id: '123',
      meat: 'chicken',
      rice: 'brown',
      beans: 'black',
      sides: ['side1', 'side2'],
    },
    {
      id: '123',
      meat: 'chicken',
      rice: 'brown',
      beans: 'black',
      sides: ['side1', 'side2'],
    },
    {
      id: '123',
      meat: 'chicken',
      rice: 'brown',
      beans: 'black',
      sides: ['side1', 'side2'],
    },
  ],
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
