import * as firebase from 'firebase';
require('firebase/firestore');
require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyDVy_g2Ar4TZen2XXWxzfboNwU_U5SH__A",
    authDomain: "nextgenerationsocialmediaapp.firebaseapp.com",
    projectId: "nextgenerationsocialmediaapp",
    storageBucket: "nextgenerationsocialmediaapp.appspot.com",
    messagingSenderId: "585578349287",
    appId: "1:585578349287:web:c934158bec8c6d2329d842",
    measurementId: "G-LWGEJ4GSFJ"
  };

if ( !firebase.apps.length ) { 
    firebase.initializeApp(firebaseConfig); 
}
export default firebase