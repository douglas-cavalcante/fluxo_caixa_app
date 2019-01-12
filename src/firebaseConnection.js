import firebase from "firebase";

let config = {
  apiKey: "AIzaSyDVF762z-XEJ-BbqUmEB3xERi8PoYGq0xU",
  authDomain: "projeto-teste-e0e8d.firebaseapp.com",
  databaseURL: "https://projeto-teste-e0e8d.firebaseio.com",
  projectId: "projeto-teste-e0e8d",
  storageBucket: "projeto-teste-e0e8d.appspot.com",
  messagingSenderId: "854015051225"
};

firebase.initializeApp(config);

export default firebase;