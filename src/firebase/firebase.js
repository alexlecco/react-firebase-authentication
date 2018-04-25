import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA2kMWKKF-QSOB0oTxyeb7zoHgo6ZUVyik",
  authDomain: "groceryapp-f69fc.firebaseapp.com",
  databaseURL: "https://groceryapp-f69fc.firebaseio.com",
  projectId: "groceryapp-f69fc",
  storageBucket: "groceryapp-f69fc.appspot.com",
  messagingSenderId: "592881313811"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
