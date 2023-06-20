import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCLomVY6RygN4_WyScd3uDYqYUvP065Dt8",
    authDomain: "olxclone-johns.firebaseapp.com",
    projectId: "olxclone-johns",
    storageBucket: "olxclone-johns.appspot.com",
    messagingSenderId: "655481891037",
    appId: "1:655481891037:web:f6755bd8f4a22d64211334",
    measurementId: "G-FDYG8RLVJ7"
  };
 export default firebase.initializeApp(firebaseConfig);
