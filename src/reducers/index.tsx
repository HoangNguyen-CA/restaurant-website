import { userReducer } from './userReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { combineReducers } from 'redux';

export const mainReducer = combineReducers({
  user: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
export default mainReducer;
