import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvQ2goTg2DCFlvMh0QvHqxtsxUiGwm2EY",
  authDomain: "tkdpatterns-9a752.firebaseapp.com",
  databaseURL: "https://tkdpatterns-9a752.firebaseio.com",
  projectId: "tkdpatterns-9a752",
  storageBucket: "",
  messagingSenderId: "86649783036",
  appId: "1:86649783036:web:8741bb40bf7bdf1c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
