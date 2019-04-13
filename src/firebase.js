import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUoNBtK76zs29BAR1TDOzxNr2c3y4RT_0",
    authDomain: "agenda-e3dfe.firebaseapp.com",
    databaseURL: "https://agenda-e3dfe.firebaseio.com",
    projectId: "agenda-e3dfe",
    storageBucket: "agenda-e3dfe.appspot.com",
    messagingSenderId: "136326956300"
  };
  firebase.initializeApp(config);
  const firestore = firebase.firestore();
  const settings = {/*your settings...*/ timestampsInSnapshots:true};
  firestore.settings(settings);
export default firebase