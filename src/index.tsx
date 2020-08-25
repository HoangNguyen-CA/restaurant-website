import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import firebase from './firebase/firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

/*
 Redux Store 
*/

const composeEnhancers = compose;

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

/*
  Firebase
*/

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
