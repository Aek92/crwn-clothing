import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCz4brTb8vxVIJd3OmhJGDAxUNmk7HDmyk",
    authDomain: "crwn-db-dd95a.firebaseapp.com",
    projectId: "crwn-db-dd95a",
    storageBucket: "crwn-db-dd95a.appspot.com",
    messagingSenderId: "149681906557",
    appId: "1:149681906557:web:708bec0d66a2d9299b2214"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
