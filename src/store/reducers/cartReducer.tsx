import { Action } from '../types/common.types';
import { ADD_CART, REMOVE_CART } from '../actions/actionTypes';

interface CartState {
  cart: any[];
}

interface CartAction extends Action {}

const initialState: CartState = {
  cart: [],
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
