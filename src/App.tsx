import React from 'react';
import Layout from './containers/Layout';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
