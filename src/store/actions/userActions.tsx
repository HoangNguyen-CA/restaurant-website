import { SET_USER } from '../constants/common.constants';

export const setUser = (user: Object | null) => {
  return { type: SET_USER, payload: user };
};
