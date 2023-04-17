import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA_hEDcH4QWZq1ANyVsvwro33fh__UEg28',
  authDomain: 'carstro-15495.firebaseapp.com',
  databaseURL: 'https://carstro-15495-default-rtdb.firebaseio.com',
  projectId: 'carstro-15495',
  storageBucket: 'carstro-15495.appspot.com',
  messagingSenderId: '920852337820',
  appId: '1:920852337820:web:8b065261afc6b025b5c959',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
