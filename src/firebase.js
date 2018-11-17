import firebase from 'firebase/app';
import "firebase/auth";

// Thank you:
// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

var prodConfig = {
   apiKey: "AIzaSyBMrE5VcvI3tBcftHDoTeuMrg9ZWKPnuUw",
   authDomain: "concards-prod.firebaseapp.com",
   databaseURL: "https://concards-prod.firebaseio.com",
   projectId: "concards-prod",
   storageBucket: "concards-prod.appspot.com",
   messagingSenderId: "342638255995"
};

var devConfig = {
   apiKey: "AIzaSyDWVvYn4HPF0ky_TpnI9fjvFFsGFrvm-xI",
   authDomain: "concards-3550f.firebaseapp.com",
   databaseURL: "https://concards-3550f.firebaseio.com",
   projectId: "concards-3550f",
   storageBucket: "concards-3550f.appspot.com",
   messagingSenderId: "620387313168"
};

const config = process.env.NODE_ENV === 'production'
   ? prodConfig
   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
const auth = firebase.auth();

export {
  auth,
};
