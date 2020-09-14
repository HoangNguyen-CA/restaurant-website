import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';

import { combineReducers } from 'redux';
import { FiberPin } from '@material-ui/icons';

export const mainReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export default mainReducer;
