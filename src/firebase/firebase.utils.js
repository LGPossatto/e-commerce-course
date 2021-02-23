import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzW5vvVAnjZmWEp6UGuIdVrjrOtHGHtGM",
  authDomain: "e-commerce-course-c8bb5.firebaseapp.com",
  projectId: "e-commerce-course-c8bb5",
  storageBucket: "e-commerce-course-c8bb5.appspot.com",
  messagingSenderId: "159310317630",
  appId: "1:159310317630:web:9e4b92c8b14333aa70296f",
  measurementId: "G-GTSVNRKDNH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
