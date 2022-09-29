import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC5GrvabA-2_8SfqcFa1tyFYD4T-sBv2HE",
    authDomain: "project71-636cb.firebaseapp.com",
    projectId: "project71-636cb",
    storageBucket: "project71-636cb.appspot.com",
    messagingSenderId: "215887734196",
    appId: "1:215887734196:web:b86b58e9a723225dc97ee1"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
