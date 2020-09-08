import React from 'react';
import Layout from './containers/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/pages/Home';
import Signin from './containers/pages/Signin';
import Signup from './containers/pages/Signup';
import OrderBuilder from './containers/pages/OrderBuilder';

function App({ children }: any) {
  return (
    <Layout>
      <Switch>
        <Route exact path='/signin' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/orderbuilder' component={OrderBuilder}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
