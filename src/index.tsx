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
import rootReducer from './store/reducers/index';

import { FirebaseProvider } from './firebase/FirebaseContext';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
