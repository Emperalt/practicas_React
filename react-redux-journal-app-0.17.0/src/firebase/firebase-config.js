import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBrxM23oRlHvEI_Ehc5EiBVfPqqzZLuNAI",
    authDomain: "react-app-cursos-e3b50.firebaseapp.com",
    projectId: "react-app-cursos-e3b50",
    storageBucket: "react-app-cursos-e3b50.appspot.com",
    messagingSenderId: "923626200178",
    appId: "1:923626200178:web:aa0fcd96b3166bdc0676eb"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }