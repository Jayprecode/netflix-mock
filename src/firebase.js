import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjmxTEbCfdjILVjjDE5Yu7mQ6JsRVhlyY",
  authDomain: "netflix-clone-2-80bf2.firebaseapp.com",
  projectId: "netflix-clone-2-80bf2",
  storageBucket: "netflix-clone-2-80bf2.appspot.com",
  messagingSenderId: "933648281648",
  appId: "1:933648281648:web:535ef77cf8febb6db9bdf5",
  measurementId: "G-MPSWZCX83R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;