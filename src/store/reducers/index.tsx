import { userReducer } from './userReducer';

import { combineReducers } from 'redux';

export const mainReducer = combineReducers({
  user: userReducer,
});
export default mainReducer;
