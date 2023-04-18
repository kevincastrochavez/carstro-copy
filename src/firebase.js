import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAkrC_p5zdW8yGzLVi85gw352mGLMoGVx0',
  authDomain: 'carstro-copy.firebaseapp.com',
  projectId: 'carstro-copy',
  storageBucket: 'carstro-copy.appspot.com',
  messagingSenderId: '912419158823',
  appId: '1:912419158823:web:a72ebd976a1750cc53c702',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
