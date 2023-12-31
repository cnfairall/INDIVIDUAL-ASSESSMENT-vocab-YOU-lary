import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDOM';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
  clearDom();
};

export { signIn, signOut };
