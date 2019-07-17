import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB9oUZV_Mupos262WDAK_VTbTvsjgpNT8o',
  authDomain: 'king-clothes-db.firebaseapp.com',
  databaseURL: 'https://king-clothes-db.firebaseio.com',
  projectId: 'king-clothes-db',
  storageBucket: '',
  messagingSenderId: '96466431122',
  appId: '1:96466431122:web:69bc910b9127fc97'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
