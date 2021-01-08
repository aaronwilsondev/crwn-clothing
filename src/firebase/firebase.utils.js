import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD2lin4MOECF-MXfwglmTWjr3hTyVugYSA",
    authDomain: "crwn-db-2468.firebaseapp.com",
    projectId: "crwn-db-2468",
    storageBucket: "crwn-db-2468.appspot.com",
    messagingSenderId: "169108168901",
    appId: "1:169108168901:web:450b06279eaeb6f8a290ac",
    measurementId: "G-J0NJS6YJF6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: "select_account" });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;