import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANkPFRMSyZGYmLXsPBjrec2KPpGUGeBeM",
  authDomain: "app-a41d8.firebaseapp.com",
  projectId: "app-a41d8",
  storageBucket: "app-a41d8.appspot.com",
  messagingSenderId: "97664414293",
  appId: "1:97664414293:web:6dc65e07012db216579adc",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
