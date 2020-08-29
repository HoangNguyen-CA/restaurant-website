import React from 'react';
import Layout from './containers/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/pages/Home';
import Signin from './containers/pages/Signin';
import Signup from './containers/pages/Signup';

function App({ children }: any) {
  return (
    <Layout>
      <Switch>
        <Route path='/signin' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
