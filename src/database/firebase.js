import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZOWcPHsOzEKBT4PCz2c2TxA31wsyhqgA",
    authDomain: "produccion3-2b45e.firebaseapp.com",
    projectId: "produccion3-2b45e",
    storageBucket: "produccion3-2b45e.appspot.com",
    messagingSenderId: "432365899370",
    appId: "1:432365899370:web:ae19cc246329c8b1900413",
    measurementId: "G-1Q20P4DL03"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = fb.firestore();