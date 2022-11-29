// Import the functions you need from the SDKs you need
import { Notification as Toast } from "rsuite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/messaging";
import { getAnalytics } from "firebase/analytics";
import { composeFunctions } from "rsuite/esm/utils";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJxjry-nJVEuXizukR94gXqg0smTSldq8",
  authDomain: "talk2learn-f6765.firebaseapp.com",
  databaseURL:
    "https://talk2learn-f6765-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "talk2learn-f6765",
  storageBucket: "talk2learn-f6765.appspot.com",
  messagingSenderId: "288570778193",
  appId: "1:288570778193:web:a516a5be250db679eb4e70",
  measurementId: "G-VDJBNH1BCB",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

const analytics = getAnalytics(app);
