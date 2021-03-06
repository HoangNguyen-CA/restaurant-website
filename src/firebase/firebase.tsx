import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWrAza-PddCn6otPJNyFZl1HtcPIukIE4',
  authDomain: 'chipotle-recreation.firebaseapp.com',
  databaseURL: 'https://chipotle-recreation.firebaseio.com',
  projectId: 'chipotle-recreation',
  storageBucket: 'chipotle-recreation.appspot.com',
  messagingSenderId: '637924533873',
  appId: '1:637924533873:web:b4e6bad1902a996bbc5dd0',
  measurementId: 'G-Q42HGTDHE2',
};

class Firebase {
  auth: any;
  db: any;
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      firebase.firestore();
    }

    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
}
export default Firebase;
