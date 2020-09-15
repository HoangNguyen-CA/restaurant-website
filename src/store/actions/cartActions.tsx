import { ADD_CART, REMOVE_CART } from './actionTypes';
import { CartItem } from '../types/common.types';

interface Dispatched {
  type: string;
  payload: CartItem;
}

export const addItem = (order: {
  meat: string;
  rice: string;
  beans: string;
  sides: string[];
}): Dispatched => {
  const id = '' + Math.round(Math.random() * 10000000000000000);
  return {
    type: ADD_CART,
    payload: {
      ...order,
      id,
    },
  };
};

export const removeItem = () => {
  return {
    type: REMOVE_CART,
    payload: {},
  };
};
