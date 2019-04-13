import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_3nT44bX0BMx6Oz-q2GBTAmUg7e3pvcA",
    authDomain: "prograweb-81c79.firebaseapp.com",
    databaseURL: "https://prograweb-81c79.firebaseio.com",
    projectId: "prograweb-81c79",
    storageBucket: "prograweb-81c79.appspot.com",
    messagingSenderId: "268085390116"
  };
  firebase.initializeApp(config);
  const firestore = firebase.firestore();
  const settings = {/*your settings...*/ timestampsInSnapshots:true};
  firestore.settings(settings);
export default firebase