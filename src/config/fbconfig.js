import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBJoh6Z8R_qMIqnIZbqKLVWCk_nm_dfIT4",
    authDomain: "msgme-17886.firebaseapp.com",
    databaseURL: "https://msgme-17886.firebaseio.com",
    projectId: "msgme-17886",
    storageBucket: "msgme-17886.appspot.com",
    messagingSenderId: "42669232261",
    appId: "1:42669232261:web:3c8add9540175d472419ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase ;