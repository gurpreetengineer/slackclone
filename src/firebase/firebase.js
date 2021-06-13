import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChhDhRYdoOpSL_33GmE71fekFEbOCRBJU",
  authDomain: "slackclone-f2dae.firebaseapp.com",
  projectId: "slackclone-f2dae",
  storageBucket: "slackclone-f2dae.appspot.com",
  messagingSenderId: "439172245498",
  appId: "1:439172245498:web:5403b7774ad46c1b9d2643",
  measurementId: "G-R5K1JC06VC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //To Initialize our application
const db = firebase.firestore() // To access Database of our application

// Adding User Login Authentication

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;