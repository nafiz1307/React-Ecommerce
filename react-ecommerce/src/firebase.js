import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDohgZxw8JlPabPtJWcS-G7gDAUUzeQ9Xo",
  authDomain: "react-ecommerce-961a5.firebaseapp.com",
  projectId: "react-ecommerce-961a5",
  storageBucket: "react-ecommerce-961a5.appspot.com",
  messagingSenderId: "594322627908",
  appId: "1:594322627908:web:0c74928c041db1cd2c4b11",
  measurementId: "G-PGPK2XYNYE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}