import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjf034dpj3u-R_1V2ZuziTmD2ALridyCU",
  authDomain: "vuetalk-6357b.firebaseapp.com",
  projectId: "vuetalk-6357b",
  storageBucket: "vuetalk-6357b.appspot.com",
  messagingSenderId: "683008219015",
  appId: "1:683008219015:web:ac2c4fe54b513a51bba522",
  measurementId: "G-2BCJT3Q5GR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, firebase, storage };
