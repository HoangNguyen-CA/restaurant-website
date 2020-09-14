import { SET_USER } from './actionTypes';

export const setUser = (user: Object | null) => {
  return { type: SET_USER, payload: user };
};
