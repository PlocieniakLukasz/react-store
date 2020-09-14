import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxgVw_xXeyrAv628Mvz0Q3AeLxm5V6uC8",
  authDomain: "react-clothing-store-dbf79.firebaseapp.com",
  databaseURL: "https://react-clothing-store-dbf79.firebaseio.com",
  projectId: "react-clothing-store-dbf79",
  storageBucket: "react-clothing-store-dbf79.appspot.com",
  messagingSenderId: "728610332105",
  appId: "1:728610332105:web:1766d62c43b9032fac5c18",
  measurementId: "G-C3MR5LHPWB",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

