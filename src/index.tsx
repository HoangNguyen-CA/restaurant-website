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

const composeEnhancers = compose;

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
