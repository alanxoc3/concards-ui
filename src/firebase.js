import firebase from 'firebase';
import "firebase/auth";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDWVvYn4HPF0ky_TpnI9fjvFFsGFrvm-xI",
    authDomain: "concards-3550f.firebaseapp.com",
    databaseURL: "https://concards-3550f.firebaseio.com",
    projectId: "concards-3550f",
    storageBucket: "concards-3550f.appspot.com",
    messagingSenderId: "620387313168"
  };

firebase.initializeApp(config);
export default firebase;

