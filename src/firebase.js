import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgcO5rPSRAstqZOGY7o--yGFTd8M-ILfs",
  authDomain: "facebook-messenger-clone-95c80.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-95c80.firebaseio.com",
  projectId: "facebook-messenger-clone-95c80",
  storageBucket: "facebook-messenger-clone-95c80.appspot.com",
  messagingSenderId: "146179963976",
  appId: "1:146179963976:web:0da86eb0cb31770bf7ac7d",
  measurementId: "G-P8F4NSQK5T"
});

const db = firebaseApp.firestore();

export default db;