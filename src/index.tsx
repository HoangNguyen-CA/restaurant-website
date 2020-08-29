import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';

import { FirebaseProvider } from './firebase/FirebaseContext';

/*
 Redux Store 
*/
//@ts-ignore
const devTools: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <MuiThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </MuiThemeProvider>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
