import * as firebase from 'firebase';
require('firebase/firestore');
require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyDUeAV-aNOtIzCwD6Sf7bC4Go5CesN3FRs",
    authDomain: "socialmediaappproject-8d56b.firebaseapp.com",
    projectId: "socialmediaappproject-8d56b",
    storageBucket: "socialmediaappproject-8d56b.appspot.com",
    messagingSenderId: "1050336755234",
    appId: "1:1050336755234:web:963c318ec0186e84c4547b",
    measurementId: "G-D1LN4MCXX7"
};

if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase