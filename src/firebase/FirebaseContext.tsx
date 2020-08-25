import React, { createContext, useEffect } from 'react';
import Firebase from './firebase';
import { connect } from 'react-redux';

import { setUser } from '../store/actions/userActions';

export const FirebaseContext = createContext({});

let firebase = new Firebase();

const Provider = (props: any) => {
  useEffect(() => {
    firebase.auth.onAuthStateChanged(async (resUser: Object) => {
      if (resUser) {
        console.log(resUser);
        props.setUser(resUser);
      } else {
        console.log(null);
        props.setUser(null);
      }
    });
  }, []);
  return (
    <FirebaseContext.Provider value={firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  setUser: (user: Object) => setUser(user),
};

export const FirebaseProvider: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider);

export default FirebaseContext;
