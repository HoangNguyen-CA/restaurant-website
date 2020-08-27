import React from 'react';
import Layout from './containers/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/pages/Home';
import Signin from './containers/pages/Signin';
import Signup from './containers/pages/Signup';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path='/signin' component={Signin}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
