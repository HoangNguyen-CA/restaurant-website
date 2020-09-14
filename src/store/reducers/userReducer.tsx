import { Action } from '../types/common.types';
import { SET_USER } from '../actions/actionTypes';

export interface UserState {
  user: {} | null;
}

export interface UserAction extends Action {}

const initialState: UserState = {
  user: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
