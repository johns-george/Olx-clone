import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyB_ZoMpD0ZCOuE0CaF3KoY3ETH2V8v7wk4",
  authDomain: "olxtest-11f89.firebaseapp.com",
  projectId: "olxtest-11f89",
  storageBucket: "olxtest-11f89.appspot.com",
  messagingSenderId: "821516552793",
  appId: "1:821516552793:web:079d50adde4a94f715bf48",
  measurementId: "G-RFMH1CH5P6"
};

 export default firebase.initializeApp(firebaseConfig);
