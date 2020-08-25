import React, { createContext } from 'react';
import Firebase from './firebase';

export const FirebaseContext = createContext({});

export const FirebaseProvider = (props: any) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
